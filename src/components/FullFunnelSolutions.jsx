import React from 'react';

const FullFunnelSolutions = () => {
  const columns = [
    {
      title: 'Software Development',
      icon: '⚙️',
      color: 'blue',
      services: [
        { name: 'Mobile App Development', description: 'Native and cross-platform mobile applications', icon: '⚡' },
        { name: 'Web Development', description: 'Scalable web applications and enterprise solutions', icon: '🌐' },
        { name: 'CMS & E-commerce', description: 'Content management and online store development', icon: '📄' },
        { name: 'Custom Software', description: 'Tailored solutions for unique business requirements', icon: '🔧' },
        { name: 'API Development', description: 'Robust APIs and system integrations', icon: '🔗' },
        { name: 'Quality Assurance', description: 'Comprehensive testing and quality control', icon: '🎯' },
      ],
    },
    {
      title: 'B2B Revenue Operations',
      icon: '📊',
      color: 'light-blue',
      services: [
        { name: 'CRM Enablement', description: 'Optimize your sales funnel with advanced CRM automation', icon: '🎯' },
        { name: 'Lead Generation & Data', description: 'High-quality leads with precision targeting', icon: '👥' },
        { name: 'Appointment Setting', description: 'SDR support that converts prospects to meetings', icon: '📅' },
        { name: 'Sales Outsourcing', description: 'Complete sales team augmentation and management', icon: '📊' },
        { name: 'Marketing Solutions', description: 'Full-funnel marketing campaigns that drive revenue', icon: '⚡' },
        { name: 'Customer Experience', description: 'Retention strategies that maximize lifetime value', icon: '🎯' },
      ],
    },
    {
      title: 'Real Estate',
      icon: '🏢',
      color: 'yellow',
      services: [
        { name: 'Performance Marketing', description: 'Google/Meta/YouTube advertising that converts', icon: '📈' },
        { name: 'Social Media Management', description: 'Brand presence that attracts premium buyers', icon: '🏢' },
        { name: 'NRI Buyer Targeting', description: 'Specialized campaigns for global Indian buyers', icon: '🎯' },
        { name: 'CRM & Automation', description: 'Ginee-powered systems for seamless operations', icon: '🔧' },
        { name: 'Site-Visit Concierge', description: 'End-to-end visitor management and conversion', icon: '👥' },
        { name: 'Landing Pages & CRO', description: 'High-converting landing pages optimized for property inquiries', icon: '⚡' },
      ],
    },
    {
      title: 'AI-Powered CRM Solutions',
      icon: '🤖',
      color: 'green',
      services: [
        { name: 'Lead Management', description: 'Centralized lead tracking and pipeline management', icon: '📄' },
        { name: 'AI Sales Agents', description: '24/7 intelligent sales automation and follow-up', icon: '🔗' },
        { name: 'Analytics & Reporting', description: 'Real-time insights and performance dashboards', icon: '📊' },
        { name: 'Automation Workflows', description: 'Smart workflows for seamless operations', icon: '⚡' },
        { name: 'Customer Support AI', description: 'Automated customer service and query handling', icon: '📅' },
        { name: 'Predictive Analytics', description: 'AI-powered forecasting and sales predictions', icon: '🎯' },
      ],
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'text-blue-600',
      'light-blue': 'text-blue-400',
      yellow: 'text-yellow-500',
      green: 'text-green-500',
    };
    return colors[color] || 'text-gray-600';
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-8xl mx-auto px-4 md:px-10">
        {/* Top Section */}
        <div className="text-center mb-12">
          <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
            OUR EXPERTISE
          </button>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Full-Funnel Growth Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Specialized expertise driving predictable revenue for B2B enterprises, luxury real estate developers, innovative software solutions, and AI-powered CRM platforms
          </p>
        </div>

        {/* Service Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {columns.map((column, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className={`text-3xl mb-4 ${getColorClasses(column.color)}`}>
                {column.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">{column.title}</h3>
              <div className="space-y-4">
                {column.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                    <div className="flex items-start gap-3">
                      <span className="text-xl">{service.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">{service.name}</h4>
                        <p className="text-xs text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FullFunnelSolutions;


