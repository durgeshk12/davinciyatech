import React from 'react';
import { Link } from 'react-router-dom';

const SocialMediaMarketing = () => {
  const socialMediaServices = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Social Media Strategy',
      description: 'Comprehensive social media strategies tailored to your brand\'s unique voice and business objectives. We analyze your audience, competitors, and industry trends to create winning strategies.',
      items: ['Platform Analysis', 'Content Strategy', 'Audience Research', 'Competitor Analysis'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Community Management',
      description: 'Build and nurture engaged communities around your brand. We manage your social media presence, respond to comments, and foster meaningful interactions with your audience.',
      items: ['Daily Management', 'Community Engagement', 'Customer Support', 'Reputation Management'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Social Media Advertising',
      description: 'Targeted social media advertising campaigns that drive results. We create, manage, and optimize paid campaigns across all major platforms to maximize your ROI.',
      items: ['Campaign Creation', 'Ad Optimization', 'Audience Targeting', 'Performance Tracking'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Analytics & Reporting',
      description: 'Comprehensive reporting and analytics to track your social media performance. We provide actionable insights to continuously improve your social media strategy.',
      items: ['Performance Metrics', 'ROI Analysis', 'Growth Tracking', 'Custom Reports'],
    },
  ];

  const platforms = [
    {
      name: 'Facebook',
      description: 'Build communities and drive engagement',
      bgColor: 'bg-blue-100',
      iconColor: 'bg-blue-600',
      letter: 'F',
    },
    {
      name: 'Instagram',
      description: 'Visual storytelling and brand awareness',
      bgColor: 'bg-purple-100',
      iconColor: 'bg-purple-600',
      letter: 'I',
    },
    {
      name: 'LinkedIn',
      description: 'B2B networking and thought leadership',
      bgColor: 'bg-blue-100',
      iconColor: 'bg-blue-600',
      letter: 'L',
    },
    {
      name: 'Twitter',
      description: 'Real-time engagement and customer service',
      bgColor: 'bg-blue-100',
      iconColor: 'bg-blue-600',
      letter: 'T',
    },
    {
      name: 'TikTok',
      description: 'Creative content and viral marketing',
      bgColor: 'bg-pink-100',
      iconColor: 'bg-red-600',
      letter: 'T',
    },
    {
      name: 'YouTube',
      description: 'Video content and educational marketing',
      bgColor: 'bg-pink-100',
      iconColor: 'bg-red-600',
      letter: 'Y',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Strategy Development',
      description: 'Understanding your brand, audience, and goals to create a comprehensive social media strategy.',
    },
    {
      number: '02',
      title: 'Content Creation',
      description: 'Developing engaging, brand-aligned content that resonates with your target audience across platforms.',
    },
    {
      number: '03',
      title: 'Community Building',
      description: 'Growing and engaging your social media community through consistent posting and interaction.',
    },
    {
      number: '04',
      title: 'Performance Optimization',
      description: 'Analyzing results and optimizing strategies to maximize engagement and achieve business goals.',
    },
  ];

  const benefits = [
    'Increased Brand Awareness',
    'Higher Engagement Rates',
    'More Website Traffic',
    'Better Customer Relationships',
    'Improved Sales Conversions',
    'Cost-Effective Marketing',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-numero-orange text-gray-900 text-xs font-semibold px-4 py-2 rounded-md mb-6">
              Social Media Marketing
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-numero-teal">Amplify Your Brand's Voice</span>{' '}
              <span className="text-numero-orange">Across Social Media</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Build meaningful connections, drive engagement, and grow your business with our comprehensive social media marketing services. From strategy to execution, we help your brand thrive in the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-numero-teal text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-teal-600 transition-colors flex items-center gap-2"
              >
                Get Started Today
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 15 L11 10 L6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                to="/contact"
                className="bg-white border-2 border-gray-300 text-gray-800 px-8 py-4 rounded-lg text-base font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Social Media Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Social Media Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive social media solutions designed to elevate your brand presence and drive meaningful engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {socialMediaServices.map((service, index) => (
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
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
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

      {/* Platforms We Master Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Platforms We Master
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We help you succeed across all major social media platforms with tailored strategies for each.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className={`${platform.bgColor} rounded-lg p-6 hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`${platform.iconColor} w-12 h-12 rounded-full flex items-center justify-center`}>
                    <span className="text-white font-bold text-lg">{platform.letter}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {platform.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  {platform.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven methodology that delivers consistent results for your social media marketing efforts.
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

      {/* Why Choose Our Social Media Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Social Media Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your social media presence with measurable results and authentic engagement.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 flex items-start gap-3"
              >
                <div className="text-numero-teal flex-shrink-0 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-gray-900">
                  {benefit}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Dominate Social Media CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Dominate Social Media?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Let's create a social media strategy that drives real results for your business. Contact us today to get started.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-numero-teal text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-teal-600 transition-colors flex items-center gap-2"
              >
                Start Your Social Media Journey
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 15 L11 10 L6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                to="/contact"
                className="bg-white border-2 border-gray-300 text-gray-800 px-8 py-4 rounded-lg text-base font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaMarketing;
