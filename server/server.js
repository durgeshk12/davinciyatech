import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import authRoutes from './routes/auth.js';
import pagesRoutes from './routes/pages.js';
import blogRoutes from './routes/blog.js';
import portfolioRoutes from './routes/portfolio.js';
import uploadRoutes from './routes/upload.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Required environment variables - no fallbacks
if (!process.env.PORT) {
  console.error('❌ Error: PORT environment variable is required. Please set it in server/.env file.');
  process.exit(1);
}
if (!process.env.NODE_ENV) {
  console.error('❌ Error: NODE_ENV environment variable is required. Please set it in server/.env file.');
  process.exit(1);
}
if (!process.env.MONGO_URI) {
  console.error('❌ Error: MONGO_URI environment variable is required. Please set it in server/.env file.');
  process.exit(1);
}
if (!process.env.JWT_SECRET) {
  console.error('❌ Error: JWT_SECRET environment variable is required. Please set it in server/.env file.');
  process.exit(1);
}
if (!process.env.CORS_ORIGIN) {
  console.error('❌ Error: CORS_ORIGIN environment variable is required. Please set it in server/.env file.');
  process.exit(1);
}

const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

// CORS Configuration - Required from environment
const corsOrigins = process.env.CORS_ORIGIN.split(',').map(origin => origin.trim());

const corsOptions = {
  origin: corsOrigins,
  credentials: true,
  optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Server is running',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  });
});

// Auth routes
app.use('/api/auth', authRoutes);

// Pages routes
app.use('/api/pages', pagesRoutes);

// Blog routes
app.use('/api/blog', blogRoutes);

// Portfolio routes
app.use('/api/portfolio', portfolioRoutes);

// Upload routes
app.use('/api/upload', uploadRoutes);

// Serve uploaded images statically
app.use('/api/uploads/images', express.static(join(__dirname, 'uploads/images')));

// Serve static files from frontend build in production
// IMPORTANT: This must be AFTER API routes but BEFORE the catch-all
if (NODE_ENV === 'production') {
  const frontendBuildPath = join(__dirname, '..', 'frontend');
  
  // Only serve static files for non-API routes
  app.use((req, res, next) => {
    if (req.path.startsWith('/api')) {
      return next(); // Skip static file serving for API routes
    }
    express.static(frontendBuildPath)(req, res, next);
  });
  
  // Handle React Router - serve index.html for all non-API routes
  // This must be the LAST route handler
  app.get('*', (req, res) => {
    // Only handle non-API routes
    if (!req.path.startsWith('/api')) {
      res.sendFile(join(frontendBuildPath, 'index.html'));
    }
  });
}

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Environment: ${NODE_ENV}`);
  if (NODE_ENV === 'production') {
    console.log(`Frontend served from: ${join(__dirname, '..', 'frontend')}`);
  }
});

