import React from 'react';
import { Link } from 'react-router-dom';

const SEOServices = () => {
  const seoServices = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
          <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Strategic Keyword Optimization',
      description: 'We research high-ranking keywords relevant to your industry and strategically use them in your website to enhance visibility on search engines. Our SEO experts continuously monitor and optimize keywords to serve your business needs.',
      tags: ['Keyword Research', 'Competitor Analysis', 'Long-tail Keywords', 'Search Intent Mapping'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'On-page and Off-page SEO',
      description: 'Our team takes care of both on-page & off-page optimization. We apply best practices like adding meta descriptions, optimized headings, and quality backlinks from authoritative sites.',
      tags: ['Meta Optimization', 'Header Tags', 'Link Building', 'Content Optimization'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Content Creation',
      description: 'SEO-optimized content that engages your audience and ranks well in search engines. We create valuable content that addresses user intent and establishes your authority in the industry.',
      tags: ['Blog Posts', 'Landing Pages', 'Product Descriptions', 'Technical Content'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Technical SEO',
      description: 'Comprehensive technical optimization including site speed, mobile responsiveness, schema markup, and crawlability improvements to ensure search engines can effectively index your site.',
      tags: ['Site Speed Optimization', 'Mobile Optimization', 'Schema Markup', 'XML Sitemaps'],
    },
  ];

  const seoResults = [
    {
      value: '+150%',
      title: 'Increased Organic Traffic',
      description: 'Drive more qualified visitors to your website through higher search engine rankings.',
    },
    {
      value: '+65%',
      title: 'Better Conversion Rates',
      description: 'Attract users with higher purchase intent through targeted keyword optimization.',
    },
    {
      value: '+200%',
      title: 'Enhanced Brand Visibility',
      description: 'Establish authority and trust with prominent search engine presence.',
    },
    {
      value: '+300%',
      title: 'Long-term ROI',
      description: 'Sustainable growth with organic traffic that continues to deliver results.',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'SEO Audit & Analysis',
      description: 'Comprehensive analysis of your current SEO performance, identifying opportunities and areas for improvement.',
    },
    {
      number: '02',
      title: 'Strategy Development',
      description: 'Creating a customized SEO strategy based on your business goals, target audience, and competitive landscape.',
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'Executing on-page and off-page optimizations, content creation, and technical improvements.',
    },
    {
      number: '04',
      title: 'Monitoring & Reporting',
      description: 'Continuous monitoring of rankings, traffic, and performance with detailed monthly reports and optimizations.',
    },
  ];

  const whyChooseFeatures = [
    {
      title: 'Proven Track Record',
      description: 'Over 500 successful SEO campaigns with measurable results and improved rankings.',
    },
    {
      title: 'White Hat Techniques',
      description: 'Ethical SEO practices that comply with search engine guidelines for long-term success.',
    },
    {
      title: 'Transparent Reporting',
      description: 'Detailed monthly reports with clear metrics and actionable insights.',
    },
    {
      title: 'Dedicated SEO Experts',
      description: 'Certified SEO professionals with years of experience in various industries.',
    },
  ];

  const seoPerformanceMetrics = [
    { value: '100+', label: 'Websites Optimized' },
    { value: '85%', label: 'Top 10 Rankings' },
    { value: '200%', label: 'Avg Traffic Increase' },
    { value: '12+', label: 'Months Experience' },
  ];

  const localSEOServices = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Google My Business',
      description: 'Optimization and management of your Google My Business profile for maximum local visibility.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Local Citations',
      description: 'Building consistent business listings across local directories and review platforms.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Review Management',
      description: 'Monitoring and managing online reviews to build trust and credibility with local customers.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Best SEO Company
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Top-notch SEO company to take your business to the next level. We help businesses achieve higher rankings, increased traffic, and better online visibility.
              </p>
              <Link
                to="/contact"
                className="bg-numero-teal text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-teal-600 transition-colors flex items-center gap-2 w-fit"
              >
                Get SEO Audit
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 15 L11 10 L6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-green-400 to-yellow-400 rounded-2xl p-8 md:p-12 text-white">
              <div className="mb-6">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                  <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">SEO Excellence</h2>
              <p className="text-white/90 text-base leading-relaxed">
                Dominate search results with our proven SEO strategies that drive organic traffic and boost your online presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our SEO Results Section - Blue Background */}
      <section className="py-16 md:py-24 bg-numero-teal">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our SEO Results Speak for Themselves
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {seoResults.map((result, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
                <div className="text-4xl md:text-5xl font-bold mb-3">
                  {result.value}
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {result.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {result.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All-in-one SEO Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All-in-one SEO Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive SEO solutions to improve your search engine rankings and drive qualified traffic
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {seoServices.map((service, index) => (
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

      {/* Our SEO Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our SEO Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A data-driven approach to SEO that delivers measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 bg-numero-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
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

      {/* Why Choose Our SEO Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Panel - Features */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Why Choose Our SEO Services?
              </h2>
              <div className="space-y-6">
                {whyChooseFeatures.map((feature, index) => (
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
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panel - SEO Performance Box */}
            <div className="bg-teal-50 border border-teal-100 rounded-lg p-8">
              <div className="text-numero-teal mb-6">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="18" cy="6" r="2" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">SEO Performance</h3>
              <div className="grid grid-cols-2 gap-4">
                {seoPerformanceMetrics.map((metric, index) => (
                  <div key={index}>
                    <div className="text-2xl md:text-3xl font-bold text-numero-teal mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO Expertise Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Local SEO Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dominate local search results and attract customers in your area with our specialized local SEO services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {localSEOServices.map((service, index) => (
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
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Dominate Search Results CTA Section - Blue Background */}
      <section className="py-16 md:py-24 bg-numero-teal">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Dominate Search Results?
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Get a comprehensive SEO audit and discover how to improve your search rankings and drive more organic traffic.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-numero-orange text-gray-900 px-8 py-4 rounded-lg text-base font-semibold hover:bg-orange-500 transition-colors"
              >
                Get Free SEO Audit
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-white/20 transition-colors flex items-center gap-2"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOServices;
