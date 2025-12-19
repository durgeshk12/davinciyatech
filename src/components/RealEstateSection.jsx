import React from 'react';
import { Link } from 'react-router-dom';

const RealEstateSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-8xl mx-auto px-4 md:px-10">
        {/* Top Section with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Image Placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🏢</div>
                <p className="text-white/80">Luxury Property</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="inline-block bg-numero-orange text-gray-900 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
              LUXURY REAL ESTATE MARKETING
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Premium Property Sales Accelerated
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              End-to-end real estate marketing from performance ads to concierge site visits, specializing in luxury properties and NRI targeting across global markets.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-4xl font-bold text-numero-orange mb-2">8x</div>
                <div className="text-sm text-gray-600">ROI in 90 days</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-numero-orange mb-2">50+</div>
                <div className="text-sm text-gray-600">Site Visits Booked</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-numero-orange mb-2">12</div>
                <div className="text-sm text-gray-600">Villas Sold</div>
              </div>
            </div>

            <Link
              to="/solutions/real-estate-marketing"
              className="inline-flex items-center gap-2 bg-numero-orange text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#ff7a2e] transition-colors"
            >
              Explore Real Estate Services
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 15 L12 10 L7 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-gradient-to-b from-white to-yellow-50 rounded-lg p-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Transform Your Real Estate Marketing
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Discover how we can accelerate your property sales with proven strategies
          </p>
          <button className="bg-numero-orange text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#ff7a2e] transition-colors flex items-center gap-2 mx-auto">
            Book a Strategy Call
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 2 V6 H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M14 2 V6 H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default RealEstateSection;


