import React from 'react';
import { Link } from 'react-router-dom';

const CRMSolutions = () => {
  const statistics = [
    {
      value: '75%',
      label: 'Faster Lead Response Time',
    },
    {
      value: '40%',
      label: 'Increase in Conversion Rates',
    },
    {
      value: '60%',
      label: 'Reduction in Manual Tasks',
    },
    {
      value: '24/7',
      label: 'AI Agent Availability',
    },
  ];

  const crmFeatures = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Lead Management',
      items: ['Contact Management', 'Lead Scoring', 'Pipeline Tracking', 'Activity History'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Automation Workflows',
      items: ['Email Automation', 'Task Assignment', 'Follow-up Reminders', 'Deal Updates'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Analytics & Reporting',
      items: ['Sales Reports', 'Performance Metrics', 'Conversion Analysis', 'ROI Tracking'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Team Collaboration',
      items: ['Team Management', 'Communication Tools'],
    },
  ];

  const crmPlatforms = [
    {
      name: 'Ginee CRM',
      description: 'AI-powered CRM with intelligent automation and 24/7 AI agents',
      features: ['AI Sales Agents', '24/7 Customer Support', 'Predictive Analytics', 'Process Automation'],
      buttonColor: 'bg-blue-600',
      buttonText: 'Learn More',
    },
    {
      name: 'HubSpot',
      description: 'All-in-one inbound marketing, sales, and service platform',
      features: ['Marketing Automation', 'Content Management', 'Email Marketing', 'Sales CRM'],
      buttonColor: 'bg-numero-orange',
      buttonText: 'Learn More',
    },
    {
      name: 'Zoho CRM',
      description: 'Comprehensive business suite with integrated CRM solution',
      features: ['Multi-channel Support', 'Workflow Automation', 'Advanced Analytics', 'Mobile CRM'],
      buttonColor: 'bg-blue-600',
      buttonText: 'Learn More',
    },
    {
      name: 'Salesforce',
      description: 'World\'s leading cloud-based CRM platform for enterprises',
      features: ['Custom Applications', 'Automation', 'AppExchange', 'Customer Service'],
      buttonColor: 'bg-red-600',
      buttonText: 'Learn More',
    },
  ];

  const aiAgentCapabilities = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 11l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'AI Sales Agent',
      description: 'Intelligent sales assistant for lead qualification and follow-up',
      functions: ['Lead Qualification', 'Automated Follow-ups', 'Meeting Scheduling', 'Sales Predictions'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'AI Customer Support',
      description: '24/7 intelligent customer service and support',
      functions: ['Instant Responses', 'Query Resolution', 'Ticket Management', 'Escalation Handling'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Predictive Analytics',
      description: 'AI-powered insights for better decision making',
      functions: ['Sales Forecasting', 'Customer Behavior Analysis', 'Churn Prediction', 'Revenue Optimization'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Process Automation',
      description: 'Intelligent automation of routine business processes',
      functions: ['Data Entry', 'Report Generation', 'Email Management', 'Workflow Optimization'],
    },
  ];

  const aiAgenticFeatures = [
    {
      title: 'Intelligent Lead Qualification',
      description: 'AI agents automatically qualify and score leads',
    },
    {
      title: '24/7 Customer Support',
      description: 'Always-on AI support for customer queries and issues',
    },
    {
      title: 'Predictive Analytics',
      description: 'AI-powered forecasting and business insights',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80)',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/60"></div>
        
        <div className="max-w-8xl mx-auto px-4 md:px-10 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ginee CRM & AI Agentic Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Revolutionary CRM platform powered by AI agents that automate sales, marketing, and customer service operations.
            </p>
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Bar - Light Blue Background */}
      <section className="py-12 bg-blue-100">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">
                  {stat.value}
                </div>
                <div className="text-lg text-blue-800 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ginee CRM Platform Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ginee CRM Platform
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Complete customer relationship management platform designed for modern businesses. Track leads, manage sales pipelines, and grow your revenue with intelligent automation.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-blue-600 flex-shrink-0 mt-0.5"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-gray-700 text-lg">360° Customer View</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-blue-600 flex-shrink-0 mt-0.5"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-gray-700 text-lg">Sales Pipeline Management</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-blue-600 flex-shrink-0 mt-0.5"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-gray-700 text-lg">Advanced Analytics</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors inline-block"
              >
                Explore CRM Features
              </Link>
            </div>
            <div className="bg-gray-900 rounded-lg p-8 shadow-2xl">
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-blue-600 h-20 rounded"></div>
                  <div className="bg-green-600 h-20 rounded"></div>
                  <div className="bg-purple-600 h-20 rounded"></div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-700 h-4 rounded w-3/4"></div>
                  <div className="bg-gray-700 h-4 rounded w-1/2"></div>
                  <div className="bg-gray-700 h-4 rounded w-5/6"></div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-blue-500/20 h-24 rounded border border-blue-500/30"></div>
                  <div className="bg-green-500/20 h-24 rounded border border-green-500/30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRM Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              CRM Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage customer relationships and drive sales growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {crmFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {feature.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="bg-numero-orange text-gray-900 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leading CRM Platforms Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leading CRM Platforms
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Compare Ginee CRM with industry-leading platforms like HubSpot, Zoho, and Salesforce
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {crmPlatforms.map((platform, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {platform.name}
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {platform.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {platform.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-blue-600 flex-shrink-0 mt-1"
                      >
                        <path
                          d="M13.333 4L6 11.333 2.667 8"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`${platform.buttonColor} text-white px-6 py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity inline-block w-full text-center`}
                >
                  {platform.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agentic Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-900 rounded-lg p-8 shadow-2xl">
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-32 h-32 bg-blue-600/20 rounded-full flex items-center justify-center">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-400">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-blue-500/20 h-3 rounded w-full"></div>
                  <div className="bg-green-500/20 h-3 rounded w-3/4"></div>
                  <div className="bg-purple-500/20 h-3 rounded w-5/6"></div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                AI Agentic Services
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Intelligent AI agents that work 24/7 to handle sales, marketing, and customer service tasks automatically. Scale your business operations without scaling your team.
              </p>
              <ul className="space-y-4 mb-8">
                {aiAgenticFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-blue-600 flex-shrink-0 mt-0.5"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors inline-block"
              >
                Try AI Agents
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agent Capabilities Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Agent Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced AI agents that handle complex business processes autonomously
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {aiAgentCapabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-blue-600 mb-4">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {capability.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {capability.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {capability.functions.map((func, funcIndex) => (
                    <span
                      key={funcIndex}
                      className="bg-numero-orange text-gray-900 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {func}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Transform Your CRM CTA Section */}
      <section className="py-16 md:py-24 bg-blue-600">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your CRM?
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Experience the power of AI-driven CRM solutions that automate your sales, marketing, and customer service operations.
            </p>
            <Link
              to="/contact"
              className="bg-numero-orange text-gray-900 px-8 py-4 rounded-lg text-base font-semibold hover:bg-orange-500 transition-colors inline-block"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CRMSolutions;
