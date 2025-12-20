import React from 'react';
import { Link } from 'react-router-dom';

const ReputationManagement = () => {
  const reputationServices = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 1v6M12 17v6M1 12h6M17 12h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Online Monitoring',
      description: '24/7 monitoring of your brand mentions across all digital platforms',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Review Management',
      description: 'Strategic management of customer reviews on all major platforms',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Crisis Management',
      description: 'Rapid response and damage control for reputation threats',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Brand Building',
      description: 'Proactive content creation to enhance your online reputation',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Audit & Analysis',
      description: 'Comprehensive assessment of current online reputation',
    },
    {
      number: '02',
      title: 'Monitoring Setup',
      description: 'Implement 24/7 monitoring across all platforms',
    },
    {
      number: '03',
      title: 'Response Strategy',
      description: 'Develop and implement response strategies',
    },
    {
      number: '04',
      title: 'Ongoing Management',
      description: 'Continuous monitoring and proactive management',
    },
  ];

  const platforms = [
    'Google Reviews',
    'Yelp',
    'Facebook',
    'TripAdvisor',
    'Glassdoor',
    'Better Business Bureau',
    'Amazon',
    'Trustpilot',
  ];

  const crisisManagementFeatures = [
    {
      title: 'Rapid Response',
      description: 'Immediate action within 1 hour of threat detection',
    },
    {
      title: 'Damage Control',
      description: 'Strategic response to minimize negative impact',
    },
    {
      title: 'Recovery Strategy',
      description: 'Long-term strategy to rebuild and strengthen reputation',
    },
  ];

  const metrics = [
    {
      value: '95%',
      label: 'Positive Review Rate',
    },
    {
      value: '24hr',
      label: 'Response Time',
    },
    {
      value: '4.8★',
      label: 'Average Rating Improvement',
    },
    {
      value: '99%',
      label: 'Issue Resolution Rate',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-numero-orange text-gray-900 text-xs font-semibold px-4 py-2 rounded-md mb-6">
              Reputation Management
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Protect and Enhance Your Online Reputation
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Comprehensive reputation management services that monitor, protect, and improve your brand's online presence across all digital channels.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-numero-teal text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-teal-600 transition-colors flex items-center gap-2"
              >
                Free Reputation Audit
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 15 L11 10 L6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                to="/contact"
                className="bg-white border-2 border-gray-300 text-gray-800 px-8 py-4 rounded-lg text-base font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors"
              >
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Reputation Management Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Reputation Management Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete reputation management solutions to protect and enhance your brand's digital presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {reputationServices.map((service, index) => (
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

      {/* Our Reputation Management Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Reputation Management Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A comprehensive approach to managing your online reputation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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

      {/* Platforms We Monitor Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Platforms We Monitor
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We monitor and manage your reputation across all major platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 text-center"
              >
                <h3 className="text-sm font-semibold text-gray-900">
                  {platform}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crisis Management Section - Highlighted */}
      <section className="py-16 md:py-24 bg-pink-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500 rounded-full mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M12 9v4M12 17h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Crisis Management
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              When reputation threats emerge, our crisis management team responds immediately to minimize damage and protect your brand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {crisisManagementFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
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

      {/* Proven Results Section - Blue/Teal Background */}
      <section className="py-16 md:py-24 bg-numero-teal">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Our reputation management services deliver measurable improvements
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

      {/* Ready to Protect Your Online Reputation CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Protect Your Online Reputation?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Let's safeguard your brand's reputation and build a positive online presence that drives business growth
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-numero-teal text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-teal-600 transition-colors"
              >
                Get Free Reputation Analysis
              </Link>
              <Link
                to="/contact"
                className="bg-white border-2 border-gray-300 text-gray-800 px-8 py-4 rounded-lg text-base font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors"
              >
                Speak with Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReputationManagement;
