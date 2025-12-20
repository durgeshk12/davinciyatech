import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const servicesItems = [
    { name: 'Branding Services', path: '/services/branding-services' },
    { name: 'Content Writing', path: '/services/content-writing' },
    { name: 'Conversion Rate Optimization', path: '/services/conversion-rate-optimization' },
    { name: 'Design Services', path: '/services/design-services' },
    { name: 'Digital Marketing Strategy', path: '/services/digital-marketing-strategy' },
    { name: 'Fractional CMO', path: '/services/fractional-cmo' },
    { name: 'Influencer Marketing', path: '/services/influencer-marketing' },
    { name: 'Lead Generation', path: '/services/lead-generation' },
    { name: 'Logo Design', path: '/services/logo-design' },
    { name: 'Performance Marketing', path: '/services/performance-marketing' },
    { name: 'Reputation Management', path: '/services/reputation-management' },
    { name: 'SEO Services', path: '/services/seo-services' },
    { name: 'Social Media Marketing', path: '/services/social-media-marketing' },
    { name: 'Web Development', path: '/services/web-development' },
  ];

  const solutionsItems = [
    { name: 'Software Development', path: '/solutions/software-development' },
    { name: 'B2B Marketing', path: '/solutions/b2b-marketing' },
    { name: 'B2C Marketing', path: '/solutions/b2c-marketing' },
    { name: 'Fractional CMO', path: '/solutions/fractional-cmo' },
    { name: 'Real Estate Marketing', path: '/solutions/real-estate-marketing' },
    { name: 'CRM Solutions', path: '/solutions/crm-solutions' },
  ];

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const DropdownMenu = ({ title, items, isOpen, dropdownName, onMouseEnter, onMouseLeave }) => {
    if (!isOpen) return null;
    
    return (
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="absolute top-full left-0 mt-1 bg-white rounded-lg min-w-[280px] py-4 z-50 shadow-2xl border border-gray-100"
      >
        <div className="px-4 py-2">
          <h3 className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-3">{title}</h3>
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li
                key={item.path}
                className="transform transition-all duration-200 hover:translate-x-1"
                style={{
                  animationDelay: isOpen ? `${index * 20}ms` : '0ms',
                }}
              >
                <Link
                  to={item.path}
                  className="block text-sm text-gray-800 hover:text-numero-teal transition-colors py-1"
                  onClick={() => {
                    setActiveDropdown(null);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <>
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="h-0.5 bg-numero-teal w-full"></div>
        <div className="max-w-8xl mx-auto px-4 md:px-10 flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 5 L35 20 L20 35 L5 20 Z" stroke="#14B8A6" strokeWidth="2" fill="none"/>
                <path d="M20 8 L30 20 L20 32 L10 20 Z" stroke="#14B8A6" strokeWidth="2" fill="none"/>
                <path d="M20 11 L25 20 L20 29 L15 20 Z" stroke="#14B8A6" strokeWidth="2" fill="none"/>
                <rect x="17" y="17" width="6" height="6" fill="#FF8C42"/>
              </svg>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-gray-900 tracking-tight">DAVINCIYATECH</span>
              <span className="bg-numero-orange text-gray-900 text-xs font-semibold px-2.5 py-1 rounded-md tracking-wide">
                MARKETING AGENCY
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center" ref={dropdownRef}>
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`text-sm font-medium flex items-center gap-1.5 transition-all duration-200 ${
                  activeDropdown === 'services'
                    ? 'text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Services
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`}
                >
                  <path
                    d="M3 4.5 L6 7.5 L9 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <DropdownMenu 
                title="DIGITAL SERVICES" 
                items={servicesItems} 
                isOpen={activeDropdown === 'services'}
                dropdownName="services"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              />
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`text-sm font-medium flex items-center gap-1.5 transition-all duration-200 ${
                  activeDropdown === 'solutions'
                    ? 'text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Solutions
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`}
                >
                  <path
                    d="M3 4.5 L6 7.5 L9 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <DropdownMenu 
                title="BUSINESS SOLUTIONS" 
                items={solutionsItems} 
                isOpen={activeDropdown === 'solutions'}
                dropdownName="solutions"
                onMouseEnter={() => handleMouseEnter('solutions')}
                onMouseLeave={handleMouseLeave}
              />
            </div>

            <Link to="/about/about-us" className="text-gray-600 text-sm font-medium hover:text-gray-900 transition-colors">
              About Us
            </Link>

            <Link to="/product-suite" className="text-gray-600 text-sm font-medium hover:text-gray-900 transition-colors">
              Product Suite
            </Link>
            <Link to="/blog" className="text-gray-600 text-sm font-medium hover:text-gray-900 transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-600 text-sm font-medium hover:text-gray-900 transition-colors">
              Contact Us
            </Link>
          </nav>
          
          <div className="hidden lg:block">
            <button className="bg-numero-orange text-gray-800 border-none py-3 px-6 rounded-lg text-sm font-medium cursor-pointer flex items-center gap-2 hover:bg-[#ff7a2e] hover:-translate-y-0.5 active:translate-y-0 transition-all">
              Get Started
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12 L10 8 L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6 L6 18 M6 6 L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12 H21 M3 6 H21 M3 18 H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu - Slides from left to right */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsMobileMenuOpen(false)}></div>
        <div className="absolute left-0 top-0 bottom-0 w-80 bg-white shadow-xl overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <Link to="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="flex items-center justify-center">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 5 L35 20 L20 35 L5 20 Z" stroke="#14B8A6" strokeWidth="2" fill="none"/>
                    <path d="M20 8 L30 20 L20 32 L10 20 Z" stroke="#14B8A6" strokeWidth="2" fill="none"/>
                    <path d="M20 11 L25 20 L20 29 L15 20 Z" stroke="#14B8A6" strokeWidth="2" fill="none"/>
                    <rect x="17" y="17" width="6" height="6" fill="#FF8C42"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-lg font-bold text-gray-900 tracking-tight">DAVINCIYATECH</span>
                  <span className="bg-numero-orange text-gray-900 text-xs font-semibold px-2 py-0.5 rounded-md tracking-wide w-fit">
                    MARKETING AGENCY
                  </span>
                </div>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-600"
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6 L6 18 M6 6 L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            <nav className="space-y-4">
              <MobileDropdown title="Services" items={servicesItems} />
              <MobileDropdown title="Solutions" items={solutionsItems} />
              
              <Link
                to="/about/about-us"
                className="block text-gray-600 py-2 hover:text-numero-teal transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              
              <Link
                to="/product-suite"
                className="block text-gray-600 py-2 hover:text-numero-teal transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Product Suite
              </Link>
              <Link
                to="/blog"
                className="block text-gray-600 py-2 hover:text-numero-teal transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="block text-gray-600 py-2 hover:text-numero-teal transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              
              <button className="w-full bg-numero-orange text-gray-800 py-3 px-6 rounded-lg text-sm font-medium mt-4 flex items-center justify-center gap-2 hover:bg-[#ff7a2e] transition-colors">
                Get Started
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12 L10 8 L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

const MobileDropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-gray-600 py-2 hover:text-numero-teal transition-colors"
      >
        <span>{title}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        >
          <path
            d="M3 4.5 L6 7.5 L9 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="pl-4 mt-2 space-y-2">
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block text-sm text-gray-500 py-1 hover:text-numero-teal transition-colors"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
