import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';

if (!import.meta.env.VITE_API_BASE_URL) {
  throw new Error('VITE_API_BASE_URL environment variable is required. Please set it in client/.env.production or client/.env.development file.');
}
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

const PortfolioDetail = () => {
  const { slug } = useParams();
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/portfolio/public/${slug}`);

        if (!response.ok) {
          if (response.status === 404) {
            setError('Portfolio item not found');
          } else {
            setError('Failed to load portfolio item');
          }
          return;
        }

        const data = await response.json();
        setPortfolio(data.data);
      } catch (err) {
        console.error('Error fetching portfolio:', err);
        setError('Failed to load portfolio item');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPortfolio();
    }
  }, [slug]);

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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading portfolio item...</p>
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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-red-600 mb-4">{error}</p>
              <Link
                to="/portfolio"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                ← Back to Portfolio
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!portfolio) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-gray-600 mb-4">Portfolio item not found</p>
              <Link
                to="/portfolio"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                ← Back to Portfolio
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link
              to="/portfolio"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Back to Portfolio
            </Link>
          </nav>

          {/* Header */}
          <header className="mb-8">
            {/* Category */}
            {portfolio.category && (
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                  {portfolio.category.name}
                </span>
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {portfolio.title}
            </h1>

            {/* Client and Duration */}
            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
              {portfolio.client && (
                <div className="flex items-center gap-2">
                  <span className="font-medium">Client:</span>
                  <span>{portfolio.client}</span>
                </div>
              )}
              {portfolio.duration && (
                <div className="flex items-center gap-2">
                  <span className="font-medium">Duration:</span>
                  <span>{portfolio.duration}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <span className="font-medium">Completed:</span>
                <span>{formatDate(portfolio.date)}</span>
              </div>
            </div>

            {/* Featured Image */}
            {portfolio.featuredImage && (
              <div className="mb-8">
                <img
                  src={`${IMAGE_BASE_URL}${portfolio.featuredImage}`}
                  alt={portfolio.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                  onError={(e) => {
                    e.target.src = 'https://picsum.photos/800/400?random=2';
                  }}
                />
              </div>
            )}
          </header>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {portfolio.content && (
                <div
                  className="prose prose-lg max-w-none mb-8"
                  dangerouslySetInnerHTML={{ __html: portfolio.content }}
                />
              )}

              {/* Additional Images */}
              {portfolio.images && portfolio.images.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Gallery</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {portfolio.images.map((image, index) => (
                      <img
                        key={index}
                        src={`${IMAGE_BASE_URL}${image}`}
                        alt={`${portfolio.title} - Image ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg shadow-md"
                        onError={(e) => {
                          e.target.src = 'https://picsum.photos/400/200?random=3';
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Project Details */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>

                {portfolio.description && (
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Description</h4>
                    <p className="text-gray-600 text-sm">{portfolio.description}</p>
                  </div>
                )}

                {portfolio.technologies && portfolio.technologies.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {portfolio.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {portfolio.tags && portfolio.tags.length > 0 && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {portfolio.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Back to Portfolio */}
              <Link
                to="/portfolio"
                className="block w-full text-center bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                View All Projects
              </Link>
            </div>
          </div>

          {/* Back to Portfolio */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              to="/portfolio"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default PortfolioDetail;