import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
const serverEnvPath = join(__dirname, '..', 'server', '.env');
const rootEnvPath = join(__dirname, '..', '.env');

if (fs.existsSync(serverEnvPath)) {
  dotenv.config({ path: serverEnvPath });
  console.log('✅ Loaded environment from server/.env');
} else if (fs.existsSync(rootEnvPath)) {
  dotenv.config({ path: rootEnvPath });
  console.log('✅ Loaded environment from .env');
} else {
  console.log('⚠️  No .env file found');
}

const MONGO_URI = process.env.MONGO_URI || process.env.MONGODB_URI;

console.log('\n📋 Environment Check:');
console.log(`MONGO_URI: ${MONGO_URI ? '✅ Found' : '❌ Not found'}`);
if (MONGO_URI) {
  // Hide credentials in output
  const safeUri = MONGO_URI.replace(/\/\/[^:]+:[^@]+@/, '//***:***@');
  console.log(`   ${safeUri}`);
} else {
  console.log('   Please set MONGO_URI in your .env file');
}

console.log('\n📁 Files:');
console.log(`server/.env exists: ${fs.existsSync(serverEnvPath) ? '✅' : '❌'}`);
console.log(`.env exists: ${fs.existsSync(rootEnvPath) ? '✅' : '❌'}`);

