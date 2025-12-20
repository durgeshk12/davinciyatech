import React from 'react';
import { Link } from 'react-router-dom';

const PerformanceMarketing = () => {
  const performanceServices = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Paid Search Advertising',
      description: 'Google Ads and Bing Ads management with focus on ROI optimization',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Social Media Advertising',
      description: 'Facebook, Instagram, LinkedIn, and Twitter advertising campaigns',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Display & Retargeting',
      description: 'Strategic display campaigns and retargeting to convert prospects',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Conversion Optimization',
      description: 'Landing page optimization and conversion rate improvement',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Strategy Development',
      description: 'Comprehensive audit and strategy formulation',
    },
    {
      number: '02',
      title: 'Campaign Setup',
      description: 'Platform setup and creative development',
    },
    {
      number: '03',
      title: 'Launch & Monitor',
      description: 'Campaign launch with real-time monitoring',
    },
    {
      number: '04',
      title: 'Optimize & Scale',
      description: 'Continuous optimization and scaling',
    },
  ];

  const metrics = [
    {
      value: '200%',
      label: 'Average ROI Increase',
    },
    {
      value: '45%',
      label: 'Lower Cost Per Acquisition',
    },
    {
      value: '3x',
      label: 'Faster Lead Generation',
    },
    {
      value: '24/7',
      label: 'Campaign Monitoring',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-numero-orange text-gray-900 text-xs font-semibold px-4 py-2 rounded-md mb-6">
              Performance Marketing
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Drive Measurable Results with Performance Marketing
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Data-driven marketing campaigns that focus on measurable outcomes and maximize your return on investment through strategic paid advertising channels.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-numero-teal text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-teal-600 transition-colors flex items-center gap-2"
              >
                Start Your Campaign
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 15 L11 10 L6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                to="/contact"
                className="bg-white border-2 border-gray-300 text-gray-800 px-8 py-4 rounded-lg text-base font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors"
              >
                Book Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Performance Marketing Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Performance Marketing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive performance marketing solutions designed to deliver measurable results and maximize your marketing ROI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {performanceServices.map((service, index) => (
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

      {/* Our Performance Marketing Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Performance Marketing Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to maximize your marketing performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-6xl font-bold text-numero-teal mb-4 leading-none">
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

      {/* Proven Results Section - Blue Background */}
      <section className="py-16 md:py-24 bg-numero-teal">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Our performance marketing campaigns deliver measurable outcomes
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

      {/* Ready to Boost Your Marketing Performance CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Boost Your Marketing Performance?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Let's create high-performing campaigns that drive real business results and maximize your marketing ROI
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-numero-teal text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-teal-600 transition-colors"
              >
                Get Free Strategy Session
              </Link>
              <Link
                to="/contact"
                className="bg-white border-2 border-gray-300 text-gray-800 px-8 py-4 rounded-lg text-base font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PerformanceMarketing;
