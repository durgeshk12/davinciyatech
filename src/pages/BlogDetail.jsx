import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import blogPostsData from '../data/blog-posts-processed.json';

const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const findPost = () => {
      try {
        // Find post by slug - data is already processed
        const postData = blogPostsData.find((p) => p.slug === slug);
        
        if (postData) {
          setPost(postData);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error finding blog post:', error);
        setLoading(false);
      }
    };

    if (slug) {
      findPost();
    }
  }, [slug]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const featuredImage = post.featuredImage || 
    'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80';

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15 L7 10 L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative h-96 md:h-[500px] bg-gray-200">
        <img
          src={featuredImage}
          alt={post.title || 'Blog post'}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
      </section>

      {/* Article Content */}
      <article className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-10">
          {/* Metadata */}
          <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M2 5h12M5 2v4M11 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M2 14c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              <span>{post.author?.name || 'Admin'}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title || 'Untitled Post'}
          </h1>

          {/* Keyword Tag */}
          <div className="mb-8">
            <span className="bg-numero-orange text-gray-900 text-xs font-semibold px-4 py-2 rounded-full inline-block">
              best digital marketing company in Bangalore
            </span>
          </div>

          {/* Content */}
          <div 
            className="blog-content max-w-none"
            style={{
              fontSize: '1.125rem',
              lineHeight: '1.75rem',
            }}
            dangerouslySetInnerHTML={{ 
              __html: post.content 
                ? post.content.replace(/\[ ROI \]/gi, '')
                : '' 
            }}
          />

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-4">
              <span className="text-gray-600 font-semibold">Share:</span>
              <div className="flex gap-3">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title || '')}&url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Related Articles
            </h2>
            <p className="text-lg text-gray-600">
              Continue reading more insights from our blog
            </p>
          </div>
          <div className="text-center">
            <Link
              to="/blog"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;

