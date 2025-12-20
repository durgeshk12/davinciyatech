import React from 'react';
import { Link } from 'react-router-dom';

const FractionalCMO = () => {
  const strategicServices = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Vision & Strategic Planning',
      description: 'Define your marketing vision and create long-term strategic roadmaps aligned with business objectives.',
      tags: ['Market Analysis', 'Competitive Positioning', 'Strategic Roadmap', 'Vision Development'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Business Transformation',
      description: 'Drive organizational change and transform marketing into a revenue-generating engine.',
      tags: ['Business Model Innovation', 'Market Entry Strategy', 'Digital Transformation', 'Change Management'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Growth Architecture',
      description: 'Design sustainable growth frameworks and establish metrics-driven decision making.',
      tags: ['Growth Framework Design', 'Revenue Model Planning', 'Scaling Strategy', 'Investment Priorities'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Innovation Leadership',
      description: 'Foster innovation culture and identify breakthrough opportunities in your market.',
      tags: ['Innovation Strategy', 'New Market Opportunities', 'Product-Market Fit', 'Future-proofing'],
    },
  ];

  const strategicApproach = [
    {
      number: '01',
      title: 'Strategic Audit',
      description: 'Comprehensive analysis of your business model, market position, and growth potential.',
    },
    {
      number: '02',
      title: 'Vision Alignment',
      description: 'Align marketing strategy with overall business vision and stakeholder objectives.',
    },
    {
      number: '03',
      title: 'Strategic Framework',
      description: 'Develop long-term strategic frameworks for sustainable competitive advantage.',
    },
    {
      number: '04',
      title: 'Executive Guidance',
      description: 'Ongoing strategic counsel and board-level marketing leadership.',
    },
  ];

  const strategicAdvantages = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'C-Suite Perspective',
      description: 'Board-level strategic thinking with deep marketing expertise.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Long-term Planning',
      description: 'Focus on sustainable growth rather than short-term tactics.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Market Leadership',
      description: 'Position your brand as a category leader and innovator.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Investment Strategy',
      description: 'Optimize marketing investments for maximum long-term ROI.',
    },
  ];

  const focusAreas = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Market Positioning',
      description: 'Define and own your unique market position with differentiated brand strategy.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Growth Strategy',
      description: 'Design sustainable growth models and expansion strategies for long-term success.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Innovation & Disruption',
      description: 'Lead market innovation and stay ahead of industry trends.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Organizational Alignment',
      description: 'Align entire organization around customer-centric growth strategies.',
    },
  ];

  const whoNeeds = [
    {
      title: 'Companies Planning Market Entry or Expansion',
      description: 'Need strategic guidance to enter new markets, launch new products, or expand internationally.',
    },
    {
      title: 'Businesses Seeking Transformation',
      description: 'Require strategic vision to pivot business models, undergo digital transformation, or reposition brands.',
    },
    {
      title: 'PE-Backed Companies & Board-Level Decision Makers',
      description: 'Need executive marketing counsel for board presentations, investor relations, and strategic planning.',
    },
    {
      title: 'Market Leaders & Category Creators',
      description: 'Want to maintain leadership position, define industry standards, and shape market direction.',
    },
  ];

  const keyMetrics = [
    {
      value: '5x',
      label: 'Market Valuation Growth',
    },
    {
      value: '200%',
      label: 'Brand Value Increase',
    },
    {
      value: '3-5yr',
      label: 'Strategic Planning Horizon',
    },
    {
      value: 'C-Level',
      label: 'Executive Experience',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Fractional CMO: Strategic Vision & Transformation
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Get C-suite level strategic marketing leadership to transform your business, drive market leadership, and build sustainable competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                Strategic Assessment
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 15 L11 10 L6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors"
              >
                Book Executive Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Bar - Light Blue Background */}
      <section className="py-12 bg-blue-100">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {keyMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">
                  {metric.value}
                </div>
                <div className="text-lg text-blue-800 font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Marketing Leadership Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Strategic Marketing Leadership
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your business with executive-level strategic thinking and long-term vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {strategicServices.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-blue-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-numero-orange text-gray-900 text-xs font-semibold px-3 py-1 rounded-full"
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

      {/* Our Strategic Approach Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Strategic Approach
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A comprehensive framework for building sustainable competitive advantage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {strategicApproach.map((step, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-6xl font-bold text-gray-300 mb-4 leading-none">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Advantages Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Strategic Advantages
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Why strategic marketing leadership drives lasting business transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {strategicAdvantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Focus Areas Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Strategic Focus Areas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-blue-600 mb-4">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Needs Strategic Marketing Leadership Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who Needs Strategic Marketing Leadership?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {whoNeeds.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Transform Your Strategic Marketing CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Strategic Marketing?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Let's discuss how strategic marketing leadership can drive sustainable growth and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                Schedule Strategic Assessment
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 15 L11 10 L6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                to="/contact"
                className="bg-white border-2 border-gray-300 text-gray-800 px-8 py-4 rounded-lg text-base font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors"
              >
                Book Executive Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FractionalCMO;
