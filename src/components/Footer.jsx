import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const services = [
    'Branding Services',
    'Web Development',
    'SEO Services',
    'Social Media Marketing',
    'Logo Design',
  ];

  const solutions = [
    'Software Development',
    'B2B Operations',
    'Real Estate Marketing',
    'CRM Solutions',
    'Product Suite',
    'About Us',
  ];

  const socialIcons = [
    { name: 'Facebook', icon: 'f', path: '#' },
    { name: 'Twitter', icon: '🐦', path: '#' },
    { name: 'Instagram', icon: '📷', path: '#' },
    { name: 'LinkedIn', icon: 'in', path: '#' },
    { name: 'Chat', icon: '💬', path: '#' },
    { name: 'YouTube', icon: '▶', path: '#' },
  ];

  return (
    <footer className="bg-white border-t-2 border-numero-teal">
      {/* Main Footer */}
      <div className="max-w-8xl mx-auto px-4 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Information */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 5 L35 20 L20 35 L5 20 Z" stroke="#14B8A6" strokeWidth="2" fill="none"/>
                  <path d="M20 8 L30 20 L20 32 L10 20 Z" stroke="#14B8A6" strokeWidth="2" fill="none"/>
                  <path d="M20 11 L25 20 L20 29 L15 20 Z" stroke="#14B8A6" strokeWidth="2" fill="none"/>
                  <rect x="17" y="17" width="6" height="6" fill="#FF8C42"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-numero-teal tracking-wide">DAVINCIYATECH</span>
            </Link>
            <p className="text-gray-700 text-sm mb-6 leading-relaxed">
              Your growth partner for digital transformation, marketing excellence, and business success.
            </p>
            <div className="flex items-center gap-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.path}
                  className="text-gray-600 hover:text-numero-teal transition-colors"
                  aria-label={social.name}
                >
                  {social.name === 'Facebook' ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : social.name === 'Twitter' ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : social.name === 'Instagram' ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  ) : social.name === 'LinkedIn' ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  ) : social.name === 'Chat' ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : social.name === 'YouTube' ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48" fill="currentColor"/>
                    </svg>
                  ) : (
                    <span className="text-lg">{social.icon}</span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2 mb-4">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-700 text-sm hover:text-numero-teal transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/services"
              className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors inline-flex items-center gap-1"
            >
              View All Services
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12 L10 8 L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Solutions</h3>
            <ul className="space-y-2">
              {solutions.map((solution, index) => (
                <li key={index}>
                  <Link
                    to={`/solutions/${solution.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-700 text-sm hover:text-numero-teal transition-colors"
                  >
                    {solution}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-600 mt-0.5 flex-shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <a href="mailto:sales@davinciyatech.com" className="text-gray-700 text-sm hover:text-numero-teal transition-colors">
                  sales@davinciyatech.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-600 mt-0.5 flex-shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-gray-700 text-sm">
                  Phone Number: <a href="tel:+917760974512" className="hover:text-numero-teal transition-colors">+91-7760974512</a>
                </span>
              </div>
              <div className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-600 mt-0.5 flex-shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <a
                  href="https://maps.google.com/?q=Bangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-sm hover:text-blue-700 transition-colors"
                >
                  View Bangalore Office on Google Maps
                </a>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1 text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors mt-6"
            >
              Get In Touch
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12 L10 8 L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-8xl mx-auto px-4 md:px-10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-700 text-sm">
              © 2014 Davinciyatech. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy-policy" className="text-gray-700 text-sm hover:text-numero-teal transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-700 text-sm hover:text-numero-teal transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookie" className="text-gray-700 text-sm hover:text-numero-teal transition-colors">
                Cookie
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <button
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg z-50 transition-all hover:scale-110"
        aria-label="Chat with us"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="white"/>
        </svg>
      </button>
    </footer>
  );
};

export default Footer;


