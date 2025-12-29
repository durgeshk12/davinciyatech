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
const PORT = process.env.PORT || 5030;

// Middleware
app.use(cors());
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

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

