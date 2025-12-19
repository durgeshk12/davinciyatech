import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BrandingServices = () => {
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const brandingServices = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Brand Strategy & Development',
      description: 'Comprehensive brand strategy that aligns with your business goals and resonates with your target audience. We develop brand positioning, messaging frameworks, and brand architecture.',
      tags: ['Market Research', 'Brand Positioning', 'Messaging Strategy', 'Brand Architecture'],
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 9 L15 15 M15 9 L9 15" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Logo Design & Visual Identity',
      description: 'Creating memorable logos and comprehensive visual identity systems that capture your brand essence. From concept to final design, we ensure your brand stands out.',
      tags: ['Logo Design', 'Icon Design', 'Brand Colors', 'Typography'],
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 8 L16 8 M8 12 L16 12 M8 16 L16 16" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Brand Guidelines & Style Guides',
      description: 'Comprehensive brand guidelines that ensure consistent brand application across all touchpoints. We create detailed style guides for your team and partners.',
      tags: ['Style Guides', 'Brand Manual', 'Usage Guidelines', 'Asset Library'],
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2 L2 7 L12 12 L22 7 Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17 L12 22 L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12 L12 17 L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Digital Brand Assets',
      description: 'Complete digital brand assets including website design, social media templates, email templates, and digital marketing materials that maintain brand consistency.',
      tags: ['Responsive Design', 'Social Media', 'Email Templates', 'Digital Assets'],
    },
  ];

  const portfolioProjects = [
    {
      category: 'Tech Startups',
      title: 'MindLogicX',
      description: 'Revolutionary AI platform for enterprise automation',
      metric: '🏆 200% Platform Adoption',
      gradient: 'from-blue-900 to-purple-900',
    },
    {
      category: 'Healthcare',
      title: 'MI LABS',
      description: 'Advanced medical diagnostics and research solutions',
      metric: '🏅 Health Excellence Award',
      gradient: 'from-green-600 to-emerald-700',
    },
    {
      category: 'Tech Startups',
      title: 'CryptographTech',
      description: 'Secure blockchain solutions for financial institutions',
      metric: '🔒 Enterprise Security Certified',
      gradient: 'from-orange-600 to-red-600',
    },
    {
      category: 'Real Estate',
      title: 'Tesla Properties',
      description: 'Premium real estate development and investment',
      metric: '🏠 500+ Properties Sold',
      gradient: 'from-indigo-700 to-blue-800',
    },
    {
      category: 'E-commerce',
      title: 'Fresh Platter',
      description: 'Online grocery delivery platform with nationwide reach',
      metric: '🛒 1M+ Orders Delivered',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      category: 'Tech Startups',
      title: 'Appsian Security',
      description: 'Enterprise security solutions for cloud applications',
      metric: '🛡️ Fortune 500 Clients',
      gradient: 'from-teal-600 to-cyan-600',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Research',
      description: 'Understanding your business, goals, and target audience through comprehensive research and analysis.',
    },
    {
      number: '02',
      title: 'Strategy Development',
      description: 'Creating a strategic foundation for your brand including positioning, messaging, and visual direction.',
    },
    {
      number: '03',
      title: 'Design & Creation',
      description: 'Bringing your brand to life through logo design, visual identity, and comprehensive brand assets.',
    },
    {
      number: '04',
      title: 'Implementation & Launch',
      description: 'Rolling out your new brand across all touchpoints with detailed guidelines and ongoing support.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Tech Startup',
      quote: 'Davinciyatech transformed our brand identity completely. The new logo and visual design perfectly captured our company\'s vision and values.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'E-commerce Business',
      quote: 'Outstanding branding services! The team delivered beyond our expectations and helped establish a strong market presence.',
      rating: 5,
    },
    {
      name: 'Emma Davis',
      role: 'Healthcare Provider',
      quote: 'Professional, creative, and results-driven. Our brand now stands out in a competitive market thanks to Davinciyatech\'s expertise.',
      rating: 5,
    },
  ];

  const filteredProjects = activeFilter === 'All Projects'
    ? portfolioProjects
    : portfolioProjects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                All-in-one Branding Agency Services
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Top-notch branding agency to take your business to the next level. We create powerful brand identities that resonate with your audience and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                >
                  Let's Connect
                </Link>
                <Link
                  to="#portfolio"
                  className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
                >
                  View Our Work
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-500 via-teal-500 to-yellow-400 rounded-lg p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-6 backdrop-blur-sm">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                    <path d="M12 2 L2 7 L12 12 L22 7 Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17 L12 22 L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12 L12 17 L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-4">Brand Identity Design</h2>
                <p className="text-white/90 leading-relaxed">
                  Creating memorable brand experiences that connect with your audience and differentiate your business in the marketplace
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Branding Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Branding Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive branding solutions that establish your market presence and build lasting customer relationships
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {brandingServices.map((service, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="text-numero-teal mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-yellow-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Portfolio */}
      <section id="portfolio" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Brand Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how we've transformed businesses through strategic branding and visual identity design
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['All Projects', 'Tech Startups', 'Healthcare', 'E-commerce', 'Real Estate'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${project.gradient} rounded-lg p-6 text-white hover:scale-105 transition-transform duration-300`}
              >
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/90 mb-4 text-sm">{project.description}</p>
                <p className="text-white/80 text-sm mb-6">{project.metric}</p>
                <div className="flex gap-3">
                  <button className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors">
                    Case Study →
                  </button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                    Visit Website 🌐
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Branding Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Branding Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to building powerful brands that drive business success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-600">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose & Award-Winning Results */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Why Choose */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Why Choose Our Branding Services?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600">
                      <path d="M20 6 L9 17 L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Strategic Approach</h3>
                    <p className="text-gray-600">
                      Every brand strategy is backed by thorough research and market analysis to ensure maximum Impact.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600">
                      <path d="M20 6 L9 17 L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Creative Excellence</h3>
                    <p className="text-gray-600">
                      Award-winning design team that creates visually stunning and memorable brand Identities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600">
                      <path d="M20 6 L9 17 L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">End-to-End Service</h3>
                    <p className="text-gray-600">
                      From initial strategy to final implementation, we handle every aspect of your branding journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Award-Winning Results Card */}
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-8 shadow-sm">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600">
                  <path d="M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7 14.14 L2 9.27 L8.91 8.26 L12 2 Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Award-Winning Results</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">250+</div>
                  <div className="text-sm text-gray-600">Brands Created</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">98%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">15+</div>
                  <div className="text-sm text-gray-600">Awards Won</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from businesses that have transformed their brand identity with our services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7 14.14 L2 9.27 L8.91 8.26 L12 2 Z" fill="#FCD34D" stroke="#FCD34D" strokeWidth="2"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Build Your Brand?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let's create a powerful brand identity that sets you apart from the competition and drives business growth
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
            >
              Get Free Brand Audit
            </Link>
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 2 V6 M8 2 V6 M3 10 H21" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandingServices;
