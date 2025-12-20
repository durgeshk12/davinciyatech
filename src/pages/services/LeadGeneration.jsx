import React from 'react';
import { Link } from 'react-router-dom';

const LeadGeneration = () => {
  const leadServices = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Targeted Campaigns',
      description: 'Precision-targeted campaigns to reach your ideal customer profile',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Lead Magnets',
      description: 'Compelling lead magnets and landing pages that convert visitors',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Email Marketing',
      description: 'Strategic email campaigns to nurture and convert leads',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
          <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
          <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
          <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Multi-Channel Approach',
      description: 'Integrated approach across multiple channels for maximum reach',
    },
  ];

  const channels = [
    {
      title: 'Email Marketing',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: 'Cold Calling',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: 'Social Media',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: 'Paid Advertising',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M8 12h8" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      title: 'Content Marketing',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: 'SEO & Organic',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Research',
      description: 'Identify ideal customer profiles and target markets',
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Develop comprehensive lead generation strategy',
    },
    {
      number: '03',
      title: 'Create',
      description: 'Build compelling campaigns and lead magnets',
    },
    {
      number: '04',
      title: 'Launch',
      description: 'Execute multi-channel campaigns',
    },
    {
      number: '05',
      title: 'Optimize',
      description: 'Continuously optimize for better results',
    },
  ];

  const qualificationMethods = [
    {
      title: 'BANT',
      subtitle: 'Budget, Authority, Need, Timeline',
      description: 'Qualification framework to identify sales-ready prospects',
    },
    {
      title: 'SCORE',
      subtitle: 'Lead Scoring System',
      description: 'Automated scoring based on behavior and engagement',
    },
    {
      title: 'NURTURE',
      subtitle: 'Lead Nurturing',
      description: 'Strategic nurturing campaigns to move leads through the funnel',
    },
  ];

  const metrics = [
    {
      value: '300%',
      label: 'Increase in Qualified Leads',
    },
    {
      value: '25%',
      label: 'Higher Conversion Rate',
    },
    {
      value: '60%',
      label: 'Reduction in Cost Per Lead',
    },
    {
      value: '48hr',
      label: 'Average Response Time',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-numero-orange text-gray-900 text-xs font-semibold px-4 py-2 rounded-md mb-6">
              Lead Generation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Generate Quality Leads That Convert
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Strategic lead generation campaigns that attract, engage, and convert your ideal prospects into qualified leads and customers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-numero-teal text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-teal-600 transition-colors flex items-center gap-2"
              >
                Start Generating Leads
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 15 L11 10 L6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                to="/contact"
                className="bg-white border-2 border-gray-300 text-gray-800 px-8 py-4 rounded-lg text-base font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Lead Generation Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Lead Generation Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive lead generation solutions designed to fill your sales pipeline with qualified prospects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {leadServices.map((service, index) => (
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

      {/* Multi-Channel Lead Generation Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Multi-Channel Lead Generation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We leverage multiple channels to maximize your lead generation potential
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {channels.map((channel, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 text-center"
              >
                <div className="text-numero-teal mb-3 flex justify-center">
                  {channel.icon}
                </div>
                <h3 className="text-sm font-semibold text-gray-900">
                  {channel.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Lead Generation Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Lead Generation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to generating high-quality leads
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {processSteps.map((step, index) => (
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

      {/* Lead Qualification & Scoring Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lead Qualification & Scoring
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We don't just generate leads, we ensure they're qualified and sales-ready
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {qualificationMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-numero-teal font-semibold text-sm mb-3">
                  {method.subtitle}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proven Results Section - Blue Background */}
      <section className="py-16 md:py-24 bg-numero-teal">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Our lead generation campaigns deliver measurable business growth
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  {metric.value}
                </div>
                <div className="text-lg text-white/90">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Fill Your Sales Pipeline CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Fill Your Sales Pipeline?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Let's create a lead generation strategy that consistently delivers qualified prospects to fuel your business growth
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-numero-teal text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-teal-600 transition-colors"
              >
                Start Lead Generation Campaign
              </Link>
              <Link
                to="/contact"
                className="bg-white border-2 border-gray-300 text-gray-800 px-8 py-4 rounded-lg text-base font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors"
              >
                Schedule Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeadGeneration;
