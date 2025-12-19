import React from 'react';
import { Link } from 'react-router-dom';

const PowerOfIntegration = () => {
  const solutions = [
    {
      title: 'Software Development',
      description: 'The foundation that powers data flow and system integration',
      icon: '💾',
      color: 'blue',
      keywords: ['APIs', 'Data Pipeline', 'Automation'],
    },
    {
      title: 'AI Agents',
      description: 'Intelligence that optimizes decisions and automates processes',
      icon: '🧠',
      color: 'orange',
      keywords: ['Smart Analytics', 'Automation', 'Insights'],
    },
    {
      title: 'Digital Marketing',
      description: 'Campaigns that generate and qualify leads with precision',
      icon: '📈',
      color: 'purple',
      keywords: ['Lead Gen', 'Performance', 'Analytics'],
    },
    {
      title: 'CRM Solutions',
      description: 'Customer relationships that convert and retain',
      icon: '💬',
      color: 'green',
      keywords: ['Lead Nurturing', 'Sales Pipeline', 'Customer Data'],
    },
  ];

  const benefits = [
    { icon: '⚡', title: '3x Faster Growth', description: 'Integrated solutions compound results' },
    { icon: '🎯', title: 'Precision Targeting', description: 'Data flows seamlessly between systems' },
    { icon: '📊', title: 'Real-time Insights', description: 'Unified analytics across all touchpoints' },
    { icon: '⭐', title: 'Smart Automation', description: 'AI orchestrates the entire ecosystem' },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-600',
      orange: 'bg-numero-orange',
      purple: 'bg-purple-600',
      green: 'bg-green-600',
    };
    return colors[color] || 'bg-gray-600';
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-8xl mx-auto px-4 md:px-10">
        {/* Top Section */}
        <div className="text-center mb-12">
          <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
            The Power of Integration
          </button>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Four Solutions. <span className="text-blue-600">One Powerful</span>{' '}
            <span className="text-numero-orange">Ecosystem</span>.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Watch how Software Development, Marketing, CRM, and AI Agents work together to create exponential growth for your business.
          </p>
        </div>

        {/* Solution Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`${getColorClasses(solution.color)} rounded-lg p-8 text-white hover:scale-105 transition-transform duration-300`}
            >
              <div className="text-5xl mb-4">{solution.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
              <p className="text-white/90 mb-4">{solution.description}</p>
              <div className="flex flex-wrap gap-2">
                {solution.keywords.map((keyword, keyIndex) => (
                  <span
                    key={keyIndex}
                    className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Integration Benefits */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">The Integration Effect</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4 text-blue-600">{benefit.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 bg-numero-orange text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#ff7a2e] transition-colors"
          >
            Explore The Integration
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 15 L12 10 L7 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PowerOfIntegration;


