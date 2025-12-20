import React from 'react';
import { Link } from 'react-router-dom';

const SoftwareDevelopment = () => {
  const softwareServices = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      tags: ['React', 'TypeScript', 'Next.js'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      tags: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" stroke="currentColor" strokeWidth="2"/>
          <path d="M21 5c0 1.66-4 3-9 3S3 6.66 3 5" stroke="currentColor" strokeWidth="2"/>
          <path d="M21 19c0 1.66-4 3-9 3s-9-1.34-9-3" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 5v14M21 5v14" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Backend Systems',
      description: 'Scalable backend infrastructure and API development.',
      tags: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 10h-5V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 10l3-3M18 10l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Cloud Solutions',
      description: 'Cloud-native applications and infrastructure management.',
      tags: ['AWS', 'Docker', 'Kubernetes', 'Microservices'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Security & Testing',
      description: 'Comprehensive security audits and automated testing.',
      tags: ['Jest', 'Cypress', 'Security Audits', 'CI/CD'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 3H4a2 2 0 0 0-2 2v4m18-4h-4a2 2 0 0 0-2 2v4m0 6v4a2 2 0 0 0 2 2h4M8 21H4a2 2 0 0 1-2-2v-4m18 4v-4a2 2 0 0 0-2-2h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Custom Solutions',
      description: 'Tailored software solutions for unique business requirements.',
      tags: ['Custom APIs', 'Integrations', 'Legacy Migration', 'Consulting'],
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description: 'Understanding your requirements and technical specifications.',
    },
    {
      number: '02',
      title: 'Design & Architecture',
      description: 'Creating scalable system architecture and user experience design.',
    },
    {
      number: '03',
      title: 'Development & Testing',
      description: 'Agile development with continuous testing and quality assurance.',
    },
    {
      number: '04',
      title: 'Deployment & Support',
      description: 'Seamless deployment with ongoing maintenance and support.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Dark Background with Code */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Code Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(255,255,255,0.03) 2px,
              rgba(255,255,255,0.03) 4px
            )`,
          }}></div>
        </div>
        
        <div className="max-w-8xl mx-auto px-4 md:px-10 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Software Simplified.<br />
              Solutions Amplified.
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Build scalable web & mobile apps without complexity. Custom development solutions tailored to your business goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                Start Your Project
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

      {/* Our Software Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Software Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From concept to deployment, we deliver end-to-end software solutions that drive business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {softwareServices.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
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

      {/* Our Development Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures quality, efficiency, and on-time delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
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

      {/* Ready to Build Your Solution CTA Section - Blue Background */}
      <section className="py-16 md:py-24 bg-blue-600">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Solution?
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Let's discuss your project requirements and create a custom software solution that drives results.
            </p>
            <Link
              to="/contact"
              className="bg-numero-orange text-gray-900 px-8 py-4 rounded-lg text-base font-semibold hover:bg-orange-500 transition-colors inline-block"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopment;
