import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import blogPostsData from '../data/blog-posts-processed.json';
import { getCategoryName, getCategorySlugs } from '../config/api';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const processPosts = () => {
      try {
        // Data is already processed, just set it
        setAllPosts(blogPostsData);
        setPosts(blogPostsData);
        setLoading(false);
      } catch (error) {
        console.error('Error loading blog posts:', error);
        setLoading(false);
      }
    };

    processPosts();
  }, []);

  // Get unique categories from posts
  const getAvailableCategories = () => {
    const categories = new Set();
    allPosts.forEach(post => {
      if (post.categories && Array.isArray(post.categories)) {
        post.categories.forEach(cat => {
          categories.add(cat.slug);
        });
      }
    });
    return Array.from(categories);
  };

  const availableCategories = getAvailableCategories();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const stripHtml = (html) => {
    const tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  const getExcerpt = (content, maxLength = 150) => {
    if (!content) return '';
    const text = stripHtml(content).replace(/\[ ROI \]/gi, '');
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const filteredPosts = posts.filter(post => {
    // Search filter
    const title = post.title?.toLowerCase() || '';
    const excerpt = post.excerpt?.toLowerCase() || '';
    const content = post.content?.toLowerCase() || '';
    const query = searchQuery.toLowerCase();
    const matchesSearch = title.includes(query) || excerpt.includes(query) || content.includes(query);

    // Category filter
    let matchesCategory = true;
    if (selectedCategory !== 'all') {
      const categorySlugs = (post.categories || []).map(cat => cat.slug);
      matchesCategory = categorySlugs.includes(selectedCategory);
    }

    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Blog</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Discover insights, tips, and industry expertise from our team of digital marketing and development professionals.
            </p>
          </div>

          {/* Search Bar and Category Filter */}
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="2"/>
                <path d="M15 15l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none text-gray-700"
              />
            </div>

            {/* Category Filter */}
            {availableCategories.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Posts
                </button>
                {availableCategories.map((categorySlug) => (
                  <button
                    key={categorySlug}
                    onClick={() => setSelectedCategory(categorySlug)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                      selectedCategory === categorySlug
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {getCategoryName(categorySlug)}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No blog posts found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => {
                const featuredImage = post.featuredImage || 
                  'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80';
                
                const excerpt = post.excerpt 
                  ? getExcerpt(post.excerpt, 150)
                  : post.content 
                    ? getExcerpt(post.content, 150)
                    : '';

                return (
                  <article
                    key={post.id}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    {/* Featured Image */}
                    <div className="h-64 bg-gray-200 relative overflow-hidden">
                      <img
                        src={featuredImage}
                        alt={post.title || 'Blog post'}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80';
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Metadata */}
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-2">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2" y="2" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                            <path d="M2 5h12M5 2v4M11 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                          </svg>
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.5"/>
                            <path d="M2 14c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.5"/>
                          </svg>
                          <span>{post.author?.name || 'Admin'}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title || 'Untitled Post'}
                      </h2>

                      {/* Keyword Tag */}
                      <div className="mb-4">
                        <span className="bg-numero-orange text-gray-900 text-xs font-semibold px-3 py-1 rounded-full inline-block">
                          best digital marketing company in Bangalore
                        </span>
                      </div>

                      {/* Excerpt */}
                      <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3">
                        {excerpt || 'No description available.'}
                      </p>

                      {/* Read More Button */}
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors"
                      >
                        Read More
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 12 L11 8 L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;

