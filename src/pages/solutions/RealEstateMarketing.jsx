import React from 'react';
import { Link } from 'react-router-dom';

const RealEstateMarketing = () => {
  const realEstateServices = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 9v0M9 12v0M9 15v0M9 18v0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Property Marketing',
      description: 'Comprehensive marketing campaigns for luxury properties and developments.',
      tags: ['Professional Photography', 'Virtual Tours', 'Drone Marketing', 'Property Brochures'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'NRI Targeting',
      description: 'Specialized marketing strategies to reach Non-Resident Indians globally.',
      tags: ['Social Media Advertising', 'Google Ads', 'Local Language Content', 'Global Outreach'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 11l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Lead Generation',
      description: 'Multi-channel lead generation that converts prospects into buyers.',
      tags: ['Digital Marketing', 'Social Media Marketing', 'Content Marketing', 'Referral Programs'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'CRM Automation',
      description: 'Automated lead nurturing and sales pipeline management.',
      tags: ['Lead Scoring', 'Automated Follow-ups', 'Pipeline Management', 'Sales Analytics'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Location Marketing',
      description: 'Hyper-local marketing strategies for specific areas and developments.',
      tags: ['Local SEO', 'Community Targeting', 'Neighborhood Analysis', 'Geo-fencing'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Sales Support',
      description: 'Complete sales support from lead to closing.',
      tags: ['Sales Training', 'Closing Support', 'Documentation', 'Customer Service'],
    },
  ];

  const successStories = [
    {
      title: 'Luxury Residential Complex',
      location: 'Gurgaon, India',
      value: '₹500+ Crores',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    },
    {
      title: 'Premium Villa Project',
      location: 'Gurgaon, India',
      value: '₹750+ Crores',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    },
    {
      title: 'Commercial Development',
      location: 'Bangalore, India',
      value: '₹120+ Crores',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    },
  ];

  const nriMarketingFeatures = {
    globalReach: [
      'Localized advertising campaigns',
      'Cultural sensitivity in messaging',
      'Time zone optimized communication',
      'Currency and legal guidance',
    ],
    trustBuilding: [
      'Virtual property tours and meetings',
      'Transparent documentation process',
      'Testimonials from NRI customers',
      'End-to-end investment support',
    ],
  };

  const statistics = [
    {
      value: '₹2000+',
      label: 'Crores In Property Sales',
    },
    {
      value: '100+',
      label: 'Properties Marketed',
    },
    {
      value: '85%',
      label: 'Average Sell out Rate',
    },
    {
      value: '60%',
      label: 'NRI Customer Base',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80)',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/60"></div>
        
        <div className="max-w-8xl mx-auto px-4 md:px-10 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Sell Out Faster with Full-Funnel Real Estate Marketing
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Performance marketing, CRM automation, and NRI targeting that converts site visits into sales.
            </p>
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              Get Marketing Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Bar - Light Blue Background */}
      <section className="py-12 bg-blue-100">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">
                  {stat.value}
                </div>
                <div className="text-lg text-blue-800 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Estate Marketing Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Estate Marketing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete marketing solutions for developers, builders, and real estate companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {realEstateServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-blue-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-numero-orange text-gray-900 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real results from real estate projects we've marketed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${story.image})` }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {story.location}
                  </p>
                  <p className="text-blue-600 font-semibold">
                    Project Value: {story.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized NRI Marketing Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specialized NRI Marketing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tap into the global NRI market with targeted campaigns that speak their language and address their unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Global Reach</h3>
              <ul className="space-y-4">
                {nriMarketingFeatures.globalReach.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
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
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Trust Building</h3>
              <ul className="space-y-4">
                {nriMarketingFeatures.trustBuilding.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
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
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Accelerate Your Sales CTA Section - Blue Background */}
      <section className="py-16 md:py-24 bg-blue-600">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Accelerate Your Sales?
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Get a free marketing audit for your real estate project and discover how to reach more buyers faster
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-numero-orange text-gray-900 px-8 py-4 rounded-lg text-base font-semibold hover:bg-orange-500 transition-colors"
              >
                Get a Free Audit
              </Link>
              <Link
                to="/contact"
                className="bg-white border-2 border-white text-blue-600 px-8 py-4 rounded-lg text-base font-semibold hover:bg-gray-100 transition-colors"
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

export default RealEstateMarketing;
