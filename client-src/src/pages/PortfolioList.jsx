import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

if (!import.meta.env.VITE_API_BASE_URL) {
  throw new Error('VITE_API_BASE_URL environment variable is required. Please set it in client/.env.production or client/.env.development file.');
}
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

const PortfolioList = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetchPortfolios(true); // Reset to first page when filters change
  }, [searchTerm, selectedCategory]);

  const buildQueryParams = (page = 1, limit = 12) => {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    });

    if (searchTerm) {
      params.append('search', searchTerm);
    }

    if (selectedCategory) {
      params.append('category', selectedCategory);
    }

    return params.toString();
  };

  const fetchPortfolios = async (reset = false) => {
    try {
      if (reset) {
        setLoading(true);
        setCurrentPage(1);
        setHasMore(true);
      } else {
        setLoadingMore(true);
      }

      const page = reset ? 1 : currentPage;
      const queryParams = buildQueryParams(page);
      const response = await fetch(`${API_BASE_URL}/portfolio/public?${queryParams}`);

      if (!response.ok) {
        throw new Error('Failed to fetch portfolios');
      }

      const data = await response.json();
      const newPortfolios = data.data || [];

      if (reset) {
        setPortfolios(newPortfolios);
        // Extract unique categories
        const uniqueCategories = [...new Set(
          newPortfolios.flatMap(portfolio => portfolio.category?.name || [])
        )];
        setCategories(uniqueCategories);
      } else {
        setPortfolios(prev => [...prev, ...newPortfolios]);
      }

      // Check if there are more portfolios to load
      setHasMore(newPortfolios.length === 12);
      if (!reset) {
        setCurrentPage(prev => prev + 1);
      }
    } catch (err) {
      console.error('Error fetching portfolios:', err);
      setError('Failed to load portfolios');
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  const loadMorePortfolios = () => {
    if (!loadingMore && hasMore) {
      fetchPortfolios(false);
    }
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading portfolios...</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-red-600">{error}</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Portfolio</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our successful projects and see how we've helped businesses achieve their goals.
            </p>
          </div>

          {/* Filter Toggle */}
          <div className="mb-8 flex justify-center">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="mb-8 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Search */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                  <input
                    type="text"
                    placeholder="Search portfolios..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">All Categories</option>
                    {categories.map((category, index) => (
                      <option key={index} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Clear Filters */}
                <div className="flex items-end">
                  <button
                    onClick={clearFilters}
                    className="w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Portfolio Grid */}
          {portfolios.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No portfolio items available yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolios.map((portfolio) => (
                <article key={portfolio._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  {/* Featured Image */}
                  {portfolio.featuredImage && (
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={`${IMAGE_BASE_URL}${portfolio.featuredImage}`}
                        alt={portfolio.title}
                        className="w-full h-48 object-cover"
                        onError={(e) => {
                          e.target.src = 'https://picsum.photos/400/200?random=4';
                        }}
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6">
                    {/* Category */}
                    {portfolio.category && (
                      <div className="mb-3">
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {portfolio.category.name}
                        </span>
                      </div>
                    )}

                    {/* Title */}
                    <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                      <Link
                        to={`/portfolio/${portfolio.slug}`}
                        className="hover:text-blue-600 transition-colors duration-200"
                      >
                        {portfolio.title}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {portfolio.excerpt}
                    </p>

                    {/* Client */}
                    {portfolio.client && (
                      <p className="text-sm text-gray-500 mb-2">
                        <span className="font-medium">Client:</span> {portfolio.client}
                      </p>
                    )}

                    {/* Technologies */}
                    {portfolio.technologies && portfolio.technologies.length > 0 && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {portfolio.technologies.slice(0, 3).map((tech, index) => (
                            <span
                              key={index}
                              className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                          {portfolio.technologies.length > 3 && (
                            <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                              +{portfolio.technologies.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{formatDate(portfolio.date)}</span>
                      {portfolio.duration && (
                        <span>{portfolio.duration}</span>
                      )}
                    </div>

                    {/* Read More */}
                    <div className="mt-4">
                      <Link
                        to={`/portfolio/${portfolio.slug}`}
                        className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                      >
                        View Project →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {portfolios.length > 0 && hasMore && (
            <div className="text-center mt-12">
              <button
                onClick={loadMorePortfolios}
                disabled={loadingMore}
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors duration-200 flex items-center gap-2 mx-auto"
              >
                {loadingMore ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Loading...
                  </>
                ) : (
                  'Load More Projects'
                )}
              </button>
            </div>
          )}

          {/* No More Portfolios Message */}
          {portfolios.length > 0 && !hasMore && (
            <div className="text-center mt-12">
              <p className="text-gray-600">You've reached the end of our portfolio.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default PortfolioList;