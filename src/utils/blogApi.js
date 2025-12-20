import { API_BASE_URL, buildApiUrl, API_ENDPOINTS } from '../config/api';

/**
 * Fetch blog posts from WordPress API
 * @param {Object} params - Query parameters (per_page, categories, etc.)
 * @returns {Promise<Array>} Array of blog posts
 */
export const fetchBlogPosts = async (params = {}) => {
  const defaultParams = {
    per_page: 35,
    _embed: true,
    ...params,
  };

  const url = buildApiUrl(API_ENDPOINTS.posts, defaultParams);
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
};

/**
 * Fetch blog post by slug
 * @param {string} slug - Post slug
 * @returns {Promise<Object|null>} Blog post object or null
 */
export const fetchBlogPostBySlug = async (slug) => {
  const url = buildApiUrl(API_ENDPOINTS.posts, {
    slug,
    _embed: true,
  });

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.length > 0 ? data[0] : null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    throw error;
  }
};

/**
 * Fetch categories from WordPress API
 * @param {Object} params - Query parameters
 * @returns {Promise<Array>} Array of categories
 */
export const fetchCategories = async (params = {}) => {
  const url = buildApiUrl(API_ENDPOINTS.categories, params);
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

/**
 * Fetch posts by category slug
 * @param {string} categorySlug - Category slug
 * @param {Object} params - Additional query parameters
 * @returns {Promise<Array>} Array of blog posts
 */
export const fetchPostsByCategory = async (categorySlug, params = {}) => {
  // First, get the category ID by slug
  const categories = await fetchCategories({ slug: categorySlug });
  
  if (categories.length === 0) {
    return [];
  }

  const categoryId = categories[0].id;
  
  return fetchBlogPosts({
    categories: categoryId,
    ...params,
  });
};

/**
 * Process blog post data to extract author and featured image
 * @param {Object} post - Raw blog post from API
 * @returns {Object} Processed blog post
 */
export const processBlogPost = (post) => {
  let authorName = 'Admin';
  let featuredImageUrl = null;

  // Get author name
  if (post._embedded?.author?.[0]) {
    authorName = post._embedded.author[0].name;
  }

  // Get featured image
  if (post._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
    featuredImageUrl = post._embedded['wp:featuredmedia'][0].source_url;
  }

  return {
    ...post,
    author_name: authorName,
    featured_image_url: featuredImageUrl,
  };
};

/**
 * Process multiple blog posts
 * @param {Array} posts - Array of raw blog posts
 * @returns {Array} Array of processed blog posts
 */
export const processBlogPosts = (posts) => {
  return posts.map(processBlogPost);
};

export default {
  fetchBlogPosts,
  fetchBlogPostBySlug,
  fetchCategories,
  fetchPostsByCategory,
  processBlogPost,
  processBlogPosts,
};

