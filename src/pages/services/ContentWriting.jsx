import React from 'react';
import { Link } from 'react-router-dom';

const ContentWriting = () => {
  const contentServices = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Website Content & Copywriting',
      description: 'Compelling website copy that converts visitors into customers and clearly communicates your value proposition.',
      deliverables: [
        'Landing Page Copy',
        'Product Descriptions',
        'About Us Pages',
        'Service Descriptions',
      ],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Blog Content & Articles',
      description: 'SEO-optimized blog posts and articles that establish thought leadership and drive organic traffic.',
      deliverables: [
        'Blog Posts',
        'Industry Articles',
        'How-to Guides',
        'SEO Content',
      ],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Social Media Content',
      description: 'Engaging social media content that builds community, increases engagement, and amplifies your brand message.',
      deliverables: [
        'Social Media Captions',
        'Content Calendars',
        'Campaign Content',
        'Hashtag Strategy',
      ],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Email Marketing Content',
      description: 'Effective email campaigns that nurture leads, drive conversions, and maintain customer relationships.',
      deliverables: [
        'Email Campaigns',
        'Newsletter Content',
        'Automated Sequences',
        'Subject Lines',
      ],
    },
  ];

  const contentTypes = [
    {
      title: 'Web Copy',
      subtitle: 'Conversion-focused website content',
      examples: ['Landing Pages', 'Product Pages', 'About Us', 'Service Pages'],
    },
    {
      title: 'Blog Content',
      subtitle: 'SEO-optimized articles and posts',
      examples: ['Industry Insights', 'How-to Guides', 'Case Studies', 'News Articles'],
    },
    {
      title: 'Marketing Materials',
      subtitle: 'Promotional and sales content',
      examples: ['Brochures', 'Whitepapers', 'eBooks', 'Case Studies'],
    },
    {
      title: 'Social Content',
      subtitle: 'Platform-specific social media content',
      examples: ['Post Captions', 'Stories', 'Video Scripts', 'Campaign Content'],
    },
    {
      title: 'Email Content',
      subtitle: 'Direct marketing communications',
      examples: ['Newsletters', 'Campaigns', 'Sequences', 'Announcements'],
    },
    {
      title: 'Technical Content',
      subtitle: 'Specialized and technical writing',
      examples: ['Documentation', 'Manuals', 'Specifications', 'Tutorials'],
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Content Strategy',
      description: 'Understanding your brand voice, target audience, and content goals to develop a comprehensive content strategy.',
    },
    {
      number: '02',
      title: 'Research & Planning',
      description: 'Thorough research on your industry, competitors, and audience to create relevant and valuable content.',
    },
    {
      number: '03',
      title: 'Content Creation',
      description: 'Crafting high-quality, engaging content that aligns with your brand voice and achieves your objectives.',
    },
    {
      number: '04',
      title: 'Review & Optimization',
      description: 'Collaborative review process with revisions and optimization for maximum impact and engagement.',
    },
  ];

  const writingSpecialties = [
    'SEO-Optimized Content',
    'Conversion Copywriting',
    'Technical Writing',
    'Creative Content',
    'B2B Content Marketing',
    'E-commerce Copy',
    'Brand Storytelling',
    'Content Strategy',
  ];

  const whyMatters = [
    'Improved Search Rankings',
    'Higher Conversion Rates',
    'Enhanced Brand Authority',
    'Better Customer Engagement',
    'Increased Website Traffic',
    'Stronger Brand Voice',
    'Lead Generation',
    'Customer Education',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-numero-orange text-gray-900 text-xs font-semibold px-4 py-2 rounded-md mb-6">
              Content Writing
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-numero-teal">Words That Work</span>,{' '}
              <span className="text-numero-orange">Content That Converts</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Professional content writing services that engage your audience, boost your SEO, and drive results. From web copy to blog posts, we create content that tells your story and achieves your goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-numero-teal text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-teal-600 transition-colors flex items-center gap-2"
              >
                Start Your Content Project
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 15 L11 10 L6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                to="/blog"
                className="bg-white border-2 border-gray-300 text-gray-800 px-8 py-4 rounded-lg text-base font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Content Writing Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Content Writing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive content solutions that amplify your brand voice and drive meaningful engagement across all channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {contentServices.map((service, index) => (
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
                  {service.deliverables.map((item, itemIndex) => (
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

      {/* Content Types We Create Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Content Types We Create
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From web copy to technical documentation, we create every type of content your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {contentTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {type.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {type.subtitle}
                </p>
                <ul className="space-y-2">
                  {type.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="flex items-start gap-2">
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
                      <span className="text-gray-700 text-sm">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Writing Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Writing Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A collaborative approach that ensures every piece of content meets your standards and achieves your objectives.
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

      {/* Our Writing Specialties Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Writing Specialties
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized expertise across different content types and writing styles.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {writingSpecialties.map((specialty, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 text-center"
              >
                <div className="w-12 h-12 bg-numero-teal/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-numero-teal"
                  >
                    <path
                      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 2v6h6M16 13H8M16 17H8M10 9H8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-gray-900">
                  {specialty}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Professional Content Writing Matters Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Professional Content Writing Matters
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Quality content is the foundation of successful digital marketing and brand communication.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {whyMatters.map((benefit, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 text-center"
              >
                <div className="w-12 h-12 bg-numero-teal rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M16.667 5L7.5 14.167 3.333 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
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

      {/* Ready to Elevate Your Content CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Elevate Your Content?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Let's create compelling content that engages your audience, improves your search rankings, and drives real business results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-numero-teal text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-teal-600 transition-colors flex items-center gap-2"
              >
                Get Professional Content
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

export default ContentWriting;
