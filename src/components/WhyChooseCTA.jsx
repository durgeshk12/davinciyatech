import React from 'react';
import { Link } from 'react-router-dom';

const WhyChooseCTA = () => {
  const metrics = [
    {
      value: '100+',
      label: 'Projects Completed',
    },
    {
      value: '98%',
      label: 'Client Satisfaction',
    },
    {
      value: '24/7',
      label: 'Support Available',
    },
  ];

  return (
    <div className="w-full">
      {/* Top Section - Blue Background */}
      <section className="bg-numero-teal py-16 md:py-20">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12">
              Why Choose Davinciyatech?
            </h2>
            
            {/* Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                    {metric.value}
                  </div>
                  <div className="text-lg md:text-xl text-white/90 font-medium">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section - White Background CTA */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Let's discuss your digital marketing needs and create a customized strategy that drives real results for your business
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-numero-teal text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-teal-600 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/blog"
                className="bg-white border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg text-base font-semibold hover:bg-gray-50 transition-colors"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseCTA;

