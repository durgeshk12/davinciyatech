// WordPress API Configuration
export const API_BASE_URL = 'https://sandybrown-lobster-845365.hostingersite.com/wp-json/wp/v2';

// Custom Categories Configuration
// Map category slugs to display names
export const CUSTOM_CATEGORIES = {
  'digital-marketing-agency': 'Digital Marketing Agency',
  'nummero': 'Nummero',
  'seo': 'SEO',
  'social-media': 'Social Media',
  'content-marketing': 'Content Marketing',
  // Add more custom categories as needed
};

// Get category display name by slug
export const getCategoryName = (slug) => {
  return CUSTOM_CATEGORIES[slug] || slug;
};

// Get all category slugs
export const getCategorySlugs = () => {
  return Object.keys(CUSTOM_CATEGORIES);
};

// API Endpoints
export const API_ENDPOINTS = {
  posts: `${API_BASE_URL}/posts`,
  categories: `${API_BASE_URL}/categories`,
  tags: `${API_BASE_URL}/tags`,
  media: `${API_BASE_URL}/media`,
  users: `${API_BASE_URL}/users`,
};

// Helper function to build API URLs
export const buildApiUrl = (endpoint, params = {}) => {
  const url = new URL(endpoint);
  Object.keys(params).forEach(key => {
    if (params[key] !== undefined && params[key] !== null) {
      url.searchParams.append(key, params[key]);
    }
  });
  return url.toString();
};

export default {
  API_BASE_URL,
  CUSTOM_CATEGORIES,
  API_ENDPOINTS,
  buildApiUrl,
  getCategoryName,
  getCategorySlugs,
};

