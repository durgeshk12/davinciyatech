import React from 'react';
import { Link } from 'react-router-dom';

const DesignServices = () => {
  const designServices = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Graphic Design',
      description: 'Creative graphic design solutions that capture your brand essence and communicate your message effectively. From logos to marketing materials, we bring your vision to life.',
      tags: ['Logo Design', 'Business Cards', 'Brochures', 'Flyers & Posters'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="7" cy="7" r="1" fill="currentColor"/>
        </svg>
      ),
      title: 'UI/UX Design',
      description: 'User-centered design approach that creates intuitive and engaging digital experiences. We focus on usability, accessibility, and conversion optimization.',
      tags: ['User Interface', 'User Experience', 'Wireframing', 'Prototyping'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Print Design',
      description: 'Professional print design services for all your marketing and business needs. High-quality designs optimized for print production and brand consistency.',
      tags: ['Marketing Materials', 'Packaging Design', 'Book Design', 'Magazine Layout'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Digital Assets',
      description: 'Complete digital design solutions including social media graphics, web banners, email templates, and digital marketing materials that drive engagement.',
      tags: ['Social Media Graphics', 'Web Banners', 'Email Templates', 'Digital Ads'],
    },
  ];

  const specializations = [
    {
      title: 'Brand Identity',
      subtitle: 'Branding',
      gradient: 'from-blue-600 to-blue-800',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: 'Web Design',
      subtitle: 'Digital',
      gradient: 'from-green-500 to-green-700',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: 'Print Design',
      subtitle: 'Print',
      gradient: 'from-purple-500 to-purple-700',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 14h12v8H6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: 'UI/UX',
      subtitle: 'Interface',
      gradient: 'from-pink-500 to-pink-700',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      title: 'Packaging',
      subtitle: 'Product',
      gradient: 'from-orange-500 to-orange-700',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: 'Illustration',
      subtitle: 'Creative',
      gradient: 'from-green-400 to-green-600',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: 'Motion Graphics',
      subtitle: 'Animation',
      gradient: 'from-red-500 to-red-700',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: 'Photography',
      subtitle: 'Visual',
      gradient: 'from-pink-400 to-red-500',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Design Brief',
      description: 'Understanding your project requirements, target audience, brand guidelines, and creative objectives.',
    },
    {
      number: '02',
      title: 'Concept Development',
      description: 'Creating initial design concepts and visual directions based on your brief and brand identity.',
    },
    {
      number: '03',
      title: 'Design & Refinement',
      description: 'Developing the chosen concept with attention to detail, typography, color, and visual hierarchy.',
    },
    {
      number: '04',
      title: 'Delivery & Support',
      description: 'Final artwork delivery in all required formats with ongoing support for revisions and updates.',
    },
  ];

  const benefits = [
    {
      title: 'Creative Excellence',
      description: 'Award-winning design team with proven track record of creating impactful visual solutions.',
    },
    {
      title: 'Brand Consistency',
      description: 'All designs align with your brand guidelines ensuring consistent visual identity across all touchpoints.',
    },
    {
      title: 'Fast Turnaround',
      description: 'Efficient design process with quick turnaround times without compromising on quality.',
    },
    {
      title: 'Multiple Formats',
      description: 'Designs delivered in all required formats for print, web, and digital applications.',
    },
  ];

  const statistics = [
    { value: '500+', label: 'Designs Created' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '24hr', label: 'Initial Concepts' },
    { value: '5+', label: 'Design Awards' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-md mb-6">
                DESIGN SERVICES
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Professional Design Services
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Creative design solutions that elevate your brand and captivate your audience. From graphic design to digital assets, we bring your vision to life with stunning visuals.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link
                  to="/contact"
                  className="bg-numero-teal text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-teal-600 transition-colors flex items-center gap-2"
                >
                  Start Your Project
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 15 L11 10 L6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link
                  to="/blog"
                  className="bg-white border-2 border-gray-300 text-gray-800 px-8 py-4 rounded-lg text-base font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-orange-400 rounded-2xl p-8 md:p-12 text-white">
              <div className="mb-6">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Creative Excellence</h2>
              <p className="text-white/90 text-base leading-relaxed">
                Transforming ideas into visually stunning designs that communicate your message and elevate your brand presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Design Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Design Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive design solutions that cover all your creative needs from concept to final delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {designServices.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-numero-teal mb-4">
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

      {/* Design Specializations Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="mb-12">
            <div className="inline-block bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-md mb-4">
              OUR EXPERTISE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
              Design Specializations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Specialized design services across multiple disciplines and creative mediums
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {specializations.map((spec, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${spec.gradient} rounded-lg p-6 text-white hover:scale-105 transition-transform duration-300`}
              >
                <div className="mb-4">
                  {spec.icon}
                </div>
                <h3 className="text-lg font-bold mb-1">{spec.title}</h3>
                <p className="text-white/80 text-sm">{spec.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Design Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Design Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A collaborative approach that ensures your vision is brought to life with precision and creativity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 bg-numero-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-numero-teal">{step.number}</span>
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

      {/* Why Choose Our Design Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Why Choose Our Design Services?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Benefits List */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-numero-teal rounded-full flex items-center justify-center mt-1">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white"
                    >
                      <path
                        d="M13.333 4L6 11.333 2.667 8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Design Statistics Card */}
            <div className="bg-teal-50 border border-teal-100 rounded-lg p-8">
              <div className="text-numero-teal mb-6">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                  <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                  <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                  <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Design Statistics</h3>
              <div className="grid grid-cols-2 gap-6">
                {statistics.map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl md:text-4xl font-bold text-numero-teal mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Bring Your Vision to Life CTA Section */}
      <section className="py-16 md:py-24 bg-numero-teal">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Bring Your Vision to Life?
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Let's create stunning designs that capture your brand essence and engage your audience. Get started with a free design consultation today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-numero-orange text-gray-900 px-8 py-4 rounded-lg text-base font-semibold hover:bg-orange-500 transition-colors"
              >
                Get Free Quote
              </Link>
              <Link
                to="/services"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg text-base font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignServices;
