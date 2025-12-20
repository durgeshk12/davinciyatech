import React from 'react';
import { Link } from 'react-router-dom';

const InfluencerMarketing = () => {
  const influencerServices = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Influencer Discovery & Vetting',
      description: 'We identify and vet the perfect influencers for your brand using advanced analytics and manual screening. Our comprehensive approach ensures authentic partnerships that align with your values.',
      items: ['Audience Analysis', 'Authenticity Verification', 'Performance Metrics', 'Brand Alignment Check'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Campaign Strategy & Planning',
      description: 'Strategic campaign planning that maximizes impact and ROI. We develop comprehensive influencer marketing strategies tailored to your specific goals and target audience.',
      items: ['Campaign Objectives', 'Content Guidelines', 'Timeline Planning', 'Budget Optimization'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Relationship Management',
      description: 'End-to-end management of influencer relationships, from initial outreach to campaign completion. We handle negotiations, contracts, and ongoing communication.',
      items: ['Outreach & Negotiation', 'Contract Management', 'Communication Hub', 'Relationship Building'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Performance Tracking & ROI',
      description: 'Comprehensive tracking and analysis of campaign performance with detailed ROI reporting. We provide actionable insights to optimize future campaigns.',
      items: ['Real-time Analytics', 'ROI Measurement', 'Engagement Tracking', 'Performance Reports'],
    },
  ];

  const influencerTiers = [
    {
      tier: 'Nano Influencers',
      range: '1K - 10K',
      description: 'High engagement rates with niche, loyal audiences',
      characteristics: ['Authentic connections', 'Cost-effective', 'High trust factor'],
    },
    {
      tier: 'Micro Influencers',
      range: '10K - 100K',
      description: 'Strong community influence with targeted reach',
      characteristics: ['Quality engagement', 'Niche expertise', 'Better ROI'],
    },
    {
      tier: 'Macro Influencers',
      range: '100K - 1M',
      description: 'Broad reach with professional content creation',
      characteristics: ['Wide exposure', 'Professional quality', 'Brand awareness'],
    },
    {
      tier: 'Mega Influencers',
      range: '1M+',
      description: 'Celebrity status with massive audience reach',
      characteristics: ['Maximum reach', 'Brand prestige', 'Viral potential'],
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Strategy & Goals',
      description: 'Understanding your brand objectives and defining clear campaign goals and KPIs for success.',
    },
    {
      number: '02',
      title: 'Influencer Selection',
      description: 'Identifying and vetting the perfect influencers who align with your brand values and target audience.',
    },
    {
      number: '03',
      title: 'Campaign Execution',
      description: 'Managing the entire campaign from content creation to publication and engagement monitoring.',
    },
    {
      number: '04',
      title: 'Analysis & Optimization',
      description: 'Measuring results, analyzing performance, and optimizing strategies for maximum impact.',
    },
  ];

  const benefits = [
    'Authentic Brand Advocacy',
    'Increased Brand Awareness',
    'Higher Engagement Rates',
    'Improved Trust & Credibility',
    'Cost-Effective Marketing',
    'Targeted Audience Reach',
    'Content Creation at Scale',
    'SEO & Social Signals',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-numero-orange text-gray-900 text-xs font-semibold px-4 py-2 rounded-md mb-6">
              Influencer Marketing
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Harness the Power of <span className="text-green-500">Authentic Influence</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Connect with your target audience through trusted voices. Our influencer marketing strategies create authentic partnerships that drive engagement, build trust, and deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-numero-teal text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-teal-600 transition-colors flex items-center gap-2"
              >
                Launch Your Campaign
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 15 L11 10 L6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                to="/contact"
                className="bg-white border-2 border-numero-teal text-gray-800 px-8 py-4 rounded-lg text-base font-semibold hover:bg-gray-50 transition-colors"
              >
                Get Strategy Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Influencer Marketing Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Influencer Marketing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              End-to-end influencer marketing solutions that connect your brand with the right voices for maximum impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {influencerServices.map((service, index) => (
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
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-numero-teal flex-shrink-0 mt-0.5"
                      >
                        <path
                          d="M16.667 5L7.5 14.167 3.333 10"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Influencer Tiers We Work With Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Influencer Tiers We Work With
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From nano to mega influencers, we match you with the perfect voices for your brand and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {influencerTiers.map((tier, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {tier.tier}
                </h3>
                <div className="text-numero-teal font-semibold text-sm mb-3">
                  {tier.range} Followers
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {tier.description}
                </p>
                <ul className="space-y-2">
                  {tier.characteristics.map((char, charIndex) => (
                    <li key={charIndex} className="flex items-start gap-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-numero-teal flex-shrink-0 mt-1"
                      >
                        <path
                          d="M13.333 4L6 11.333 2.667 8"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm">{char}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Campaign Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Campaign Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach that ensures successful influencer partnerships and measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-6xl font-bold text-gray-300 mb-4 leading-none">
                  {step.number}
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

      {/* Why Influencer Marketing Works Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Influencer Marketing Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Leverage the trust and authenticity that influencers have built with their audiences.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 flex items-start gap-3"
              >
                <div className="text-numero-teal flex-shrink-0 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 2v2M12 20v2M2 12h2M20 12h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-gray-900">
                  {benefit}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Partner with Influencers CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Partner with Influencers?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Let's connect your brand with the perfect influencers to amplify your message and drive authentic engagement.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-numero-teal text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-teal-600 transition-colors flex items-center gap-2"
              >
                Start Your Influencer Campaign
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 15 L11 10 L6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                to="/services"
                className="bg-white border-2 border-gray-300 text-gray-800 px-8 py-4 rounded-lg text-base font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors"
              >
                Explore Other Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfluencerMarketing;
