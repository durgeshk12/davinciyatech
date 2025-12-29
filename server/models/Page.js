import mongoose from 'mongoose';

const pageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Page name is required'],
    trim: true,
  },
  path: {
    type: String,
    required: [true, 'Page path is required'],
    unique: true,
    trim: true,
    index: true,
  },
  // SEO Fields
  title: {
    type: String,
    default: '',
    trim: true,
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
  // Media
  header_image: {
    type: String,
    default: '',
    trim: true,
  },
  // Slider images for home page
  slider_images: {
    type: [String],
    default: [],
  },
  // Hero Slider Slides for home page (with title, buttons, etc.)
  hero_slides: {
    type: [
      {
        image: {
          type: String,
          default: '',
        },
        title: {
          type: String,
          default: '',
        },
        description: {
          type: String,
          default: '',
        },
        primary_button_text: {
          type: String,
          default: '',
        },
        primary_button_link: {
          type: String,
          default: '',
        },
        secondary_button_text: {
          type: String,
          default: '',
        },
        secondary_button_link: {
          type: String,
          default: '',
        },
        order: {
          type: Number,
          default: 0,
        },
      }
    ],
    default: [],
  },
  // Content Sections
  content_sections: {
    type: [
      {
        section_type: {
          type: String,
          enum: ['text', 'image', 'video', 'html', 'component'],
          default: 'text',
        },
        title: String,
        content: String,
        image_url: String,
        video_url: String,
        component_name: String,
        order: {
          type: Number,
          default: 0,
        },
      }
    ],
    default: [],
  },
  // Main HTML Content
  content: {
    type: String,
    default: '',
  },
  category: {
    type: String,
    default: 'general',
    trim: true,
  },
  description: {
    type: String,
    default: '',
  },
  is_active: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

// Index for faster queries (path index is already created by unique: true)
pageSchema.index({ is_active: 1 });
pageSchema.index({ category: 1 });

const Page = mongoose.model('Page', pageSchema);

export default Page;

