import React from 'react';
import { Link } from 'react-router-dom';

const HeroCTA = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-400 via-blue-600 to-blue-800 py-20 md:py-32 overflow-hidden">
      {/* Background Pattern (optional decorative elements) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-8xl mx-auto px-4 md:px-10 text-center">
        {/* Top CTA Button */}
        <div className="mb-8">
          <button className="bg-numero-orange text-white px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-[#ff7a2e] transition-all duration-300 hover:scale-105 shadow-lg">
            GET STARTED TODAY
          </button>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          From Leads to Loyalty,<br />
          Davinciyatech Delivers Revenue
        </h1>

        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
          Whether you're a real estate developer or a B2B enterprise, we build the systems to scale your growth predictably.
        </p>

        {/* Bottom CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          {/* Left Button - Primary */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-numero-orange text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-[#ff7a2e] transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Book a Free Consultation
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 15 L12 10 L7 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          {/* Right Button - Secondary */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            Talk to Our Experts
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 7l8 5 8-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroCTA;

