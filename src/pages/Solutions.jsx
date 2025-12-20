import React from 'react';
import { Link } from 'react-router-dom';
import WhyChooseCTA from '../components/WhyChooseCTA';

const Solutions = () => {
  const partnershipFeatures = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Industry-Specific Expertise',
      description: 'Specialized solutions tailored to your industry vertical with deep understanding of your unique challenges and opportunities.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Integrated Solutions',
      description: 'End-to-end solutions that integrate seamlessly with your existing systems and workflows for maximum efficiency.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Scalable Architecture',
      description: 'Solutions designed to grow with your business, ensuring long-term success and adaptability to changing needs.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Proven Results',
      description: 'Data-driven solutions backed by measurable results and ROI tracking to ensure your investment delivers value.',
    },
  ];

  const solutions = [
    {
      name: 'Software Development',
      path: '/solutions/software-development',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 3H4a2 2 0 0 0-2 2v4m18-4h-4a2 2 0 0 0-2 2v4m0 6v4a2 2 0 0 0 2 2h4M8 21H4a2 2 0 0 1-2-2v-4m18 4v-4a2 2 0 0 0-2-2h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: 'Custom software solutions that drive innovation and streamline your business operations.',
      tags: ['Web Apps', 'Mobile Apps', 'Cloud Solutions'],
    },
    {
      name: 'B2B Marketing',
      path: '/solutions/b2b-marketing',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: 'Strategic B2B marketing solutions that generate qualified leads and accelerate your sales pipeline.',
      tags: ['Lead Generation', 'Account-Based', 'Sales Enablement'],
    },
    {
      name: 'B2C Marketing',
      path: '/solutions/b2c-marketing',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: 'Consumer-focused marketing campaigns that build brand awareness and drive customer engagement.',
      tags: ['Social Media', 'Content Marketing', 'E-commerce'],
    },
    {
      name: 'Fractional CMO',
      path: '/solutions/fractional-cmo',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: 'Strategic marketing leadership on demand without full-time executive costs.',
      tags: ['Strategic Planning', 'Team Leadership', 'Growth Strategy'],
    },
    {
      name: 'Real Estate Marketing',
      path: '/solutions/real-estate-marketing',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 21l9-9 9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 12h18M12 3v18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      description: 'Specialized marketing solutions for real estate professionals and property developers.',
      tags: ['Property Listings', 'Virtual Tours', 'Lead Nurturing'],
    },
    {
      name: 'CRM Solutions',
      path: '/solutions/crm-solutions',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      description: 'Comprehensive CRM solutions that streamline customer relationships and boost sales productivity.',
      tags: ['Sales Automation', 'Customer Data', 'Analytics'],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Comprehensive Business Solutions for Every Industry
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your business with integrated solutions that combine cutting-edge technology, strategic marketing, and industry expertise. From software development to specialized marketing, we deliver results that drive growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-numero-teal text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-teal-600 transition-colors flex items-center gap-2"
              >
                Explore Solutions
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 15 L11 10 L6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                to="/blog"
                className="bg-white border-2 border-gray-300 text-gray-800 px-8 py-4 rounded-lg text-base font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Value Proposition Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Business Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              When you partner with Davinciyatech, you gain access to comprehensive solutions that address your unique business challenges and drive measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {partnershipFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-numero-teal mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Business Solutions Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Business Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to help your business grow and succeed across all industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="text-numero-teal mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {solution.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {solution.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {solution.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-numero-orange text-gray-900 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={solution.path}
                  className="inline-flex items-center gap-2 text-numero-teal font-semibold text-sm hover:text-teal-600 transition-colors mt-auto"
                >
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12 L10 8 L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose CTA Section */}
      <WhyChooseCTA />
    </div>
  );
};

export default Solutions;

