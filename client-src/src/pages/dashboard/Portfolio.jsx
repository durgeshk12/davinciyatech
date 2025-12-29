import React, { useState, useEffect } from 'react';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import { getPortfolios, deletePortfolio, updatePortfolio, createPortfolio, uploadImage } from '../../utils/portfolioApi';

if (!import.meta.env.VITE_API_BASE_URL) {
  throw new Error('VITE_API_BASE_URL environment variable is required. Please set it in client/.env.production or client/.env.development file.');
}
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [error, setError] = useState('');
  const [uploadingImage, setUploadingImage] = useState(false);

  useEffect(() => {
    loadPortfolios();
  }, []);

  const loadPortfolios = async () => {
    try {
      setLoading(true);
      const data = await getPortfolios();
      setPortfolios(data);
      setError('');
    } catch (error) {
      console.error('Error loading portfolios:', error);
      setError('Failed to load portfolios. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this portfolio item?')) {
      return;
    }

    try {
      await deletePortfolio(id);
      await loadPortfolios();
      setError('');
    } catch (error) {
      setError('Error deleting portfolio: ' + error.message);
    }
  };

  const handleEdit = (portfolio) => {
    const portfolioId = portfolio._id || portfolio.id;
    setEditingId(portfolioId);
    setEditForm({
      title: portfolio.title || '',
      slug: portfolio.slug || '',
      excerpt: portfolio.excerpt || '',
      description: portfolio.description || '',
      content: portfolio.content || '',
      featuredImage: portfolio.featuredImage || '',
      images: portfolio.images || [],
      category: portfolio.category || { id: '', name: '', slug: '' },
      tags: portfolio.tags || [],
      client: portfolio.client || '',
      technologies: portfolio.technologies || [],
      duration: portfolio.duration || '',
      date: portfolio.date ? new Date(portfolio.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
      status: portfolio.status || 'draft',
      meta_title: portfolio.meta_title || '',
      meta_description: portfolio.meta_description || '',
      is_active: portfolio.is_active !== undefined ? portfolio.is_active : true,
    });
    setShowEditModal(true);
    setError('');
  };

  const handleCreate = () => {
    setEditingId(null);
    setEditForm({
      title: '',
      slug: '',
      excerpt: '',
      description: '',
      content: '',
      featuredImage: '',
      images: [],
      category: { id: '', name: '', slug: '' },
      tags: [],
      client: '',
      technologies: [],
      duration: '',
      date: new Date().toISOString().split('T')[0],
      status: 'draft',
      meta_title: '',
      meta_description: '',
      is_active: true,
    });
    setShowCreateModal(true);
    setError('');
  };

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleTitleChange = (title) => {
    const slug = generateSlug(title);
    setEditForm({ ...editForm, title, slug });
  };

  const handleSave = async () => {
    try {
      setError('');
      if (editingId) {
        await updatePortfolio(editingId, editForm);
      } else {
        await createPortfolio(editForm);
      }
      setShowEditModal(false);
      setShowCreateModal(false);
      setEditingId(null);
      setEditForm({});
      await loadPortfolios();
    } catch (error) {
      setError('Error saving portfolio: ' + error.message);
    }
  };

  const handleCancel = () => {
    setShowEditModal(false);
    setShowCreateModal(false);
    setEditingId(null);
    setEditForm({});
    setError('');
  };

  const formatDate = (dateString) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </DashboardLayout>
    );
  }

  const isModalOpen = showEditModal || showCreateModal;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        {/* Header with Create Button */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Portfolio Management</h1>
            <p className="text-sm text-gray-600 mt-1">Manage all portfolio items</p>
          </div>
          <button
            onClick={handleCreate}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4v16m8-8H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Create New Portfolio Item
          </button>
        </div>

        {/* Portfolios Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">Title</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">Slug</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">Client</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">Category</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">Date</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">Status</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {portfolios.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center py-12 text-gray-500">
                      No portfolio items found. Create a new portfolio item to get started.
                    </td>
                  </tr>
                ) : (
                  portfolios.map((portfolio) => {
                    const portfolioId = portfolio._id || portfolio.id;
                    return (
                      <tr key={portfolioId} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-6 font-medium">{portfolio.title || '-'}</td>
                        <td className="py-4 px-6 text-sm text-gray-600">{portfolio.slug || '-'}</td>
                        <td className="py-4 px-6 text-sm text-gray-600">{portfolio.client || '-'}</td>
                        <td className="py-4 px-6">
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                            {portfolio.category?.name || portfolio.category?.slug || '-'}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-600">{formatDate(portfolio.date)}</td>
                        <td className="py-4 px-6">
                          <span className={`px-2 py-1 rounded text-xs ${
                            (portfolio.status === 'published' || portfolio.status === 'completed') && portfolio.is_active
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-gray-100 text-gray-700'
                          }`}>
                            {portfolio.status === 'published' || portfolio.status === 'completed' ? 'Published' : 'Draft'}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleEdit(portfolio)}
                              className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(portfolioId)}
                              className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Edit/Create Modal */}
        {(showEditModal || showCreateModal) && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  {editingId ? 'Edit Portfolio Item' : 'Create New Portfolio Item'}
                </h2>
                <button
                  onClick={handleCancel}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              <div className="p-6 space-y-6">
                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Title *
                    </label>
                    <input
                      type="text"
                      value={editForm.title}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Portfolio Item Title"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Slug *
                    </label>
                    <input
                      type="text"
                      value={editForm.slug}
                      onChange={(e) => setEditForm({ ...editForm, slug: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="portfolio-item-slug"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Client
                    </label>
                    <input
                      type="text"
                      value={editForm.client || ''}
                      onChange={(e) => setEditForm({ ...editForm, client: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Client Name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Duration
                    </label>
                    <input
                      type="text"
                      value={editForm.duration || ''}
                      onChange={(e) => setEditForm({ ...editForm, duration: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., 3 months, 6 weeks"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category Name
                    </label>
                    <input
                      type="text"
                      value={editForm.category?.name || ''}
                      onChange={(e) => setEditForm({ 
                        ...editForm, 
                        category: { ...editForm.category, name: e.target.value } 
                      })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., Web Development"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category Slug
                    </label>
                    <input
                      type="text"
                      value={editForm.category?.slug || ''}
                      onChange={(e) => setEditForm({ 
                        ...editForm, 
                        category: { ...editForm.category, slug: e.target.value } 
                      })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="web-development"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date
                    </label>
                    <input
                      type="date"
                      value={editForm.date}
                      onChange={(e) => setEditForm({ ...editForm, date: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Status
                    </label>
                    <select
                      value={editForm.status}
                      onChange={(e) => setEditForm({ ...editForm, status: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Active
                    </label>
                    <select
                      value={editForm.is_active ? 'true' : 'false'}
                      onChange={(e) => setEditForm({ ...editForm, is_active: e.target.value === 'true' })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="true">Active</option>
                      <option value="false">Inactive</option>
                    </select>
                  </div>
                </div>

                {/* Excerpt and Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Excerpt
                  </label>
                  <textarea
                    value={editForm.excerpt || ''}
                    onChange={(e) => setEditForm({ ...editForm, excerpt: e.target.value })}
                    rows="2"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Short excerpt..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={editForm.description || ''}
                    onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Portfolio item description..."
                  />
                </div>

                {/* Technologies */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Technologies (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={Array.isArray(editForm.technologies) ? editForm.technologies.join(', ') : ''}
                    onChange={(e) => {
                      const technologies = e.target.value.split(',').map(tech => tech.trim()).filter(tech => tech);
                      setEditForm({ ...editForm, technologies });
                    }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="React, Node.js, MongoDB"
                  />
                </div>

                {/* Tags */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tags (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={Array.isArray(editForm.tags) ? editForm.tags.join(', ') : ''}
                    onChange={(e) => {
                      const tags = e.target.value.split(',').map(tag => tag.trim()).filter(tag => tag);
                      setEditForm({ ...editForm, tags });
                    }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="tag1, tag2, tag3"
                  />
                </div>

                {/* Featured Image */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured Image</h3>
                  <div className="space-y-4">
                    <div>
                      <label
                        className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 hover:border-blue-400 transition-all duration-200 group"
                        onDragOver={(e) => {
                          e.preventDefault();
                          e.currentTarget.classList.add('border-blue-400', 'bg-blue-50');
                        }}
                        onDragLeave={(e) => {
                          e.preventDefault();
                          e.currentTarget.classList.remove('border-blue-400', 'bg-blue-50');
                        }}
                        onDrop={async (e) => {
                          e.preventDefault();
                          e.currentTarget.classList.remove('border-blue-400', 'bg-blue-50');

                          const files = Array.from(e.dataTransfer.files);
                          const imageFile = files.find(file => file.type.startsWith('image/'));

                          if (imageFile) {
                            // Validate file size (5MB limit)
                            if (imageFile.size > 5 * 1024 * 1024) {
                              setError('File size must be less than 5MB');
                              return;
                            }

                            try {
                              setUploadingImage(true);
                              setError('');
                              const result = await uploadImage(imageFile);
                              const imageUrl = `${IMAGE_BASE_URL}${result.url}`;
                              setEditForm({ ...editForm, featuredImage: imageUrl });
                            } catch (err) {
                              setError('Failed to upload image: ' + err.message);
                            } finally {
                              setUploadingImage(false);
                            }
                          } else {
                            setError('Please drop a valid image file');
                          }
                        }}
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          {uploadingImage ? (
                            <div className="flex flex-col items-center">
                              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mb-2"></div>
                              <p className="text-sm text-blue-600 font-medium">Uploading...</p>
                            </div>
                          ) : (
                            <>
                              <svg className="w-10 h-10 mb-3 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                              </svg>
                              <p className="mb-2 text-sm text-gray-600 group-hover:text-blue-600 transition-colors">
                                <span className="font-semibold">Click to choose image</span> or drag and drop
                              </p>
                              <p className="text-xs text-gray-500">PNG, JPG, GIF, WEBP (MAX. 5MB)</p>
                            </>
                          )}
                        </div>
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={async (e) => {
                            const file = e.target.files[0];
                            if (file) {
                              // Validate file size (5MB limit)
                              if (file.size > 5 * 1024 * 1024) {
                                setError('File size must be less than 5MB');
                                return;
                              }

                              // Validate file type
                              if (!file.type.startsWith('image/')) {
                                setError('Please select a valid image file');
                                return;
                              }

                              try {
                                setUploadingImage(true);
                                setError('');
                                const result = await uploadImage(file);
                                const imageUrl = `${IMAGE_BASE_URL}${result.url}`;
                                setEditForm({ ...editForm, featuredImage: imageUrl });
                              } catch (err) {
                                setError('Failed to upload image: ' + err.message);
                              } finally {
                                setUploadingImage(false);
                              }
                            }
                          }}
                          disabled={uploadingImage}
                        />
                      </label>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Or Enter Image URL
                      </label>
                      <input
                        type="url"
                        value={editForm.featuredImage || ''}
                        onChange={(e) => setEditForm({ ...editForm, featuredImage: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>
                    {editForm.featuredImage && (
                      <div className="mt-4">
                        <p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
                        <img
                          src={editForm.featuredImage}
                          alt="Featured preview"
                          className="max-w-full h-48 object-cover rounded-lg border border-gray-200 shadow-sm"
                          onError={(e) => e.target.style.display = 'none'}
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Additional Images */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Images
                  </label>
                  <div className="space-y-4">
                    <div>
                      <label
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 hover:border-blue-400 transition-all duration-200 group"
                        onDragOver={(e) => {
                          e.preventDefault();
                          e.currentTarget.classList.add('border-blue-400', 'bg-blue-50');
                        }}
                        onDragLeave={(e) => {
                          e.preventDefault();
                          e.currentTarget.classList.remove('border-blue-400', 'bg-blue-50');
                        }}
                        onDrop={async (e) => {
                          e.preventDefault();
                          e.currentTarget.classList.remove('border-blue-400', 'bg-blue-50');

                          const files = Array.from(e.dataTransfer.files).filter(file => file.type.startsWith('image/'));

                          if (files.length > 0) {
                            try {
                              setUploadingImage(true);
                              setError('');

                              const uploadedUrls = [];
                              for (const file of files) {
                                // Validate file size (5MB limit)
                                if (file.size > 5 * 1024 * 1024) {
                                  setError(`File "${file.name}" is too large. Maximum size is 5MB.`);
                                  return;
                                }

                                const result = await uploadImage(file);
                                const imageUrl = `${IMAGE_BASE_URL}${result.url}`;
                                uploadedUrls.push(imageUrl);
                              }

                              // Add new images to existing ones
                              const currentImages = Array.isArray(editForm.images) ? editForm.images : [];
                              setEditForm({ ...editForm, images: [...currentImages, ...uploadedUrls] });
                            } catch (err) {
                              setError('Failed to upload images: ' + err.message);
                            } finally {
                              setUploadingImage(false);
                            }
                          } else {
                            setError('Please drop valid image files');
                          }
                        }}
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          {uploadingImage ? (
                            <div className="flex flex-col items-center">
                              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-2"></div>
                              <p className="text-sm text-blue-600 font-medium">Uploading...</p>
                            </div>
                          ) : (
                            <>
                              <svg className="w-8 h-8 mb-2 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                              </svg>
                              <p className="mb-2 text-sm text-gray-600 group-hover:text-blue-600 transition-colors">
                                <span className="font-semibold">Click to choose images</span> or drag and drop
                              </p>
                              <p className="text-xs text-gray-500">PNG, JPG, GIF, WEBP (MAX. 5MB each) - Multiple files allowed</p>
                            </>
                          )}
                        </div>
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          multiple
                          onChange={async (e) => {
                            const files = Array.from(e.target.files);
                            if (files.length > 0) {
                              try {
                                setUploadingImage(true);
                                setError('');

                                const uploadedUrls = [];
                                for (const file of files) {
                                  // Validate file size (5MB limit)
                                  if (file.size > 5 * 1024 * 1024) {
                                    setError(`File "${file.name}" is too large. Maximum size is 5MB.`);
                                    return;
                                  }

                                  // Validate file type
                                  if (!file.type.startsWith('image/')) {
                                    setError(`File "${file.name}" is not a valid image file.`);
                                    return;
                                  }

                                  const result = await uploadImage(file);
                                  const imageUrl = `${IMAGE_BASE_URL}${result.url}`;
                                  uploadedUrls.push(imageUrl);
                                }

                                // Add new images to existing ones
                                const currentImages = Array.isArray(editForm.images) ? editForm.images : [];
                                setEditForm({ ...editForm, images: [...currentImages, ...uploadedUrls] });
                              } catch (err) {
                                setError('Failed to upload images: ' + err.message);
                              } finally {
                                setUploadingImage(false);
                              }
                            }
                          }}
                          disabled={uploadingImage}
                        />
                      </label>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Manual URLs (comma-separated)
                      </label>
                      <p className="text-xs text-gray-500 mb-2">
                        Enter additional image URLs manually. Uploaded images above are managed separately.
                      </p>
                      <textarea
                        value=""
                        onChange={(e) => {
                          // For now, we'll keep this simple - manual URLs can be added later if needed
                          // The main functionality is through file upload
                        }}
                        rows="2"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="https://example.com/image1.jpg,&#10;https://example.com/image2.jpg"
                        disabled
                      />
                      <p className="text-xs text-gray-400 mt-1">
                        Manual URL entry disabled - use file upload above for better experience
                      </p>
                    </div>
                    {Array.isArray(editForm.images) && editForm.images.length > 0 && (
                      <div className="mt-4">
                        <p className="text-sm font-medium text-gray-700 mb-2">
                          Additional Images Preview ({editForm.images.length} uploaded)
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {editForm.images.map((imageUrl, index) => (
                            <div key={index} className="relative group">
                              <img
                                src={imageUrl}
                                alt={`Additional image ${index + 1}`}
                                className="w-full h-24 object-cover rounded-lg border border-gray-200 shadow-sm"
                                onError={(e) => e.target.style.display = 'none'}
                              />
                              <button
                                type="button"
                                onClick={() => {
                                  const newImages = editForm.images.filter((_, i) => i !== index);
                                  setEditForm({ ...editForm, images: newImages });
                                }}
                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Content</h3>
                  <div className="mb-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>💡 Tip:</strong> HTML is supported. To include images in your content, use HTML img tags like:
                    </p>
                    <code className="block mt-2 p-2 bg-white rounded text-xs font-mono text-gray-700">
                      &lt;img src="https://example.com/image.jpg" alt="Description" class="w-full rounded-lg"&gt;
                    </code>
                    <p className="text-sm text-blue-800 mt-2">
                      Do not paste raw image URLs as plain text - they will display as URLs instead of images.
                    </p>
                  </div>
                  <textarea
                    value={editForm.content || ''}
                    onChange={(e) => setEditForm({ ...editForm, content: e.target.value })}
                    rows="15"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                    placeholder="Enter your portfolio content (HTML supported)..."
                  />
                </div>

                {/* SEO Fields */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">SEO Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Meta Title
                      </label>
                      <input
                        type="text"
                        value={editForm.meta_title || ''}
                        onChange={(e) => setEditForm({ ...editForm, meta_title: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Meta title for search engines"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Meta Description
                      </label>
                      <textarea
                        value={editForm.meta_description || ''}
                        onChange={(e) => setEditForm({ ...editForm, meta_description: e.target.value })}
                        rows="3"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Meta description for search engines"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex items-center justify-end gap-3">
                <button
                  onClick={handleCancel}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {editingId ? 'Save Changes' : 'Create Portfolio Item'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Portfolio;






