import React from 'react';
import { Link } from 'react-router-dom';

const SoftwareSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-8xl mx-auto px-4 md:px-10">
        {/* Top CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ready to Scale Your Business?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Get a personalized strategy session with our growth experts
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-900 transition-all flex items-center gap-2 mx-auto">
            Book a Strategy Call
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 2 V6 H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M14 2 V6 H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M2 10 H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M6 14 V18 H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M14 14 V18 H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Software Development Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <span className="inline-block border-2 border-purple-600 text-purple-600 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
              SOFTWARE DEVELOPMENT
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Software Simplified.<br />Solutions Amplified.
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Build scalable web and mobile applications without complexity. Our expert developers deliver cost-effective solutions tailored to your business goals.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-sm text-gray-600">Apps Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-2">99%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>

            <Link
              to="/services/web-development"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all"
            >
              Explore Software Services
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 15 L12 10 L7 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Right Column - Image Placeholder */}
          <div className="relative">
            <div className="bg-gray-800 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">💻</div>
                <p className="text-gray-400">Coding Workstation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareSection;


