if (!import.meta.env.VITE_API_BASE_URL) {
  throw new Error('VITE_API_BASE_URL environment variable is required. Please set it in client/.env.production or client/.env.development file.');
}
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  };
};

export const getPages = async () => {
  const response = await fetch(`${API_BASE_URL}/pages`, {
    headers: getAuthHeaders(),
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch pages');
  }
  
  const data = await response.json();
  return data.data || data;
};

export const getPage = async (id) => {
  const response = await fetch(`${API_BASE_URL}/pages/${id}`, {
    headers: getAuthHeaders(),
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch page');
  }
  
  const data = await response.json();
  return data.data || data;
};

export const createPage = async (pageData) => {
  const response = await fetch(`${API_BASE_URL}/pages`, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify(pageData),
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to create page');
  }
  
  const data = await response.json();
  return data.data || data;
};

export const updatePage = async (id, pageData) => {
  const response = await fetch(`${API_BASE_URL}/pages/${id}`, {
    method: 'PUT',
    headers: getAuthHeaders(),
    body: JSON.stringify(pageData),
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to update page');
  }
  
  const data = await response.json();
  return data.data || data;
};

export const deletePage = async (id) => {
  const response = await fetch(`${API_BASE_URL}/pages/${id}`, {
    method: 'DELETE',
    headers: getAuthHeaders(),
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to delete page');
  }
  
  const data = await response.json();
  return data;
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
      // Don't set Content-Type, let browser set it with boundary
    },
    body: formData,
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to upload image');
  }
  
  const data = await response.json();
  return data.data; // Returns { filename, url, etc. }
};

