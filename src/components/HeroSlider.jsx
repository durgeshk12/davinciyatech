import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'B2C Marketing That Drives Real Results',
      description: 'Transform your consumer brand with data-driven campaigns, social media mastery, and performance marketing that scales with your growth.',
      primaryButton: { text: 'Explore B2C Services', link: '/solutions/b2c-marketing' },
      secondaryButton: { text: 'Case Studies', link: '/blog' },
      backgroundImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80',
    },
    {
      id: 2,
      title: 'B2B Marketing Solutions That Convert',
      description: 'Drive qualified leads and accelerate your B2B sales pipeline with strategic marketing campaigns designed for business growth.',
      primaryButton: { text: 'Explore B2B Services', link: '/solutions/b2b-marketing' },
      secondaryButton: { text: 'Get Started', link: '/contact' },
      backgroundImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80',
    },
    {
      id: 3,
      title: 'Digital Transformation Made Simple',
      description: 'Leverage cutting-edge technology and innovative strategies to transform your business and stay ahead of the competition.',
      primaryButton: { text: 'Our Solutions', link: '/solutions/software-development' },
      secondaryButton: { text: 'Learn More', link: '/about/about-us' },
      backgroundImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image with Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.backgroundImage})`,
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
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed animate-fade-in-delay">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
                      <Link
                        to={slide.primaryButton.link}
                        className="bg-numero-orange text-gray-800 px-8 py-4 rounded-lg font-semibold text-base hover:bg-[#ff7a2e] transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                      >
                        {slide.primaryButton.text}
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 15 L12 10 L7 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                      <Link
                        to={slide.secondaryButton.link}
                        className="bg-numero-teal/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold text-base hover:bg-numero-teal/30 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                      >
                        {slide.secondaryButton.text}
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 12 L10 8 L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
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
        {slides.map((_, index) => (
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
    </div>
  );
};

export default HeroSlider;


