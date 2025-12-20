import React from 'react';
import { Link } from 'react-router-dom';

const ProductSuite = () => {
  const products = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Ginee CRM',
      description: 'All-in-one customer relationship management platform with AI-powered insights',
      features: ['Lead Management', 'Sales Pipeline', 'Automation Workflows', 'Analytics Dashboard'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Social Media Suite',
      description: 'Complete social media management and automation platform',
      features: ['Content Scheduling', 'Multi-platform Management', 'Analytics', 'Team Collaboration'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Analytics Pro',
      description: 'Advanced analytics and reporting platform for data-driven decisions',
      features: ['Real-time Dashboards', 'Custom Reports', 'ROI Tracking', 'Performance Insights'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Brand Guardian',
      description: 'Comprehensive brand management and protection suite',
      features: ['Brand Monitoring', 'Reputation Management', 'Crisis Response', 'Brand Guidelines'],
    },
  ];

  const growthPlans = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      name: 'Starter',
      price: '$499',
      description: 'Perfect for small businesses getting started with digital marketing',
      features: [
        'Website Design & Development',
        'Basic SEO Optimization',
        'Social Media Setup (2 platforms)',
        'Monthly Performance Report',
        'Email Support',
        'Content Creation (10 posts/month)',
        'Google My Business Setup',
        'Basic Analytics Dashboard',
      ],
      buttonText: 'Start Free Trial',
      buttonStyle: 'bg-white border-2 border-gray-300 text-gray-800 hover:border-gray-400 hover:bg-gray-50',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      name: 'Professional',
      price: '$999',
      description: 'Comprehensive digital marketing solution for growing businesses',
      isPopular: true,
      features: [
        'Everything in Starter',
        'Advanced SEO & Content Strategy',
        'Social Media Management (5 platforms)',
        'Paid Advertising Management',
        'Weekly Performance Reports',
        'Priority Support',
        'Content Creation (25 posts/month)',
        'Lead Generation Campaigns',
        'Conversion Optimization',
        'Competitor Analysis',
        'Email Marketing Automation',
      ],
      buttonText: 'Choose Plan',
      buttonStyle: 'bg-blue-600 text-white hover:bg-blue-700',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      name: 'Enterprise',
      price: '$1,999',
      description: 'Full-scale digital marketing operations for large organizations',
      features: [
        'Everything in Professional',
        'Custom Strategy Development',
        'Dedicated Account Manager',
        'Multi-location Management',
        'Advanced Analytics & BI',
        '24/7 Priority Support',
        'Unlimited Content Creation',
        'Influencer Marketing Campaigns',
        'PR & Media Outreach',
        'Custom Integrations',
        'White-label Solutions',
        'Quarterly Strategy Reviews',
      ],
      buttonText: 'Contact Sales',
      buttonStyle: 'bg-white border-2 border-gray-300 text-gray-800 hover:border-gray-400 hover:bg-gray-50',
    },
  ];

  const martechPackages = [
    {
      name: 'MarTech - Basic Package',
      description: 'Essential MarTech features for small businesses getting started',
      price: '$197',
      features: [
        'Lead Management',
        'Contact Database',
        'Basic Email Templates',
        'Task Management',
        'Basic Reporting',
      ],
    },
    {
      name: 'MarTech - Standard Package',
      description: 'Advanced MarTech capabilities for growing businesses',
      price: '$297',
      features: [
        'Everything in Basic',
        'Sales Pipeline',
        'Email Automation',
        'Advanced Analytics',
        'Team Collaboration',
        'Integration Support',
      ],
    },
    {
      name: 'MarTech - Premium Package',
      description: 'Comprehensive MarTech solution with advanced features',
      price: '$497',
      features: [
        'Everything in Standard',
        'AI-Powered Insights',
        'Custom Workflows',
        'Advanced Reporting',
        'Priority Support',
        'Mobile App Access',
      ],
    },
    {
      name: 'MarTech - Custom Package',
      description: 'Tailored MarTech solution with dedicated support and custom features',
      price: '$997',
      features: [
        'Everything in Premium',
        'Custom Integrations',
        'Dedicated Account Manager',
        'White-label Options',
        'Advanced Security',
        '24/7 Support',
      ],
    },
  ];

  const whyChooseFeatures = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Expert Support',
      description: 'Dedicated support team available when you need help most.',
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance and data protection.',
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Data-Driven Results',
      description: 'Advanced analytics and AI-powered insights for better ROI.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-full mb-6">
              Product Suite
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Everything You Need to Scale Your Digital Presence
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Comprehensive digital marketing solutions, powerful tools, and expert support - all in one integrated platform designed to accelerate your business growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                Explore Our Products
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 15 L11 10 L6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                to="/contact"
                className="bg-white border-2 border-gray-300 text-gray-800 px-8 py-4 rounded-lg text-base font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Product Ecosystem Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Product Ecosystem
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Integrated solutions that work together seamlessly to deliver exceptional results for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-blue-600 mb-4">
                  {product.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-green-600 flex-shrink-0 mt-0.5"
                      >
                        <path
                          d="M16.667 5L7.5 14.167 3.333 10"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Choose Your Growth Plan Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Growth Plan
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Flexible pricing plans designed to scale with your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {growthPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white border-2 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 relative ${
                  plan.isPopular ? 'border-blue-600 shadow-lg' : 'border-gray-200'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-blue-600 mb-4">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-green-600 flex-shrink-0 mt-0.5"
                      >
                        <path
                          d="M16.667 5L7.5 14.167 3.333 10"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`${plan.buttonStyle} px-6 py-3 rounded-lg text-base font-semibold transition-colors inline-block w-full text-center`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MarTech Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              MarTech
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the perfect MarTech package to manage your marketing technology stack and drive business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {martechPackages.map((pkg, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {pkg.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {pkg.description}
                </p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-blue-600">{pkg.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-blue-600 flex-shrink-0 mt-0.5"
                      >
                        <path
                          d="M16.667 5L7.5 14.167 3.333 10"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="bg-white border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg text-base font-semibold hover:bg-blue-50 transition-colors inline-block w-full text-center"
                >
                  Choose Plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Product Suite Section - Light Blue Background */}
      <section className="py-16 md:py-24 bg-blue-100">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Product Suite?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-white mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Transform Your Business CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Join thousands of businesses already using our product suite to accelerate their growth and achieve remarkable results.
            </p>
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors inline-block mb-4"
            >
              Start Free Trial
            </Link>
            <p className="text-sm text-gray-500">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductSuite;

