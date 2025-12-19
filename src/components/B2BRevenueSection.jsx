import React from 'react';
import { Link } from 'react-router-dom';

const B2BRevenueSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-8xl mx-auto px-4 md:px-10">
        {/* Top CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ready to Build Your Next Software Solution?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Get expert consultation on your web and mobile development needs
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all flex items-center gap-2 mx-auto">
            Book a Strategy Call
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 2 V6 H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M14 2 V6 H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M2 10 H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* B2B Revenue Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <span className="inline-block border-2 border-green-400 text-green-600 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
              B2B REVENUE OPERATIONS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Predictable B2B Revenue Growth
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Full-funnel approach combining advanced martech, precision targeting, and sales acceleration to deliver measurable business outcomes.
            </p>

            {/* KPIs */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">+120%</div>
                <div className="text-sm text-gray-600">Qualified Leads</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">3x</div>
                <div className="text-sm text-gray-600">Pipeline Growth</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">+40%</div>
                <div className="text-sm text-gray-600">SQL → Revenue</div>
              </div>
            </div>

            <Link
              to="/solutions/b2b-marketing"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              Explore B2B Services
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 15 L12 10 L7 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Right Column - Dashboard Placeholder */}
          <div className="relative">
            <div className="bg-gray-900 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-gray-400">Analytics Dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BRevenueSection;


