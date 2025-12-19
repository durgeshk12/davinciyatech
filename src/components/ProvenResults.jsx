import React, { useState, useEffect } from 'react';

const ProvenResults = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const caseStudies = [
    {
      tag: 'B2B SAAS CASE STUDY',
      tagColor: 'yellow',
      title: 'Enterprise SaaS Transformation',
      description: '3x pipeline growth for enterprise SaaS through integrated marketing + sales approach',
      metrics: [
        { label: 'Lead Increase', value: '+120%' },
        { label: 'Pipeline Growth', value: '3x' },
        { label: 'SQL Conversion', value: '+40%' },
        { label: 'ARR Added', value: '$2.5M' },
      ],
      bgColor: 'blue',
    },
    {
      tag: 'LUXURY VILLAS PROJECT',
      tagColor: 'light-blue',
      title: 'Bangalore Premium Villas',
      description: '50+ site visits in 90 days, 12 luxury villas sold through targeted NRI campaigns',
      metrics: [
        { label: 'ROI Generated', value: '8x' },
        { label: 'Site Visits', value: '50+' },
        { label: 'Villas Sold', value: '12' },
        { label: 'Revenue Generated', value: '₹18Cr' },
      ],
      bgColor: 'dark-blue',
    },
    {
      tag: 'TECH STARTUP',
      tagColor: 'dark-yellow',
      title: 'Fintech Revenue Scale',
      description: 'Series A fintech company scaled from 100 to 1000+ customers in 8 months',
      metrics: [
        { label: 'Customer Growth', value: '10x' },
        { label: 'Demo Bookings', value: '+250%' },
        { label: 'Lead Quality', value: '85%' },
        { label: 'Series A Raised', value: '$5.2M' },
      ],
      bgColor: 'yellow',
    },
    {
      tag: 'DUBAI APARTMENTS',
      tagColor: 'orange',
      title: 'Marina View Residences',
      description: 'Premium apartment sales targeting NRI investors from India and US markets',
      metrics: [
        { label: 'Units Sold', value: '25' },
        { label: 'Qualified Leads', value: '150+' },
        { label: 'ROAS Achieved', value: '6x' },
        { label: 'Sales Value', value: '₹35Cr' },
      ],
      bgColor: 'light-blue',
    },
    {
      tag: 'HEALTHCARE B2B',
      tagColor: 'white',
      title: 'MedTech Solution Scale',
      description: 'Healthcare SaaS platform expanded to 100+ hospitals across 3 countries',
      metrics: [
        { label: 'Hospitals Onboarded', value: '100+' },
        { label: 'Trial Signups', value: '+180%' },
        { label: 'Trial-to-Paid', value: '65%' },
        { label: 'ARR Achieved', value: '$8M' },
      ],
      bgColor: 'blue',
    },
    {
      tag: 'LUXURY TOWNSHIP',
      tagColor: 'black',
      title: 'Elite Gated Community',
      description: 'Ultra-luxury township launch with 200+ villa sales in first phase',
      metrics: [
        { label: 'Villas Sold', value: '200+' },
        { label: 'Site Visits', value: '800+' },
        { label: 'Phase 1 Sold', value: '95%' },
        { label: 'Total Revenue', value: '₹500Cr' },
      ],
      bgColor: 'yellow',
    },
    {
      tag: 'E-COMMERCE PLATFORM',
      tagColor: 'yellow',
      title: 'Multi-Vendor Marketplace',
      description: 'Custom e-commerce platform built from scratch supporting 1000+ vendors and handling ₹50Cr+ GMV',
      metrics: [
        { label: 'Active Vendors', value: '1000+' },
        { label: 'Daily Orders', value: '50K+' },
        { label: 'Uptime Achieved', value: '99.9%' },
        { label: 'Annual GMV', value: '₹50Cr' },
      ],
      bgColor: 'light-blue',
    },
    {
      tag: 'FINTECH APP',
      tagColor: 'white',
      title: 'Digital Banking Solution',
      description: 'Secure mobile banking app with biometric authentication serving 500K+ users across 15 countries',
      metrics: [
        { label: 'Active Users', value: '500K+' },
        { label: 'Countries', value: '15' },
        { label: 'App Store Rating', value: '4.8★' },
        { label: 'Transactions/Month', value: '$100M+' },
      ],
      bgColor: 'dark-blue',
    },
    {
      tag: 'AI ANALYTICS PLATFORM',
      tagColor: 'black',
      title: 'Enterprise AI Dashboard',
      description: 'Custom AI analytics platform processing 10M+ data points daily with real-time insights for Fortune 500 company',
      metrics: [
        { label: 'Data Points/Day', value: '10M+' },
        { label: 'Query Response', value: '2ms' },
        { label: 'Efficiency Gain', value: '300%' },
        { label: 'Cost Savings', value: '$5M' },
      ],
      bgColor: 'yellow',
    },
    {
      tag: 'IOT PLATFORM',
      tagColor: 'white',
      title: 'Smart City Infrastructure',
      description: 'Comprehensive IoT management system connecting 50K+ devices across smart city infrastructure with 99.95% uptime',
      metrics: [
        { label: 'Connected Devices', value: '50K+' },
        { label: 'System Uptime', value: '99.95%' },
        { label: 'Energy Savings', value: '80%' },
        { label: 'Annual Savings', value: '₹25Cr' },
      ],
      bgColor: 'light-blue',
    },
  ];

  const getTagColor = (color) => {
    const colors = {
      yellow: 'bg-yellow-400 text-gray-900',
      'light-blue': 'bg-blue-300 text-gray-900',
      'dark-yellow': 'bg-yellow-600 text-white',
      orange: 'bg-numero-orange text-gray-900',
      white: 'bg-white text-gray-900',
      black: 'bg-gray-900 text-white',
    };
    return colors[color] || 'bg-gray-400 text-white';
  };

  const getBgColor = (color) => {
    const colors = {
      blue: 'bg-blue-600',
      'dark-blue': 'bg-blue-900',
      yellow: 'bg-yellow-400',
      'light-blue': 'bg-blue-400',
    };
    return colors[color] || 'bg-gray-600';
  };

  // Calculate how many cards to show based on screen size
  const getCardsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 4; // lg: 4 cards
      if (window.innerWidth >= 768) return 2; // md: 2 cards
      return 1; // mobile: 1 card
    }
    return 4;
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, caseStudies.length - cardsPerView);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };


  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-8xl mx-auto px-4 md:px-10">
        {/* Top Section */}
        <div className="text-center mb-12">
          <button className="border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
            PROVEN RESULTS
          </button>
          <h2 className="text-4xl md:text-5xl font-bold text-numero-teal mb-4">
            Proven Results Across Verticals
          </h2>
          <p className="text-lg text-gray-600">
            Real success stories from our B2B, Real Estate, and Software Development clients
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Slider Track */}
          <div className="overflow-hidden py-4">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-4"
              style={{
                transform: `translateX(calc(-${currentIndex * (100 / cardsPerView)}% - ${currentIndex * (1 / cardsPerView) * 1}rem))`,
              }}
            >
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{
                    width: `calc((100% - ${(cardsPerView - 1) * 1}rem) / ${cardsPerView})`,
                  }}
                >
                  <div
                    className={`${getBgColor(study.bgColor)} rounded-lg p-6 text-white hover:scale-105 transition-transform duration-300 h-full`}
                  >
                    <span className={`${getTagColor(study.tagColor)} px-3 py-1 rounded-md text-xs font-bold mb-4 inline-block`}>
                      {study.tag}
                    </span>
                    <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                    <p className="text-white/90 text-sm mb-6">{study.description}</p>
                    <div className="space-y-3">
                      {study.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex}>
                          <div className="text-2xl font-bold">{metric.value}</div>
                          <div className="text-white/80 text-xs">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={goToPrevious}
            className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15 L7 10 L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Previous Case Studies
          </button>
          <button
            onClick={goToNext}
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            See More Case Studies
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 15 L13 10 L8 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProvenResults;
