import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Portfolio title is required'],
    trim: true,
  },
  slug: {
    type: String,
    required: [true, 'Portfolio slug is required'],
    unique: true,
    trim: true,
    index: true,
    lowercase: true,
  },
  excerpt: {
    type: String,
    default: '',
    trim: true,
  },
  description: {
    type: String,
    default: '',
  },
  content: {
    type: String,
    default: '',
  },
  featuredImage: {
    type: String,
    default: '',
    trim: true,
  },
  images: [{
    type: String,
    trim: true,
  }],
  category: {
    id: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    slug: {
      type: String,
      default: '',
    },
  },
  tags: [{
    type: String,
    trim: true,
  }],
  client: {
    type: String,
    default: '',
    trim: true,
  },
  technologies: [{
    type: String,
    trim: true,
  }],
  duration: {
    type: String,
    default: '',
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'completed'],
    default: 'draft',
  },
  meta_title: {
    type: String,
    default: '',
    trim: true,
  },
  meta_description: {
    type: String,
    default: '',
    trim: true,
  },
  is_active: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

// Indexes
// Note: slug already has index: true in field definition, so no need to index it again
portfolioSchema.index({ is_active: 1 });
portfolioSchema.index({ status: 1 });
portfolioSchema.index({ date: -1 });
portfolioSchema.index({ 'category.slug': 1 });

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

export default Portfolio;

