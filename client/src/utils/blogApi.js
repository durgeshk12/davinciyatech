const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5030/api';

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  };
};

export const getBlogs = async () => {
  const response = await fetch(`${API_BASE_URL}/blog`, {
    headers: getAuthHeaders(),
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch blogs');
  }
  
  const data = await response.json();
  return data.data || data;
};

export const getBlog = async (id) => {
  const response = await fetch(`${API_BASE_URL}/blog/${id}`, {
    headers: getAuthHeaders(),
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch blog');
  }
  
  const data = await response.json();
  return data.data || data;
};

export const createBlog = async (blogData) => {
  const response = await fetch(`${API_BASE_URL}/blog`, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify(blogData),
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to create blog');
  }
  
  const data = await response.json();
  return data.data || data;
};

export const updateBlog = async (id, blogData) => {
  const response = await fetch(`${API_BASE_URL}/blog/${id}`, {
    method: 'PUT',
    headers: getAuthHeaders(),
    body: JSON.stringify(blogData),
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to update blog');
  }
  
  const data = await response.json();
  return data.data || data;
};

export const deleteBlog = async (id) => {
  const response = await fetch(`${API_BASE_URL}/blog/${id}`, {
    method: 'DELETE',
    headers: getAuthHeaders(),
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to delete blog');
  }
  
  const data = await response.json();
  return data;
};

// Public API calls (no auth required)
export const getPublicBlogs = async () => {
  const response = await fetch(`${API_BASE_URL}/blog/public`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch blogs');
  }
  
  const data = await response.json();
  return data.data || data;
};

export const getPublicBlogBySlug = async (slug) => {
  const response = await fetch(`${API_BASE_URL}/blog/public/${slug}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch blog');
  }
  
  const data = await response.json();
  return data.data || data;
};

// Upload image
export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append('image', file);

  const token = localStorage.getItem('token');
  const response = await fetch(`${API_BASE_URL}/upload/image`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: formData,
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to upload image');
  }
  
  const data = await response.json();
  return data.data;
};
