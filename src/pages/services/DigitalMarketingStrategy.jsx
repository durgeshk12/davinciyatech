import React from 'react';
import { Link } from 'react-router-dom';

const DigitalMarketingStrategy = () => {
  const strategicServices = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Strategic Planning & Analysis',
      description: 'Comprehensive market analysis and strategic planning to identify opportunities, define target audiences, and create roadmaps for digital success.',
      items: ['Market Research', 'Competitor Analysis', 'SWOT Analysis', 'Goal Setting & KPIs'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Multi-Channel Marketing',
      description: 'Integrated marketing strategies across all digital channels to maximize reach, engagement, and conversions while maintaining consistent brand messaging.',
      items: ['Channel Integration', 'Cross-Platform Campaigns', 'Budget Allocation', 'Performance Optimization'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Conversion Optimization',
      description: 'Data-driven optimization strategies to improve conversion rates, enhance user experience, and maximize ROI across all digital touchpoints.',
      items: ['Funnel Analysis', 'A/B Testing', 'User Experience Optimization', 'Landing Page Design'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Digital Ecosystem Development',
      description: 'Building comprehensive digital ecosystems that connect all your marketing efforts, from website and social media to email marketing and paid advertising.',
      items: ['Platform Integration', 'Marketing Automation', 'Customer Journey Mapping', 'Attribution Modeling'],
    },
  ];

  const focusAreas = [
    {
      title: 'SEO & Content Strategy',
      description: 'Organic visibility and thought leadership',
      items: ['Keyword Research', 'Content Calendar', 'Technical SEO', 'Link Building'],
    },
    {
      title: 'Paid Advertising',
      description: 'Targeted campaigns across platforms',
      items: ['Google Ads', 'Social Media Ads', 'Display Advertising', 'Retargeting'],
    },
    {
      title: 'Social Media Strategy',
      description: 'Community building and engagement',
      items: ['Platform Strategy', 'Content Planning', 'Community Management', 'Influencer Partnerships'],
    },
    {
      title: 'Email Marketing',
      description: 'Nurturing and retention campaigns',
      items: ['List Building', 'Automation', 'Segmentation', 'Personalization'],
    },
    {
      title: 'Analytics & Reporting',
      description: 'Data-driven decision making',
      items: ['KPI Tracking', 'Performance Analysis', 'ROI Measurement', 'Strategic Insights'],
    },
    {
      title: 'Marketing Automation',
      description: 'Efficient scaling and optimization',
      items: ['Lead Nurturing', 'Customer Segmentation', 'Behavior Triggers', 'Lifecycle Marketing'],
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Audit',
      description: 'Comprehensive analysis of your current digital presence, market position, and competitive landscape.',
    },
    {
      number: '02',
      title: 'Strategy Development',
      description: 'Creating a customized digital marketing strategy aligned with your business goals and target audience.',
    },
    {
      number: '03',
      title: 'Implementation Planning',
      description: 'Detailed roadmap for executing your digital marketing strategy with timelines, resources, and responsibilities.',
    },
    {
      number: '04',
      title: 'Performance Monitoring',
      description: 'Continuous monitoring, analysis, and optimization to ensure maximum ROI and strategic success.',
    },
  ];

  const deliverables = [
    'Comprehensive Strategy Document',
    'Implementation Roadmap',
    'KPI Dashboard Setup',
    'Budget Allocation Plan',
    'Content Strategy Framework',
    'Marketing Calendar',
    'Performance Benchmarks',
    'Optimization Recommendations',
  ];

  const advantages = [
    'Increased Brand Visibility',
    'Higher Quality Leads',
    'Improved ROI',
    'Better Customer Insights',
    'Competitive Advantage',
    'Scalable Growth',
    'Enhanced Customer Experience',
    'Data-Driven Decisions',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-numero-orange text-gray-900 text-xs font-semibold px-4 py-2 rounded-md mb-6">
              Digital Marketing Strategy
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transform Your <span className="text-numero-teal">Digital</span> Presence with{' '}
              <span className="text-numero-teal">Strategic Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Comprehensive digital marketing strategies that drive growth, maximize ROI, and create sustainable competitive advantages. From planning to execution, we guide your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-numero-teal text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-teal-600 transition-colors flex items-center gap-2"
              >
                Get Your Strategy
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

      {/* Our Strategic Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Strategic Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing strategy services designed to accelerate your business growth and market dominance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {strategicServices.map((service, index) => (
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

      {/* Strategic Focus Areas Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Strategic Focus Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive coverage of all digital marketing channels and strategies for maximum impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {area.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {area.description}
                </p>
                <ul className="space-y-2">
                  {area.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-numero-teal flex-shrink-0 mt-1"
                      >
                        <path
                          d="M13.333 4L6 11.333 2.667 8"
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

      {/* Our Strategic Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Strategic Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven methodology that delivers comprehensive digital marketing strategies aligned with your business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-6xl font-bold text-gray-200 mb-4 leading-none">
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

      {/* Strategy Deliverables Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Strategy Deliverables
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive documentation and frameworks to guide your digital marketing success.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {deliverables.map((deliverable, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 flex items-start gap-3"
              >
                <div className="text-gray-400 flex-shrink-0 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-gray-900">
                  {deliverable}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Advantages Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Strategic Advantages
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Unlock the full potential of digital marketing with strategic planning and execution.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 flex items-start gap-3"
              >
                <div className="text-numero-teal flex-shrink-0 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-gray-900">
                  {advantage}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Accelerate Your Digital Growth CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Accelerate Your Digital Growth?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Let's create a comprehensive digital marketing strategy that drives sustainable growth and competitive advantage for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-numero-teal text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-teal-600 transition-colors flex items-center gap-2"
              >
                Start Your Strategy Today
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

export default DigitalMarketingStrategy;
