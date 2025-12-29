import express from 'express';
import { body, validationResult } from 'express-validator';
import Blog from '../models/Blog.js';
import { authenticate, isAdmin } from '../middleware/auth.js';

const router = express.Router();

// Get all blogs (admin only)
router.get('/', authenticate, isAdmin, async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ date: -1 });
    res.json({
      success: true,
      data: blogs,
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching blogs',
    });
  }
});

// Get all active blogs (public endpoint)
router.get('/public', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    const search = req.query.search || '';
    const category = req.query.category || '';

    let query = {
      is_active: true,
      status: 'publish'
    };

    // Add search filter
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { excerpt: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } }
      ];
    }

    // Add category filter
    if (category) {
      query['categories.name'] = { $regex: category, $options: 'i' };
    }

    const blogs = await Blog.find(query)
      .sort({ date: -1 })
      .limit(limit)
      .skip((page - 1) * limit);

    res.json({
      success: true,
      data: blogs,
      pagination: {
        page,
        limit,
        hasMore: blogs.length === limit
      }
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching blogs',
    });
  }
});

// Get blog by slug (public endpoint)
router.get('/public/:slug', async (req, res) => {
  try {
    const blog = await Blog.findOne({ 
      slug: req.params.slug,
      is_active: true,
      status: 'publish'
    });
    
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found',
      });
    }
    
    res.json({
      success: true,
      data: blog,
    });
  } catch (error) {
    console.error('Error fetching blog:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching blog',
    });
  }
});

// Get single blog (admin only)
router.get('/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found',
      });
    }
    res.json({
      success: true,
      data: blog,
    });
  } catch (error) {
    console.error('Error fetching blog:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching blog',
    });
  }
});

// Create blog (admin only)
router.post('/',
  authenticate,
  isAdmin,
  [
    body('title').notEmpty().withMessage('Title is required'),
    body('slug').notEmpty().withMessage('Slug is required'),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          message: 'Validation failed',
          errors: errors.array(),
        });
      }

      const { 
        title,
        slug,
        excerpt,
        content,
        featuredImage,
        author,
        date,
        categories,
        tags,
        meta_title,
        meta_description,
        status,
        is_active
      } = req.body;

      // Check if slug already exists
      const existing = await Blog.findOne({ slug });
      if (existing) {
        return res.status(400).json({
          success: false,
          message: 'Blog with this slug already exists',
        });
      }

      const blog = await Blog.create({
        title,
        slug,
        excerpt: excerpt || '',
        content: content || '',
        featuredImage: featuredImage || '',
        author: author || { name: 'Admin', id: '' },
        date: date ? new Date(date) : new Date(),
        categories: categories || [],
        tags: tags || [],
        meta_title: meta_title || '',
        meta_description: meta_description || '',
        status: status || 'draft',
        is_active: is_active !== undefined ? is_active : true,
      });

      res.status(201).json({
        success: true,
        message: 'Blog created successfully',
        data: blog,
      });
    } catch (error) {
      console.error('Error creating blog:', error);
      res.status(500).json({
        success: false,
        message: 'Error creating blog',
      });
    }
  }
);

// Update blog (admin only)
router.put('/:id',
  authenticate,
  isAdmin,
  [
    body('title').notEmpty().withMessage('Title is required'),
    body('slug').notEmpty().withMessage('Slug is required'),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          message: 'Validation failed',
          errors: errors.array(),
        });
      }

      const { 
        title,
        slug,
        excerpt,
        content,
        featuredImage,
        author,
        date,
        categories,
        tags,
        meta_title,
        meta_description,
        status,
        is_active
      } = req.body;

      const existingBlog = await Blog.findById(req.params.id);
      if (!existingBlog) {
        return res.status(404).json({
          success: false,
          message: 'Blog not found',
        });
      }

      // Check if slug already exists (excluding current blog)
      const slugExists = await Blog.findOne({ slug, _id: { $ne: req.params.id } });
      if (slugExists) {
        return res.status(400).json({
          success: false,
          message: 'Blog with this slug already exists',
        });
      }

      const blog = await Blog.findByIdAndUpdate(
        req.params.id,
        {
          title,
          slug,
          excerpt: excerpt || '',
          content: content || '',
          featuredImage: featuredImage || '',
          author: author || { name: 'Admin', id: '' },
          date: date ? new Date(date) : existingBlog.date,
          categories: categories || [],
          tags: tags || [],
          meta_title: meta_title || '',
          meta_description: meta_description || '',
          status: status || 'draft',
          is_active: is_active !== undefined ? is_active : true,
        },
        { new: true, runValidators: true }
      );

      res.json({
        success: true,
        message: 'Blog updated successfully',
        data: blog,
      });
    } catch (error) {
      console.error('Error updating blog:', error);
      res.status(500).json({
        success: false,
        message: 'Error updating blog',
      });
    }
  }
);

// Delete blog (admin only)
router.delete('/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found',
      });
    }

    await Blog.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: 'Blog deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting blog:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting blog',
    });
  }
});

export default router;






