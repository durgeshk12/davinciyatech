import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Layout from '../components/Layout';

if (!import.meta.env.VITE_API_BASE_URL) {
  throw new Error('VITE_API_BASE_URL environment variable is required. Please set it in client/.env.production or client/.env.development file.');
}
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

// Hero Slider Component
const HeroSlider = ({ slides, imageBaseUrl }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideInterval, setSlideInterval] = useState(null);

  // Sort slides by order
  const sortedSlides = [...slides].sort((a, b) => (a.order || 0) - (b.order || 0));

  useEffect(() => {
    if (sortedSlides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sortedSlides.length);
    }, 5000);

    setSlideInterval(interval);

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [sortedSlides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    if (slideInterval) {
      clearInterval(slideInterval);
    }
    const newInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sortedSlides.length);
    }, 5000);
    setSlideInterval(newInterval);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + sortedSlides.length) % sortedSlides.length);
    if (slideInterval) {
      clearInterval(slideInterval);
    }
    const newInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sortedSlides.length);
    }, 5000);
    setSlideInterval(newInterval);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % sortedSlides.length);
    if (slideInterval) {
      clearInterval(slideInterval);
    }
    const newInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sortedSlides.length);
    }, 5000);
    setSlideInterval(newInterval);
  };

  if (!sortedSlides || sortedSlides.length === 0) return null;

  return (
    <div className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden" id="hero-slider">
      <div className="relative h-full">
        {sortedSlides.map((slide, index) => {
          const imageUrl = slide.image?.startsWith('http') ? slide.image : `${imageBaseUrl}${slide.image}`;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {/* Background Image with Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
                  backgroundColor: '#1e3a8a',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-blue-900/80"></div>
                <div className="absolute inset-0 bg-black/30"></div>
              </div>

              {/* Content */}
              {index === currentSlide && (
                <div className="relative z-20 h-full flex items-center">
                  <div className="max-w-8xl mx-auto px-4 md:px-10 w-full">
                    <div className="max-w-2xl">
                      {slide.title && (
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
                          {slide.title}
                        </h1>
                      )}
                      {slide.description && (
                        <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed animate-fade-in-delay">
                          {slide.description}
                        </p>
                      )}
                      {(slide.primary_button_text || slide.secondary_button_text) && (
                        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
                          {slide.primary_button_text && (
                            <Link
                              to={slide.primary_button_link || '#'}
                              className="bg-numero-orange text-gray-800 px-8 py-4 rounded-lg font-semibold text-base hover:bg-[#ff7a2e] transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                            >
                              {slide.primary_button_text}
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 15 L12 10 L7 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </Link>
                          )}
                          {slide.secondary_button_text && (
                            <Link
                              to={slide.secondary_button_link || '#'}
                              className="bg-numero-teal/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold text-base hover:bg-numero-teal/30 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                            >
                              {slide.secondary_button_text}
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 12 L10 8 L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </Link>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows - Only show if more than 1 slide */}
      {sortedSlides.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18 L9 12 L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18 L15 12 L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Pagination Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {sortedSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? 'bg-white w-8 h-2'
                    : 'bg-white/50 w-2 h-2 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const DynamicPage = () => {
  const location = useLocation();
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Get the current path, ensuring it starts with /
        let path = location.pathname;
        if (!path.startsWith('/')) {
          path = '/' + path;
        }
        
        // Encode the path for the API call
        const encodedPath = encodeURIComponent(path);
        const response = await fetch(`${API_BASE_URL}/pages/public/path/${encodedPath}`);

        if (!response.ok) {
          if (response.status === 404) {
            setError('Page not found');
          } else {
            setError('Failed to load page');
          }
          return;
        }

        const data = await response.json();
        setPage(data.data);
      } catch (err) {
        console.error('Error fetching page:', err);
        setError('Failed to load page');
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, [location.pathname]);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading page...</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !page) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
              <p className="text-gray-600 mb-4">{error || 'The page you are looking for does not exist.'}</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  // Check if this is the home page
  const isHomePage = location.pathname === '/';

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Dynamic Hero Slider - Only for Home Page */}
        {isHomePage && page.hero_slides && page.hero_slides.length > 0 && (
          <HeroSlider slides={page.hero_slides} imageBaseUrl={IMAGE_BASE_URL} />
        )}

        {/* Header Image - Only show if not home page or if home page has no hero slides */}
        {!isHomePage && page.header_image && (
          <div className="w-full h-64 md:h-96 bg-gray-200 overflow-hidden">
            <img
              src={page.header_image.startsWith('http') ? page.header_image : `${IMAGE_BASE_URL}${page.header_image}`}
              alt={page.title || page.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        )}

        {/* Legacy Slider Images - Only if no hero_slides */}
        {!isHomePage && page.slider_images && page.slider_images.length > 0 && (
          <div className="w-full bg-gray-200 overflow-hidden">
            <div className="flex overflow-x-auto snap-x snap-mandatory">
              {page.slider_images.map((image, index) => (
                <div key={index} className="min-w-full snap-center">
                  <img
                    src={image.startsWith('http') ? image : `${IMAGE_BASE_URL}${image}`}
                    alt={`${page.title || page.name} - Slide ${index + 1}`}
                    className="w-full h-64 md:h-96 object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Content Sections - Full Width Support */}
        {page.content_sections && page.content_sections.length > 0 && (
          <div className="w-full">
            {page.content_sections.map((section, index) => (
              <div key={index} className="w-full">
                {section.content && (
                  <div
                    className="dynamic-page-content"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                )}
                {section.image_url && (
                  <img
                    src={`${IMAGE_BASE_URL}${section.image_url}`}
                    alt={section.title || `Section ${index + 1}`}
                    className="w-full rounded-lg shadow-lg my-4"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Main Content - Full Width Support */}
        {page.content && (
          <div
            className="dynamic-page-content w-full"
            dangerouslySetInnerHTML={{ __html: page.content }}
          />
        )}

        {/* If no content sections or main content, show title/description in container */}
        {(!page.content_sections || page.content_sections.length === 0) && !page.content && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Title */}
            {page.title && (
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                {page.title}
              </h1>
            )}

            {/* Description */}
            {page.description && (
              <p className="text-xl text-gray-600 mb-8">
                {page.description}
              </p>
            )}

            <div className="text-center py-12">
              <p className="text-gray-600">No content available for this page.</p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default DynamicPage;
