import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Blog title is required'],
    trim: true,
  },
  slug: {
    type: String,
    required: [true, 'Blog slug is required'],
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
  content: {
    type: String,
    default: '',
  },
  featuredImage: {
    type: String,
    default: '',
    trim: true,
  },
  author: {
    name: {
      type: String,
      default: 'Admin',
    },
    id: {
      type: String,
      default: '',
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
  categories: [{
    id: String,
    name: String,
    slug: String,
  }],
  tags: [{
    type: String,
    trim: true,
  }],
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
  status: {
    type: String,
    enum: ['draft', 'publish'],
    default: 'draft',
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
blogSchema.index({ is_active: 1 });
blogSchema.index({ status: 1 });
blogSchema.index({ date: -1 });

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;

