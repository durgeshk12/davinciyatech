import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { exec } from 'child_process';
import { promisify } from 'util';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from server/.env or .env
const serverEnvPath = join(__dirname, '..', 'server', '.env');
const rootEnvPath = join(__dirname, '..', '.env');

if (fs.existsSync(serverEnvPath)) {
  dotenv.config({ path: serverEnvPath });
  console.log('Loaded environment from server/.env');
} else if (fs.existsSync(rootEnvPath)) {
  dotenv.config({ path: rootEnvPath });
  console.log('Loaded environment from .env');
} else {
  dotenv.config();
  console.log('Using default environment variables');
}

const MONGO_URI = process.env.MONGO_URI || process.env.MONGODB_URI || 'mongodb://localhost:27017/davinciyatech';
const BACKUP_DIR = join(__dirname, 'database-backups');

if (!process.env.MONGO_URI && !process.env.MONGODB_URI) {
  console.warn('⚠️  Warning: MONGO_URI not found in environment variables');
  console.warn('   Using default: mongodb://localhost:27017/davinciyatech');
  console.warn('   Make sure your .env file contains MONGO_URI');
}

// Extract database name from URI
const getDatabaseName = (uri) => {
  try {
    const url = new URL(uri.replace('mongodb://', 'http://').replace('mongodb+srv://', 'https://'));
    const pathname = url.pathname;
    if (pathname && pathname.length > 1) {
      return pathname.substring(1);
    }
    // Try to extract from connection string
    const match = uri.match(/\/([^?\/]+)/);
    if (match && match[1]) {
      return match[1];
    }
    return 'davinciyatech'; // default
  } catch (error) {
    return 'davinciyatech'; // default
  }
};

const getConnectionString = (uri) => {
  // Remove database name from URI for mongodump
  try {
    const url = new URL(uri.replace('mongodb://', 'http://').replace('mongodb+srv://', 'https://'));
    const protocol = uri.includes('mongodb+srv://') ? 'mongodb+srv://' : 'mongodb://';
    return `${protocol}${url.host}${url.search || ''}`;
  } catch (error) {
    return uri;
  }
};

const createBackup = async () => {
  try {
    // Create backup directory if it doesn't exist
    if (!fs.existsSync(BACKUP_DIR)) {
      fs.mkdirSync(BACKUP_DIR, { recursive: true });
      console.log(`Created backup directory: ${BACKUP_DIR}`);
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').split('T')[0] + '_' + 
                     new Date().toISOString().replace(/[:.]/g, '-').split('T')[1].split('.')[0];
    const dbName = getDatabaseName(MONGO_URI);
    const backupPath = join(BACKUP_DIR, `${dbName}_${timestamp}`);

    console.log('Starting database backup...');
    console.log(`MongoDB URI: ${MONGO_URI.replace(/\/\/[^:]+:[^@]+@/, '//***:***@')}`); // Hide credentials
    console.log(`Database: ${dbName}`);
    console.log(`Backup location: ${backupPath}`);

    // Check if mongodump is available
    try {
      await execAsync('which mongodump');
      console.log('Using mongodump for backup...');
      
      const connectionString = getConnectionString(MONGO_URI);
      let mongodumpCommand = `mongodump --uri="${MONGO_URI}" --out="${backupPath}"`;
      
      // If URI has authentication, it should be in the URI itself
      const result = await execAsync(mongodumpCommand);
      console.log('Backup completed successfully!');
      console.log(`Backup saved to: ${backupPath}`);
      
      // Create a compressed archive
      const archivePath = `${backupPath}.tar.gz`;
      console.log('Creating compressed archive...');
      await execAsync(`tar -czf "${archivePath}" -C "${BACKUP_DIR}" "${dbName}_${timestamp}"`);
      console.log(`Compressed backup saved to: ${archivePath}`);
      
      // Remove uncompressed backup to save space
      await execAsync(`rm -rf "${backupPath}"`);
      console.log('Uncompressed backup removed. Archive created successfully.');
      
      return archivePath;
    } catch (mongodumpError) {
      console.log('mongodump not found. Using MongoDB native backup method...');
      
      // Connect to MongoDB
      console.log('Connecting to MongoDB...');
      await mongoose.connect(MONGO_URI, {
        serverSelectionTimeoutMS: 5000,
        connectTimeoutMS: 5000,
      });
      console.log('✅ Connected to MongoDB');

      // Get all collections
      const db = mongoose.connection.db;
      const collections = await db.listCollections().toArray();
      
      console.log(`Found ${collections.length} collections to backup`);

      // Create backup directory for this specific backup
      if (!fs.existsSync(backupPath)) {
        fs.mkdirSync(backupPath, { recursive: true });
      }

      // Backup each collection
      const backupData = {
        database: dbName,
        timestamp: new Date().toISOString(),
        collections: {}
      };

      for (const collection of collections) {
        const collectionName = collection.name;
        console.log(`Backing up collection: ${collectionName}`);
        
        const data = await db.collection(collectionName).find({}).toArray();
        backupData.collections[collectionName] = data;
        
        // Also save as separate JSON file
        const collectionFile = join(backupPath, `${collectionName}.json`);
        fs.writeFileSync(collectionFile, JSON.stringify(data, null, 2));
        console.log(`  - ${data.length} documents backed up`);
      }

      // Save complete backup as JSON
      const backupFile = join(backupPath, 'complete_backup.json');
      fs.writeFileSync(backupFile, JSON.stringify(backupData, null, 2));

      // Create metadata file
      const metadata = {
        database: dbName,
        timestamp: new Date().toISOString(),
        collections: collections.map(c => c.name),
        totalCollections: collections.length
      };
      const metadataFile = join(backupPath, 'metadata.json');
      fs.writeFileSync(metadataFile, JSON.stringify(metadata, null, 2));

      await mongoose.connection.close();
      console.log('✅ Backup completed successfully!');
      console.log(`📁 Backup saved to: ${backupPath}`);
      
      // Show backup summary
      const stats = fs.statSync(backupPath);
      const sizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
      console.log(`📊 Backup size: ${sizeInMB} MB`);
      console.log(`📦 Collections backed up: ${collections.length}`);
      
      return backupPath;
    }
  } catch (error) {
    console.error('\n❌ Backup failed!');
    console.error('Error:', error.message);
    
    if (error.message.includes('ENOTFOUND') || error.message.includes('ECONNREFUSED')) {
      console.error('\n💡 Troubleshooting:');
      console.error('   1. Check if MongoDB is running');
      console.error('   2. Verify MONGO_URI in your .env file');
      console.error('   3. Test connection: node test-backup.js');
    } else if (error.message.includes('authentication')) {
      console.error('\n💡 Troubleshooting:');
      console.error('   1. Check MongoDB username and password');
      console.error('   2. Verify database user has read permissions');
    }
    
    if (mongoose.connection.readyState === 1) {
      await mongoose.connection.close();
    }
    
    process.exit(1);
  }
};

// Run backup
createBackup()
  .then((backupPath) => {
    console.log(`\n✅ Backup completed successfully!`);
    console.log(`📁 Location: ${backupPath}`);
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Backup failed:', error);
    process.exit(1);
  });

