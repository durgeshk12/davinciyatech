import React from 'react';
import { Link } from 'react-router-dom';
import WhyChooseCTA from '../components/WhyChooseCTA';

const Services = () => {
  const partnershipFeatures = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Dedicated Relationship Manager',
      description: 'Your dedicated point of contact who understands your business goals and ensures seamless communication throughout our partnership.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Client Experience Coordinator',
      description: 'A dedicated coordinator who ensures your experience is exceptional, handling all administrative aspects and keeping projects on track.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 9h18 M9 21V9" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Project Management Platform',
      description: 'Access to our comprehensive project management platform where you can track progress, view reports, and collaborate with our team in real-time.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M8 12h8" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Services Playbook',
      description: 'A comprehensive playbook detailing our methodologies, best practices, and processes to ensure consistent, high-quality deliverables.',
    },
  ];

  const services = [
    {
      name: 'Branding Services',
      path: '/services/branding-services',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: 'Comprehensive branding solutions that create memorable brand identities and establish strong market presence.',
      tags: ['Brand Strategy', 'Logo Design', 'Visual Identity'],
    },
    {
      name: 'Web Development',
      path: '/services/web-development',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      description: 'Custom web development solutions that deliver exceptional user experiences and drive business growth.',
      tags: ['Frontend', 'Backend', 'Full Stack'],
    },
    {
      name: 'SEO Services',
      path: '/services/seo-services',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
          <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      description: 'Strategic SEO services that improve your search engine rankings and drive organic traffic to your website.',
      tags: ['On-Page SEO', 'Off-Page SEO', 'Technical SEO'],
    },
    {
      name: 'Social Media Marketing',
      path: '/services/social-media-marketing',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: 'Engaging social media campaigns that build brand awareness and foster meaningful connections with your audience.',
      tags: ['Content Strategy', 'Community Management', 'Paid Advertising'],
    },
    {
      name: 'Influencer Marketing',
      path: '/services/influencer-marketing',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 11l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: 'Strategic influencer partnerships that amplify your brand message and reach highly engaged audiences.',
      tags: ['Influencer Outreach', 'Campaign Management', 'Performance Tracking'],
    },
    {
      name: 'Logo Design',
      path: '/services/logo-design',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: 'Professional logo design services that create distinctive brand marks that resonate with your target audience.',
      tags: ['Logo Concepts', 'Brand Identity', 'Icon Design'],
    },
    {
      name: 'Digital Marketing Strategy',
      path: '/services/digital-marketing-strategy',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      description: 'Data-driven digital marketing strategies that align with your business objectives and drive measurable results.',
      tags: ['Strategy Development', 'Market Analysis', 'Campaign Planning'],
    },
    {
      name: 'Content Writing',
      path: '/services/content-writing',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      description: 'Compelling content that engages your audience, builds trust, and drives conversions across all digital channels.',
      tags: ['Blog Writing', 'Copywriting', 'Content Strategy'],
    },
    {
      name: 'Performance Marketing',
      path: '/services/performance-marketing',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: 'Performance-driven marketing campaigns that deliver measurable ROI and optimize your marketing spend.',
      tags: ['PPC', 'Display Advertising', 'Retargeting'],
    },
    {
      name: 'Conversion Rate Optimization',
      path: '/services/conversion-rate-optimization',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 7l-5 5-4-4-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: 'Data-driven optimization strategies that improve conversion rates and maximize the value of your traffic.',
      tags: ['A/B Testing', 'User Experience', 'Analytics'],
    },
    {
      name: 'Reputation Management',
      path: '/services/reputation-management',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: 'Comprehensive reputation management services that protect and enhance your brand image online.',
      tags: ['Online Reviews', 'Brand Monitoring', 'Crisis Management'],
    },
    {
      name: 'Lead Generation',
      path: '/services/lead-generation',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 11l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: 'Strategic lead generation campaigns that attract qualified prospects and fill your sales pipeline.',
      tags: ['Lead Nurturing', 'Qualification', 'CRM Integration'],
    },
    {
      name: 'Design Services',
      path: '/services/design-services',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      description: 'Creative design services that bring your brand to life with stunning visuals and engaging user experiences.',
      tags: ['UI/UX Design', 'Graphic Design', 'Web Design'],
    },
    {
      name: 'Fractional CMO',
      path: '/services/fractional-cmo',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: 'Experienced CMO leadership on a part-time basis to drive your marketing strategy and execution.',
      tags: ['Strategic Planning', 'Team Leadership', 'Marketing Operations'],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              An extension of your company with respect to everything digital marketing
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Unleash the potential of unrivalled performance and collaboration with Davinciyatech, the leading digital marketing company. Our superior services provide excellent value for your investment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-numero-teal text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-teal-600 transition-colors flex items-center gap-2"
              >
                Let's Connect
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 15 L11 10 L6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                to="/blog"
                className="bg-white border-2 border-gray-300 text-gray-800 px-8 py-4 rounded-lg text-base font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                View Our Work
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 15 L11 10 L6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Value Proposition Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We are your uniquely passionate digital performance partner
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              When you work with Davinciyatech as your digital agency, you gain access to a plethora of deliverables that will propel your marketing efforts to new heights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {partnershipFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-numero-teal mb-4">
                  {feature.icon}
                </div>
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

      {/* Our Digital Marketing Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Digital Marketing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions to help your business grow and succeed online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="text-numero-teal mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-numero-orange text-gray-900 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={service.path}
                  className="inline-flex items-center gap-2 text-numero-teal font-semibold text-sm hover:text-teal-600 transition-colors mt-auto"
                >
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12 L10 8 L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose CTA Section */}
      <WhyChooseCTA />
    </div>
  );
};

export default Services;

