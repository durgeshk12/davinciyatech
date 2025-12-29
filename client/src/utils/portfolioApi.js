const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5030/api';

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  };
};

export const getPortfolios = async () => {
  const response = await fetch(`${API_BASE_URL}/portfolio`, {
    headers: getAuthHeaders(),
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch portfolios');
  }
  
  const data = await response.json();
  return data.data || data;
};

export const getPortfolio = async (id) => {
  const response = await fetch(`${API_BASE_URL}/portfolio/${id}`, {
    headers: getAuthHeaders(),
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch portfolio');
  }
  
  const data = await response.json();
  return data.data || data;
};

export const createPortfolio = async (portfolioData) => {
  const response = await fetch(`${API_BASE_URL}/portfolio`, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify(portfolioData),
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to create portfolio');
  }
  
  const data = await response.json();
  return data.data || data;
};

export const updatePortfolio = async (id, portfolioData) => {
  const response = await fetch(`${API_BASE_URL}/portfolio/${id}`, {
    method: 'PUT',
    headers: getAuthHeaders(),
    body: JSON.stringify(portfolioData),
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to update portfolio');
  }
  
  const data = await response.json();
  return data.data || data;
};

export const deletePortfolio = async (id) => {
  const response = await fetch(`${API_BASE_URL}/portfolio/${id}`, {
    method: 'DELETE',
    headers: getAuthHeaders(),
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to delete portfolio');
  }
  
  const data = await response.json();
  return data;
};

// Public API calls (no auth required)
export const getPublicPortfolios = async () => {
  const response = await fetch(`${API_BASE_URL}/portfolio/public`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch portfolios');
  }
  
  const data = await response.json();
  return data.data || data;
};

export const getPublicPortfolioBySlug = async (slug) => {
  const response = await fetch(`${API_BASE_URL}/portfolio/public/${slug}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch portfolio');
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






