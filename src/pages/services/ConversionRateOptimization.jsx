import React from 'react';
import { Link } from 'react-router-dom';

const ConversionRateOptimization = () => {
  const croServices = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 1v6M12 17v6M1 12h6M17 12h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'User Experience Audit',
      description: 'Comprehensive analysis of user behavior and website usability',
      services: [
        'Heatmap Analysis',
        'User Session Recordings',
        'Usability Testing',
        'Funnel Analysis',
      ],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="2"/>
          <rect x="13" y="3" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="2"/>
          <rect x="3" y="13" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="2"/>
          <rect x="13" y="13" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'A/B Testing',
      description: 'Systematic testing of different elements to optimize conversions',
      services: [
        'Multivariate Testing',
        'Split Testing',
        'Statistical Analysis',
        'Results Interpretation',
      ],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="2"/>
          <circle cx="7" cy="6" r="1" fill="currentColor"/>
        </svg>
      ),
      title: 'Landing Page Optimization',
      description: 'Optimization of landing pages for maximum conversion rates',
      services: [
        'Page Structure Analysis',
        'CTA Placement',
        'Form Optimization',
        'Mobile Responsiveness',
      ],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="2"/>
          <path d="M7 13l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Analytics & Reporting',
      description: 'Detailed tracking and reporting of conversion improvements',
      services: [
        'Conversion Tracking',
        'Performance Dashboards',
        'Custom Reports',
        'ROI Analysis',
      ],
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Audit',
      description: 'Comprehensive website and user behavior analysis',
    },
    {
      number: '02',
      title: 'Research',
      description: 'User research and competitor analysis',
    },
    {
      number: '03',
      title: 'Hypothesis',
      description: 'Develop testing hypotheses based on data',
    },
    {
      number: '04',
      title: 'Test',
      description: 'Run A/B tests and gather results',
    },
    {
      number: '05',
      title: 'Implement',
      description: 'Implement winning variations and monitor',
    },
  ];

  const tools = [
    { name: 'Google Analytics', logo: 'GA' },
    { name: 'Hotjar', logo: 'HJ' },
    { name: 'Optimizely', logo: 'OP' },
    { name: 'VWO', logo: 'VWO' },
    { name: 'Unbounce', logo: 'UB' },
    { name: 'Crazyegg', logo: 'CE' },
  ];

  const metrics = [
    {
      value: '35%',
      label: 'Average Conversion Increase',
    },
    {
      value: '50%',
      label: 'Reduction in Bounce Rate',
    },
    {
      value: '2.5x',
      label: 'Improvement in ROI',
    },
    {
      value: '90%',
      label: 'Client Satisfaction Rate',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-numero-orange text-gray-900 text-xs font-semibold px-4 py-2 rounded-md mb-6">
              Conversion Rate Optimization
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Maximize Your Website's Conversion Potential
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your website visitors into customers with our data-driven CRO strategies that increase conversions without increasing traffic costs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-numero-teal text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-teal-600 transition-colors flex items-center gap-2"
              >
                Start Free CRO Audit
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 15 L11 10 L6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                to="/blog"
                className="bg-white border-2 border-gray-300 text-gray-800 px-8 py-4 rounded-lg text-base font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our CRO Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our CRO Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive conversion optimization services designed to turn more visitors into customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {croServices.map((service, index) => (
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
                <p className="text-gray-600 text-sm mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.services.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-numero-teal flex-shrink-0 mt-0.5"
                      >
                        <path
                          d="M16.667 5L7.5 14.167 3.333 10"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our CRO Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our CRO Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to conversion optimization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="text-6xl font-bold text-numero-teal/20 mb-4 leading-none">
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

      {/* Tools We Use Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tools We Use
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Industry-leading tools for accurate testing and optimization
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300 flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-gray-600 font-bold text-sm">{tool.logo}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    {tool.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proven Results Section - Blue/Teal Background */}
      <section className="py-16 md:py-24 bg-numero-teal">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Our CRO strategies deliver measurable improvements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  {metric.value}
                </div>
                <div className="text-lg md:text-xl text-white/90 font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Optimize Your Conversions CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Optimize Your Conversions?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Let's analyze your website and identify opportunities to increase your conversion rates and boost revenue
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-numero-teal text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-teal-600 transition-colors flex items-center gap-2"
              >
                Start Free CRO Audit
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 15 L11 10 L6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                to="/services"
                className="bg-white border-2 border-gray-300 text-gray-800 px-8 py-4 rounded-lg text-base font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors"
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

export default ConversionRateOptimization;
