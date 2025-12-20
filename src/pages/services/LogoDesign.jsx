import React from 'react';
import { Link } from 'react-router-dom';

const LogoDesign = () => {
  const logoServices = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Custom Logo Design',
      description: 'Unique, memorable logos crafted specifically for your brand. Our designers create distinctive visual identities that capture your brand\'s essence and resonate with your target audience.',
      items: ['Original Concepts', 'Multiple Variations', 'Brand Story Integration', 'Color Psychology'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Brand Identity Systems',
      description: 'Complete visual identity systems that extend beyond just a logo. We create cohesive brand elements that work seamlessly across all touchpoints and applications.',
      items: ['Logo Variations', 'Color Palettes', 'Typography Systems', 'Visual Guidelines'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Logo Redesign & Refresh',
      description: 'Modernize and revitalize existing logos while preserving brand equity. We help evolving brands stay relevant and competitive in today\'s dynamic marketplace.',
      items: ['Brand Evolution', 'Market Relevance', 'Legacy Preservation', 'Modern Appeal'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Fast-Track Logo Creation',
      description: 'Expedited logo design services for urgent projects without compromising quality. Perfect for startups and businesses with tight launch deadlines.',
      items: ['Quick Turnaround', 'Quality Guaranteed', 'Revision Rounds', 'File Formats'],
    },
  ];

  const logoTypes = [
    {
      title: 'Wordmark',
      description: 'Text-based logos focusing on typography',
      examples: ['Google', 'Coca-Cola', 'IBM'],
    },
    {
      title: 'Lettermark',
      description: 'Logos using initials or abbreviations',
      examples: ['CNN', 'HBO', 'NASA'],
    },
    {
      title: 'Pictorial Mark',
      description: 'Icon-based logos with recognizable imagery',
      examples: ['Apple', 'Twitter', 'Target'],
    },
    {
      title: 'Abstract Mark',
      description: 'Geometric forms creating unique symbols',
      examples: ['Nike', 'Pepsi', 'Adidas'],
    },
    {
      title: 'Mascot',
      description: 'Character-based logos with personality',
      examples: ['KFC', 'Mailchimp', 'Pringles'],
    },
    {
      title: 'Combination Mark',
      description: 'Text and symbol working together',
      examples: ['Burger King', 'Lacoste', 'Doritos'],
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Brief',
      description: 'Understanding your brand, values, target audience, and design preferences through detailed consultation.',
    },
    {
      number: '02',
      title: 'Concept Development',
      description: 'Creating initial design concepts and exploring different creative directions based on your brief.',
    },
    {
      number: '03',
      title: 'Design Refinement',
      description: 'Refining chosen concepts through collaborative feedback and iterative design improvements.',
    },
    {
      number: '04',
      title: 'Final Delivery',
      description: 'Delivering final logo files in all necessary formats with comprehensive brand guidelines.',
    },
  ];

  const deliverables = [
    'High-Resolution Logo Files',
    'Vector Formats (AI, EPS, SVG)',
    'Raster Formats (PNG, JPG)',
    'Black & White Versions',
    'Favicon & Social Media Versions',
    'Brand Guidelines Document',
    'Color Specifications',
    'Typography Recommendations',
  ];

  const whyMatters = [
    'Memorable Brand Recognition',
    'Professional Credibility',
    'Competitive Differentiation',
    'Emotional Connection',
    'Scalable Design',
    'Timeless Appeal',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-numero-orange text-gray-900 text-xs font-semibold px-4 py-2 rounded-md mb-6">
              Logo Design
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Craft Your Brand's Perfect <span className="text-numero-orange">Visual Identity</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Create a powerful first impression with custom logo designs that capture your brand's essence. Our expert designers craft memorable, scalable logos that stand the test of time.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-numero-teal text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-teal-600 transition-colors flex items-center gap-2"
              >
                Start Your Logo Project
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 15 L11 10 L6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                to="/blog"
                className="bg-white border-2 border-gray-300 text-gray-800 px-8 py-4 rounded-lg text-base font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors"
              >
                See Our Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Logo Design Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Logo Design Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive logo design solutions tailored to your brand's unique needs and business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {logoServices.map((service, index) => (
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

      {/* Logo Types We Create Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Logo Types We Create
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From wordmarks to combination marks, we design every type of logo to suit your brand's personality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {logoTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {type.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {type.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {type.examples.map((example, exampleIndex) => (
                    <span
                      key={exampleIndex}
                      className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Design Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Design Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A collaborative approach that ensures your logo perfectly represents your brand vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
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

      {/* What You'll Receive Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What You'll Receive
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete logo package with all files and documentation needed for any application.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {deliverables.map((deliverable, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 flex items-start gap-3"
              >
                <div className="text-numero-teal flex-shrink-0 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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

      {/* Why Professional Logo Design Matters Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Professional Logo Design Matters
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A great logo is more than just a pretty picture - it's a powerful business asset.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {whyMatters.map((benefit, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 flex items-start gap-3"
              >
                <div className="text-numero-teal flex-shrink-0 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M8 12h8" stroke="currentColor" strokeWidth="2"/>
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

      {/* Ready to Create Your Iconic Logo CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Create Your Iconic Logo?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Let's design a logo that perfectly captures your brand's personality and makes a lasting impression on your audience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-numero-teal text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-teal-600 transition-colors flex items-center gap-2"
              >
                Get Your Custom Logo
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 15 L11 10 L6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                to="/services/design-services"
                className="bg-white border-2 border-numero-teal text-numero-teal px-8 py-4 rounded-lg text-base font-semibold hover:bg-gray-50 transition-colors"
              >
                View All Design Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogoDesign;
