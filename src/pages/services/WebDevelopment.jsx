import React from 'react';
import { Link } from 'react-router-dom';

const WebDevelopment = () => {
  const webServices = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Responsive Web Development',
      description: 'Modern, mobile-first websites that look great and perform flawlessly across all devices and screen sizes.',
      tags: ['Mobile-First Design', 'Cross-Browser Compatible', 'Fast Loading', 'SEO Optimized'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Content Management Systems (CMS)',
      description: 'Easy-to-manage CMS solutions that give you full control over your website content without technical expertise.',
      tags: ['WordPress', 'Custom CMS', 'Easy Management', 'SEO Integration'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'E-commerce Development',
      description: 'Full-featured online stores with secure payment processing, inventory management, and seamless shopping experiences.',
      tags: ['Shopping Cart', 'Payment Gateway', 'Inventory Management', 'Order Processing'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Custom Web Applications',
      description: 'Tailored web applications built to solve your specific business challenges and streamline your operations.',
      tags: ['Custom Development', 'API Integration', 'Database Design', 'Security Features'],
    },
  ];

  const technologies = [
    { name: 'React', category: 'Frontend', color: 'bg-blue-100 text-blue-700' },
    { name: 'Node.js', category: 'Backend', color: 'bg-green-100 text-green-700' },
    { name: 'WordPress', category: 'CMS', color: 'bg-blue-100 text-blue-700' },
    { name: 'PHP', category: 'Backend', color: 'bg-purple-100 text-purple-700' },
    { name: 'MySQL', category: 'Database', color: 'bg-orange-100 text-orange-700' },
    { name: 'MongoDB', category: 'Database', color: 'bg-green-100 text-green-700' },
    { name: 'AWS', category: 'Cloud', color: 'bg-orange-100 text-orange-700' },
    { name: 'Docker', category: 'DevOps', color: 'bg-blue-100 text-blue-700' },
    { name: 'Frontend', category: 'Modern UI/UX', color: 'bg-blue-50 text-blue-600' },
    { name: 'Backend', category: 'Robust APIs', color: 'bg-green-50 text-green-600' },
    { name: 'Database', category: 'Data Solutions', color: 'bg-orange-50 text-orange-600' },
    { name: 'Cloud', category: 'Scalable Hosting', color: 'bg-yellow-50 text-yellow-600' },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Requirements Analysis',
      description: 'Understanding your business needs, target audience, and project goals to create a comprehensive development plan.',
    },
    {
      number: '02',
      title: 'Design & Architecture',
      description: 'Creating wireframes, mockups, and technical architecture to ensure optimal user experience and performance.',
    },
    {
      number: '03',
      title: 'Development & Testing',
      description: 'Agile development process with regular testing and quality assurance to ensure bug-free delivery.',
    },
    {
      number: '04',
      title: 'Launch & Support',
      description: 'Deployment to production environment with ongoing maintenance and support services.',
    },
  ];

  const whyChooseFeatures = [
    {
      title: 'Mobile-First Approach',
      description: 'All websites are designed with mobile users in mind, ensuring optimal experience across all devices.',
    },
    {
      title: 'SEO Optimized',
      description: 'Built-in SEO best practices to help your website rank higher in search engines.',
    },
    {
      title: 'Fast Performance',
      description: 'Optimized code and hosting solutions ensure lightning-fast loading times.',
    },
    {
      title: 'Security First',
      description: 'Comprehensive security measures to protect your website and user data.',
    },
  ];

  const projectStats = [
    { value: '100+', label: 'Websites Built' },
    { value: '50%', label: 'Faster Loading' },
    { value: '99%', label: 'Uptime Guarantee' },
    { value: '24/7', label: 'Support' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-numero-orange text-gray-900 text-xs font-semibold px-4 py-2 rounded-md mb-6">
                Web Development
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Best Web Development Company
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Modern, responsive, and high-performance websites that drive business growth. We create custom web solutions tailored to your unique needs and goals.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link
                  to="/contact"
                  className="bg-numero-teal text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-teal-600 transition-colors flex items-center gap-2"
                >
                  Get Quote Now
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
            <div className="bg-gradient-to-br from-blue-400 via-green-400 to-yellow-400 rounded-2xl p-8 md:p-12 text-white">
              <div className="mb-6">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M8 3H4a2 2 0 0 0-2 2v4m18-4h-4a2 2 0 0 0-2 2v4m0 6v4a2 2 0 0 0 2 2h4M8 21H4a2 2 0 0 1-2-2v-4m18 4v-4a2 2 0 0 0-2-2h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Custom Web Solutions</h2>
              <p className="text-white/90 text-base leading-relaxed">
                Building powerful web applications that deliver exceptional user experiences and drive business results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All-in-one Website Development Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All-in-one Website Development Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive web development solutions from responsive design to custom applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {webServices.map((service, index) => (
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

      {/* Technologies We Use Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-numero-teal/10 text-numero-teal text-xs font-semibold px-4 py-2 rounded-md mb-4">
              Our Tech Stack
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technologies for scalable and high-performance web solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`${tech.color} rounded-lg p-4 hover:shadow-md transition-shadow duration-300 text-center`}
              >
                <h3 className="text-lg font-bold mb-1">{tech.name}</h3>
                <p className="text-xs opacity-80">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Development Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures quality delivery and client satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 bg-numero-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-numero-teal">{step.number}</span>
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

      {/* Why Choose Our Web Development Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Panel - Features */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Why Choose Our Web Development Services?
              </h2>
              <div className="space-y-6">
                {whyChooseFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-numero-teal rounded-full flex items-center justify-center mt-1">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-white"
                      >
                        <path
                          d="M13.333 4L6 11.333 2.667 8"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panel - Project Statistics Box */}
            <div className="bg-gray-100 border border-gray-200 rounded-lg p-8">
              <div className="text-numero-teal mb-6">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Project Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                {projectStats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl md:text-3xl font-bold text-numero-teal mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Build Your Website CTA Section - Blue Background */}
      <section className="py-16 md:py-24 bg-numero-teal">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Website?
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Let's create a powerful web presence that drives results for your business. Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-numero-orange text-gray-900 px-8 py-4 rounded-lg text-base font-semibold hover:bg-orange-500 transition-colors"
              >
                Get Free Quote
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-white/20 transition-colors"
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

export default WebDevelopment;
