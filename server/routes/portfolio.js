import express from 'express';
import { body, validationResult } from 'express-validator';
import Portfolio from '../models/Portfolio.js';
import { authenticate, isAdmin } from '../middleware/auth.js';

const router = express.Router();

// Get all portfolios (admin only)
router.get('/', authenticate, isAdmin, async (req, res) => {
  try {
    const portfolios = await Portfolio.find().sort({ date: -1 });
    res.json({
      success: true,
      data: portfolios,
    });
  } catch (error) {
    console.error('Error fetching portfolios:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching portfolios',
    });
  }
});

// Get all active portfolios (public endpoint)
router.get('/public', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    const search = req.query.search || '';
    const category = req.query.category || '';

    let query = {
      is_active: true,
      status: { $in: ['published', 'completed'] }
    };

    // Add search filter
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { excerpt: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { client: { $regex: search, $options: 'i' } }
      ];
    }

    // Add category filter
    if (category) {
      query['category.name'] = { $regex: category, $options: 'i' };
    }

    const portfolios = await Portfolio.find(query)
      .sort({ date: -1 })
      .limit(limit)
      .skip((page - 1) * limit);

    res.json({
      success: true,
      data: portfolios,
      pagination: {
        page,
        limit,
        hasMore: portfolios.length === limit
      }
    });
  } catch (error) {
    console.error('Error fetching portfolios:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching portfolios',
    });
  }
});

// Get portfolio by slug (public endpoint)
router.get('/public/:slug', async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({ 
      slug: req.params.slug,
      is_active: true,
      status: { $in: ['published', 'completed'] }
    });
    
    if (!portfolio) {
      return res.status(404).json({
        success: false,
        message: 'Portfolio not found',
      });
    }
    
    res.json({
      success: true,
      data: portfolio,
    });
  } catch (error) {
    console.error('Error fetching portfolio:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching portfolio',
    });
  }
});

// Get single portfolio (admin only)
router.get('/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);
    if (!portfolio) {
      return res.status(404).json({
        success: false,
        message: 'Portfolio not found',
      });
    }
    res.json({
      success: true,
      data: portfolio,
    });
  } catch (error) {
    console.error('Error fetching portfolio:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching portfolio',
    });
  }
});

// Create portfolio (admin only)
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
        description,
        content,
        featuredImage,
        images,
        category,
        tags,
        client,
        technologies,
        duration,
        date,
        status,
        meta_title,
        meta_description,
        is_active
      } = req.body;

      // Check if slug already exists
      const existing = await Portfolio.findOne({ slug });
      if (existing) {
        return res.status(400).json({
          success: false,
          message: 'Portfolio with this slug already exists',
        });
      }

      const portfolio = await Portfolio.create({
        title,
        slug,
        excerpt: excerpt || '',
        description: description || '',
        content: content || '',
        featuredImage: featuredImage || '',
        images: images || [],
        category: category || { id: '', name: '', slug: '' },
        tags: tags || [],
        client: client || '',
        technologies: technologies || [],
        duration: duration || '',
        date: date ? new Date(date) : new Date(),
        status: status || 'draft',
        meta_title: meta_title || '',
        meta_description: meta_description || '',
        is_active: is_active !== undefined ? is_active : true,
      });

      res.status(201).json({
        success: true,
        message: 'Portfolio created successfully',
        data: portfolio,
      });
    } catch (error) {
      console.error('Error creating portfolio:', error);
      res.status(500).json({
        success: false,
        message: 'Error creating portfolio',
      });
    }
  }
);

// Update portfolio (admin only)
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
        description,
        content,
        featuredImage,
        images,
        category,
        tags,
        client,
        technologies,
        duration,
        date,
        status,
        meta_title,
        meta_description,
        is_active
      } = req.body;

      const existingPortfolio = await Portfolio.findById(req.params.id);
      if (!existingPortfolio) {
        return res.status(404).json({
          success: false,
          message: 'Portfolio not found',
        });
      }

      // Check if slug already exists (excluding current portfolio)
      const slugExists = await Portfolio.findOne({ slug, _id: { $ne: req.params.id } });
      if (slugExists) {
        return res.status(400).json({
          success: false,
          message: 'Portfolio with this slug already exists',
        });
      }

      const portfolio = await Portfolio.findByIdAndUpdate(
        req.params.id,
        {
          title,
          slug,
          excerpt: excerpt || '',
          description: description || '',
          content: content || '',
          featuredImage: featuredImage || '',
          images: images || [],
          category: category || { id: '', name: '', slug: '' },
          tags: tags || [],
          client: client || '',
          technologies: technologies || [],
          duration: duration || '',
          date: date ? new Date(date) : existingPortfolio.date,
          status: status || 'draft',
          meta_title: meta_title || '',
          meta_description: meta_description || '',
          is_active: is_active !== undefined ? is_active : true,
        },
        { new: true, runValidators: true }
      );

      res.json({
        success: true,
        message: 'Portfolio updated successfully',
        data: portfolio,
      });
    } catch (error) {
      console.error('Error updating portfolio:', error);
      res.status(500).json({
        success: false,
        message: 'Error updating portfolio',
      });
    }
  }
);

// Delete portfolio (admin only)
router.delete('/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);
    if (!portfolio) {
      return res.status(404).json({
        success: false,
        message: 'Portfolio not found',
      });
    }

    await Portfolio.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: 'Portfolio deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting portfolio:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting portfolio',
    });
  }
});

export default router;






