import React from 'react';
import { Link } from 'react-router-dom';

const GrowthPath = () => {
  const paths = [
    {
      title: 'Software Development',
      tag: 'SOFTWARE DEVELOPMENT',
      headline: 'Build scalable software without complexity',
      buttonText: 'Explore Software Services',
      buttonColor: 'yellow',
      imageBg: 'from-gray-800 to-gray-900',
      icon: '💻',
    },
    {
      title: 'B2B Marketing',
      tag: 'B2B MARKETING',
      headline: 'Turn leads into predictable revenue with our full-funnel model',
      buttonText: 'Explore B2B Website',
      buttonColor: 'blue',
      imageBg: 'from-blue-600 to-purple-600',
      icon: '📊',
    },
    {
      title: 'Real Estate Marketing',
      tag: 'REAL ESTATE MARKETING',
      headline: 'Sell luxury homes faster with end-to-end digital marketing',
      buttonText: 'Explore Real Estate Website',
      buttonColor: 'yellow',
      imageBg: 'from-yellow-400 to-orange-500',
      icon: '🏡',
    },
  ];

  const getButtonClasses = (color) => {
    const colors = {
      yellow: 'bg-yellow-400 hover:bg-yellow-500 text-gray-900',
      blue: 'bg-blue-600 hover:bg-blue-700 text-white',
    };
    return colors[color] || 'bg-gray-600 text-white';
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-8xl mx-auto px-4 md:px-10">
        {/* Top Section */}
        <div className="text-center mb-12">
          <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
            EXPLORE OUR VERTICALS
          </button>
          <h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
            Choose Your Growth Path
          </h2>
          <p className="text-lg text-gray-600">
            Specialized expertise for real estate developers, B2B enterprises, and software development
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {paths.map((path, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-300"
            >
              {/* Background Image Placeholder */}
              <div className={`bg-gradient-to-br ${path.imageBg} h-96 flex items-center justify-center`}>
                <div className="text-6xl text-white/50">{path.icon}</div>
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-between">
                {/* Tag */}
                <div className="self-end">
                  <span className="bg-white text-gray-900 px-3 py-1 rounded-md text-xs font-bold uppercase">
                    {path.tag}
                  </span>
                </div>

                {/* Headline */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    {path.headline}
                  </h3>
                  <Link
                    to={`/solutions/${path.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`inline-flex items-center gap-2 ${getButtonClasses(path.buttonColor)} px-6 py-3 rounded-lg font-semibold text-sm transition-colors`}
                  >
                    {path.buttonText}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12 L10 8 L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthPath;


