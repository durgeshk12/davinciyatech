import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const integratedSolutions = [
    {
      icon: '🌐',
      title: 'Custom Software Solutions',
      description: 'Building scalable, user-friendly platforms tailored to your business needs and growth objectives.',
    },
    {
      icon: '📈',
      title: 'Performance-Driven Marketing',
      description: 'Blending creativity with data analytics to drive measurable ROI and sustainable business growth.',
    },
    {
      icon: '💬',
      title: 'Intelligent CRM Systems',
      description: 'Streamlining customer journeys, automating engagement, and boosting retention rates effectively.',
    },
    {
      icon: '⭐',
      title: 'Agentic AI Tools',
      description: 'Cutting-edge AI agents that automate workflows, qualify leads, and scale your business 24/7.',
    },
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Results-Driven',
      description: 'We focus on measurable outcomes that drive real business growth and ROI for our clients.',
    },
    {
      icon: '❤️',
      title: 'Client-Centric',
      description: 'Your success is our success. We build long-term partnerships based on trust and results.',
    },
    {
      icon: '💡',
      title: 'Innovation First',
      description: 'We constantly evolve our methods and embrace new technologies to stay ahead.',
    },
    {
      icon: '🤝',
      title: 'Collaborative Spirit',
      description: 'We work as an extension of your team, fostering open communication and transparency.',
    },
  ];

  const leadership = [
    {
      name: 'Abdul Salim',
      title: 'Founder & CEO',
      description: 'Visionary leader with 25+ years in digital transformation and business strategy. IIMB Alumni.',
      image: '👨‍💼',
    },
    {
      name: 'Venu',
      title: 'CMO',
      description: 'Strategic marketing leader with 26+ years of experience in brand development and digital transformation. IIM Alumni.',
      image: '👨‍💼',
    },
    {
      name: 'Amir Syed',
      title: 'Head of Operations',
      description: 'Operations specialist with 10+ years ensuring seamless project delivery and exceptional client satisfaction.',
      image: '👨‍💼',
    },
    {
      name: 'Priya',
      title: 'Project Manager',
      description: 'Dedicated project management expert with 8+ years coordinating cross-functional teams and delivering successful outcomes.',
      image: '👩‍💼',
    },
  ];

  const journey = [
    { year: '2014', title: 'Company Founded', description: 'Started as a one-man operation with a vision to help SMBs' },
    { year: '2016', title: 'Team Expansion', description: 'Grew to 10+ specialists across multiple disciplines' },
    { year: '2018', title: 'Global Reach', description: 'Expanded operations to serve clients across 3 continents' },
    { year: '2020', title: 'AI Integration', description: 'Launched AI-powered marketing solutions and CRM platform' },
  ];

  const solutionsWork = [
    {
      icon: '🔄',
      title: 'Unified Customer Journey',
      description: 'Custom software feeds data into CRM systems, while marketing campaigns drive traffic to optimized landing pages, creating a seamless customer experience.',
    },
    {
      icon: '🎯',
      title: 'Data-Driven Optimization',
      description: 'Real-time analytics from all platforms inform marketing strategies, software improvements, and CRM automation rules for continuous optimization.',
    },
    {
      icon: '⚙️',
      title: 'AI-Powered Automation',
      description: 'Our Ginee CRM integrates with marketing tools and custom software to automate lead nurturing, follow-ups, and customer engagement 24/7.',
    },
  ];

  const technologies = [
    { icon: '🛒', title: 'Marketing Tech', tech: 'Google Ads, Meta, LinkedIn, HubSpot, Mailchimp' },
    { icon: '⭐', title: 'Development', tech: 'React, Node.js, Python, AWS, Azure' },
    { icon: '👥', title: 'CRM & Analytics', tech: 'Salesforce, Ginee CRM, Google Analytics, Mixpanel' },
    { icon: '🤖', title: 'AI & Automation', tech: 'OpenAI, Custom AI Agents, Zapier, n8n' },
  ];

  const bottomCards = [
    {
      icon: '📊',
      title: 'Sales Excellence',
      description: 'We are proud to offer outstanding digital marketing services. Our friendly representatives will guide you through the process of becoming a new customer. You will see a rise in your company\'s revenues with our help.',
    },
    {
      icon: '💬',
      title: 'Customer Service',
      description: 'Do you want to discover how well your digital marketing effort is performing? Contact one of our knowledgeable and courteous customer service representatives who will answer all your inquiries with excellent professionalism.',
    },
    {
      icon: '⚙️',
      title: 'Tech Team',
      description: 'Some of the most competent digital marketing professionals work here at Davinciyatech. As a result, our clients rank well in Google search results for terms that lead to increased revenue and business growth.',
    },
  ];

  const roiMetrics = [
    {
      border: 'green',
      value: '400%',
      title: 'Average ROI Increase',
      description: 'Clients typically see 4x return on their marketing investment within 12 months through our integrated approach.',
    },
    {
      border: 'blue',
      value: '65%',
      title: 'Cost Reduction',
      description: 'Integration eliminates redundant tools and processes, reducing operational costs while improving efficiency.',
    },
    {
      border: 'purple',
      value: '300%',
      title: 'Lead Quality Improvement',
      description: 'AI-powered qualification and nurturing delivers higher-quality leads that convert at 3x the rate.',
    },
  ];

  const achievements = [
    { value: '100+', label: 'Happy Clients' },
    { value: '10+', label: 'Years Experience' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '15+', label: 'Awards Won' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-numero-teal mb-6">
                Welcome to Davinciyatech
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                The Growth Ecosystem for SMEs
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                We believe that digital transformation should not be a privilege reserved for large enterprises. It should be accessible, affordable, and impactful for every small and medium-sized business.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are more than just a marketing agency. Davinciyatech is an integrated ecosystem that transforms how businesses grow.
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-6xl mb-4">👥</div>
                <p>Team Collaboration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Solutions */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Integrated Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Four powerful pillars working together to accelerate your business growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {integratedSolutions.map((solution, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission and Why Choose */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                To help SMEs scale faster, smarter, and more efficiently by uniting technology, creativity, and intelligence under one roof. With 15+ years of experience, we bring the perfect mix of strategy, execution, and innovation to transform how businesses attract, engage, and retain customers.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From local startups to global SMEs, we enable growth that is sustainable and future-ready.
              </p>
            </div>

            {/* Why Choose */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Davinciyatech?</h2>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 flex-shrink-0 mt-0.5">
                    <path d="M20 6 L9 17 L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-gray-700">One-stop solution for Software + Marketing + CRM + AI</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 flex-shrink-0 mt-0.5">
                    <path d="M20 6 L9 17 L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-gray-700">Proven track record in real estate, IT services, SaaS, and global SMEs</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 flex-shrink-0 mt-0.5">
                    <path d="M20 6 L9 17 L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-gray-700">Focused on ROI, efficiency, and business automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 flex-shrink-0 mt-0.5">
                    <path d="M20 6 L9 17 L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-gray-700">Dedicated team passionate about simplifying complexity</span>
                </li>
              </ul>
              <div className="bg-purple-100 border-l-4 border-purple-500 p-4 rounded">
                <p className="text-gray-800 italic">
                  "We don't just offer services - we build ecosystems that empower businesses to scale and simplify."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our History</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Davinciyatech has grown from a one-man operation into a full-fledged creative and digital marketing firm, with a staff of experts in internet development, digital marketing, and business strategy.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Founded in 2014 by Abdul Salim, an IIM Bangalore alumnus with 25+ years of experience in digital transformation, Davinciyatech was created with a clear goal: to enhance online visibility for small and medium-sized businesses and help them compete effectively in the digital landscape.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that creating a positive work atmosphere for our staff leads to happy customers and lasting partnerships. This philosophy has been the cornerstone of our growth and success.
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-6xl mb-4">📋</div>
                <p>Team Planning Session</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Cards */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Provide economical & measurable digital marketing solutions to small medium companies across the globe, empowering them to compete effectively in the digital landscape.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-600">
                  <path d="M12 2 L2 7 L12 12 L22 7 Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17 L12 22 L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12 L12 17 L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Vision</h3>
              <p className="text-sm text-gray-500 mb-4 italic">"Delivering Measurable Outcomes"</p>
              <p className="text-gray-600 leading-relaxed">
                Our vision is centered around delivering measurable outcomes for our clients, helping them achieve sustainable growth and digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600">Unleashing digital potential since 2014</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
              <div className="space-y-8">
                {journey.map((item, index) => (
                  <div key={index} className="relative flex items-start gap-6">
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-numero-teal rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {item.year}
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-lg text-gray-600">The passionate individuals driving Davinciyatech's success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((member, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  {member.image}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-numero-teal font-semibold mb-3">{member.title}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Ecosystem */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
              INTEGRATION ECOSYSTEM
            </button>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Seamless Integration, Maximum Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our integrated approach connects every aspect of your digital presence, creating a unified ecosystem that amplifies results across all touchpoints.
            </p>
          </div>
        </div>
      </section>

      {/* How Solutions Work Together */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">How Our Solutions Work Together</h2>
              <div className="space-y-6">
                {solutionsWork.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-6xl mb-4">💻</div>
                <p>Analytics Dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{tech.icon}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{tech.title}</h3>
                <p className="text-sm text-gray-600">{tech.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Cards */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bottomCards.map((card, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow">
                <div className="text-5xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI & Results */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <button className="border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
              ROI & RESULTS
            </button>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Measurable ROI That Transforms Businesses
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our integrated approach doesn't just improve metrics—it transforms business outcomes with measurable, sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {roiMetrics.map((metric, index) => {
              const getBorderColor = (color) => {
                if (color === 'green') return 'border-green-500';
                if (color === 'blue') return 'border-blue-500';
                if (color === 'purple') return 'border-purple-500';
                return 'border-gray-300';
              };
              return (
                <div key={index} className={`bg-white border-4 ${getBorderColor(metric.border)} rounded-lg p-6`}>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{metric.value}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{metric.title}</h3>
                  <p className="text-gray-600">{metric.description}</p>
                </div>
              );
            })}
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">How We Achieve These Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Benefits</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 flex-shrink-0 mt-0.5">
                      <path d="M20 6 L9 17 L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-gray-700">Eliminated Tool Redundancy: Single integrated platform reduces software costs by 40-60%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 flex-shrink-0 mt-0.5">
                      <path d="M20 6 L9 17 L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-gray-700">Automated Lead Nurturing: 24/7 AI engagement increases conversion rates by 150%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 flex-shrink-0 mt-0.5">
                      <path d="M20 6 L9 17 L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-gray-700">Data-Driven Optimization: Real-time insights improve campaign performance continuously</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Methodology</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 flex-shrink-0 mt-0.5">
                      <path d="M20 6 L9 17 L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-gray-700">Faster Implementation: Integrated solutions deploy 70% faster than separate tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 flex-shrink-0 mt-0.5">
                      <path d="M20 6 L9 17 L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-gray-700">Scalable Architecture: Solutions grow with your business without additional complexity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500 flex-shrink-0 mt-0.5">
                      <path d="M20 6 L9 17 L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-gray-700">Predictable Growth: Systematic approach ensures consistent month-over-month growth</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blue Banner with Stats */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Building Success Through Transformative Solutions
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our comprehensive range of digital marketing solutions helps companies reach their full potential with tailored, cost-effective strategies that drive measurable results.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2">{achievement.value}</div>
                <div className="text-lg text-white/90">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Choose Nummero CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Davinciyatech for Guaranteed Digital Success
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Experience the power of Davinciyatech and embark on a transformative journey towards digital success. Our dedicated team is driven by a passion for innovation, a commitment to excellence, and a focus on measurable results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Start Your Journey
              </Link>
              <Link
                to="/contact"
                className="bg-white border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
