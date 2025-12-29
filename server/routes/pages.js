import express from 'express';
import { body, validationResult } from 'express-validator';
import Page from '../models/Page.js';
import { authenticate, isAdmin } from '../middleware/auth.js';

const router = express.Router();

// Get all pages (admin only)
router.get('/', authenticate, isAdmin, async (req, res) => {
  try {
    const pages = await Page.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      data: pages,
    });
  } catch (error) {
    console.error('Error fetching pages:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching pages',
    });
  }
});

// Import pages endpoint (admin only)
router.post('/import', authenticate, isAdmin, async (req, res) => {
  try {
    // This will trigger the import script logic
    // For now, return success - actual import should be done via script
    res.json({
      success: true,
      message: 'Please run "npm run import-pages" in the server directory to import pages',
    });
  } catch (error) {
    console.error('Error importing pages:', error);
    res.status(500).json({
      success: false,
      message: 'Error importing pages',
    });
  }
});

// Get page by path (public endpoint for frontend)
router.get('/public/path/:path(*)', async (req, res) => {
  try {
    let normalizedPath = decodeURIComponent(req.params.path || '');
    
    // Handle root path
    if (normalizedPath === '' || normalizedPath === '/') {
      normalizedPath = '/';
    }
    
    // Normalize path
    if (!normalizedPath.startsWith('/')) {
      normalizedPath = '/' + normalizedPath;
    }
    
    const page = await Page.findOne({ 
      path: normalizedPath,
      is_active: true 
    });
    
    if (!page) {
      return res.status(404).json({
        success: false,
        message: 'Page not found',
      });
    }
    
    res.json({
      success: true,
      data: page,
    });
  } catch (error) {
    console.error('Error fetching page by path:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching page',
    });
  }
});

// Get single page (admin only)
router.get('/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const page = await Page.findById(req.params.id);
    if (!page) {
      return res.status(404).json({
        success: false,
        message: 'Page not found',
      });
    }
    res.json({
      success: true,
      data: page,
    });
  } catch (error) {
    console.error('Error fetching page:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching page',
    });
  }
});

// Create page (admin only)
router.post('/',
  authenticate,
  isAdmin,
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('path').notEmpty().withMessage('Path is required'),
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
        name, 
        path, 
        title, 
        meta_title, 
        meta_description, 
        header_image, 
        slider_images,
        hero_slides,
        content_sections, 
        content, 
        category, 
        description, 
        is_active 
      } = req.body;

      // Check if path already exists
      const existing = await Page.findOne({ path });
      if (existing) {
        return res.status(400).json({
          success: false,
          message: 'Page with this path already exists',
        });
      }

      const page = await Page.create({
        name,
        path,
        title: title || '',
        meta_title: meta_title || '',
        meta_description: meta_description || '',
        header_image: header_image || '',
        slider_images: Array.isArray(slider_images) ? slider_images : [],
        hero_slides: Array.isArray(hero_slides) ? hero_slides : [],
        content_sections: Array.isArray(content_sections) ? content_sections : [],
        content: content || '',
        category: category || 'general',
        description: description || '',
        is_active: is_active !== undefined ? is_active : true,
      });

      res.status(201).json({
        success: true,
        message: 'Page created successfully',
        data: page,
      });
    } catch (error) {
      console.error('Error creating page:', error);
      res.status(500).json({
        success: false,
        message: 'Error creating page',
      });
    }
  }
);

// Update page (admin only)
router.put('/:id',
  authenticate,
  isAdmin,
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('path').notEmpty().withMessage('Path is required'),
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
        name, 
        path, 
        title, 
        meta_title, 
        meta_description, 
        header_image, 
        slider_images,
        hero_slides,
        content_sections, 
        content, 
        category, 
        description, 
        is_active 
      } = req.body;

      const existingPage = await Page.findById(req.params.id);
      if (!existingPage) {
        return res.status(404).json({
          success: false,
          message: 'Page not found',
        });
      }

      // Check if path already exists (excluding current page)
      const pathExists = await Page.findOne({ path, _id: { $ne: req.params.id } });
      if (pathExists) {
        return res.status(400).json({
          success: false,
          message: 'Page with this path already exists',
        });
      }

      const page = await Page.findByIdAndUpdate(
        req.params.id,
        {
          name,
          path,
          title: title || '',
          meta_title: meta_title || '',
          meta_description: meta_description || '',
          header_image: header_image || '',
          slider_images: Array.isArray(slider_images) ? slider_images : [],
          hero_slides: Array.isArray(hero_slides) ? hero_slides : [],
          content_sections: Array.isArray(content_sections) ? content_sections : [],
          content: content || '',
          category: category || 'general',
          description: description || '',
          is_active: is_active !== undefined ? is_active : true,
        },
        { new: true, runValidators: true }
      );

      res.json({
        success: true,
        message: 'Page updated successfully',
        data: page,
      });
    } catch (error) {
      console.error('Error updating page:', error);
      res.status(500).json({
        success: false,
        message: 'Error updating page',
      });
    }
  }
);

// Delete page (admin only)
router.delete('/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const page = await Page.findById(req.params.id);
    if (!page) {
      return res.status(404).json({
        success: false,
        message: 'Page not found',
      });
    }

    await Page.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: 'Page deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting page:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting page',
    });
  }
});

export default router;
