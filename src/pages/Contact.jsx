import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const offices = [
    {
      country: 'India',
      title: 'India Office',
      address: 'Manyata Tech Park',
      city: 'Bangalore, India',
      mapLink: 'https://maps.google.com/?q=Manyata+Tech+Park+Bangalore',
      icon: '🇮🇳',
      color: 'orange',
    },
    {
      country: 'USA',
      title: 'USA Office',
      address: '#122 3129, 25th St',
      city: 'Columbus, IN-47205, USA',
      mapLink: 'https://maps.google.com/?q=Columbus+IN+47205',
      icon: '🇺🇸',
      color: 'red',
    },
    {
      country: 'Australia',
      title: 'Australia Office',
      address: 'Level 12, 88 Phillip Street',
      city: 'Sydney, NSW 2000, Australia',
      mapLink: 'https://maps.google.com/?q=Sydney+NSW+2000',
      icon: '🇦🇺',
      color: 'blue',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white">
      {/* Top Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-4xl mx-auto">
            <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide mb-6">
              Contact us
            </button>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Seamless Communication, Global Impact
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Get in touch with our team to discuss your digital marketing needs and discover how we can help accelerate your business growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 2 V6 H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M14 2 V6 H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M2 10 H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Book An Appointment
              </button>
              <div className="flex items-center gap-2 text-gray-700">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-medium">Call Now: <a href="tel:+917760974512" className="text-blue-600 hover:underline">+91 776 097 4512</a></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Column Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - Our Global Offices */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Global Offices</h2>
              <div className="space-y-6">
                {offices.map((office, index) => {
                  const getIconBg = (color) => {
                    if (color === 'orange') return 'bg-orange-100';
                    if (color === 'red') return 'bg-red-100';
                    if (color === 'blue') return 'bg-blue-100';
                    return 'bg-gray-100';
                  };
                  return (
                  <div key={index} className="flex items-start gap-4 pb-6 border-b border-gray-200 last:border-0 last:pb-0">
                    <div className={`w-12 h-12 rounded-full ${getIconBg(office.color)} flex items-center justify-center text-2xl flex-shrink-0`}>
                      {office.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{office.title}</h3>
                      <p className="text-gray-600 text-sm mb-1">{office.address}</p>
                      <p className="text-gray-600 text-sm mb-3">{office.city}</p>
                      <a
                        href={office.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 text-sm hover:underline inline-flex items-center gap-1"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        View on Google Maps →
                      </a>
                    </div>
                  </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column - Get In Touch */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              
              {/* Email Support */}
              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Support</h3>
                    <a href="mailto:sales@davinciyatech.com" className="text-blue-600 hover:underline">
                      sales@davinciyatech.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Let's Talk */}
              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-600">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Let's Talk</h3>
                    <a href="tel:+917760974512" className="text-blue-600 hover:underline">
                      +91 776 097 4512
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-600">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Working Hours</h3>
                    <p className="text-gray-600 text-sm">Monday - Friday</p>
                    <p className="text-gray-600 text-sm">09 AM - 09 PM IST</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Follow Our Social Media</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                    <span className="font-bold">f</span>
                  </a>
                  <a href="#" className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white hover:bg-purple-700 transition-colors">
                    <span className="font-bold text-sm">in</span>
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Middle CTA Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Skip the forms - let's talk directly! Book a consultation with our experts and get personalized solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 2 V6 H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M14 2 V6 H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M2 10 H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Book a Free Consultation Call →
              </button>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-sm">Prefer to call directly?</span>
                <div className="flex items-center gap-2 text-green-600 font-medium">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <a href="tel:+917760974512" className="hover:underline">+91 776 097 4512</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Our Global Offices Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Our Global Offices
            </h2>
            <p className="text-lg text-gray-600">
              Connect with us at any of our worldwide locations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((office, index) => {
              const getHeaderColor = (color) => {
                if (color === 'orange') return 'bg-orange-500';
                if (color === 'red') return 'bg-red-500';
                if (color === 'blue') return 'bg-blue-500';
                return 'bg-gray-500';
              };
              return (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className={`h-2 ${getHeaderColor(office.color)}`}></div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-3">{office.title}</h3>
                  <p className="text-gray-600 text-sm mb-1">{office.address}</p>
                  <p className="text-gray-600 text-sm mb-4">{office.city}</p>
                  <a
                    href={office.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm hover:underline inline-flex items-center gap-1"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 via-green-500 via-orange-500 to-purple-600">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Book an appointment with our digital experts and discover how we can transform your business with data-driven marketing strategies.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-colors flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 2 V6 H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M14 2 V6 H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M2 10 H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Book a Free Consultation
              </button>
              <button className="bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 transition-colors flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Call Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
