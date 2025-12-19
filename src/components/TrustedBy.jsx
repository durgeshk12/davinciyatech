import React from 'react';

const TrustedBy = () => {
  const companies = [
    {
      id: 1,
      name: 'YOTA',
      logo: (
        <div className="text-2xl font-bold">
          <span className="text-red-600">Y</span>
          <span className="text-red-600">O</span>
          <span className="text-gray-800">T</span>
          <span className="text-gray-800">A</span>
        </div>
      ),
      tagline: null,
    },
    {
      id: 2,
      name: 'URC',
      logo: (
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold">
            <span className="text-blue-600">U</span>
            <span className="text-green-600">R</span>
            <span className="text-blue-600">C</span>
          </div>
          <div className="w-8 h-8 bg-gray-400 rounded"></div>
        </div>
      ),
      tagline: 'Building Values',
    },
    {
      id: 3,
      name: 'wifinity',
      logo: (
        <div className="text-xl font-medium text-gray-800 lowercase">wifinity</div>
      ),
      tagline: null,
    },
    {
      id: 4,
      name: 'Xalted',
      logo: (
        <div className="flex items-center gap-1">
          <div className="text-2xl font-bold text-red-600">X</div>
          <div className="text-xl font-medium text-gray-800">alted</div>
        </div>
      ),
      tagline: 'EXCEEDING EXCELLENCE',
    },
    {
      id: 5,
      name: 'Assetz',
      logo: (
        <div className="relative">
          <div className="absolute -top-2 left-0 w-12 h-3 bg-green-500 rounded-full opacity-50"></div>
          <div className="text-xl font-semibold text-blue-600 relative z-10">Assetz</div>
        </div>
      ),
      tagline: 'empowered innovation',
    },
    {
      id: 6,
      name: 'ATMOS',
      logo: (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-gray-400 rounded-full"></div>
          </div>
          <div className="text-xl font-semibold text-gray-800">ATMOS</div>
        </div>
      ),
      tagline: null,
    },
    {
      id: 7,
      name: 'BINGHATTI',
      logo: (
        <div className="text-center">
          <div className="w-10 h-10 bg-gray-800 mx-auto mb-1 rounded"></div>
          <div className="text-xs text-gray-600 mb-1">بن غاطي</div>
          <div className="text-sm font-semibold text-gray-800">BINGHATTI</div>
        </div>
      ),
      tagline: null,
    },
    {
      id: 8,
      name: 'CONCORDE',
      logo: (
        <div className="text-xl font-semibold text-blue-400">CONCORDE</div>
      ),
      tagline: 'Experiences for life',
    },
    {
      id: 9,
      name: 'D&B',
      logo: (
        <div className="text-2xl font-bold text-blue-400">
          D<span className="text-xl">&</span>B
        </div>
      ),
      tagline: null,
    },
  ];

  // Duplicate companies for seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 md:px-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-2">
            TRUSTED BY INDUSTRY LEADERS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Join 100+ companies growing with Davinciyatech
          </h2>
        </div>

        {/* Infinite Scroll Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex animate-scroll gap-6 md:gap-8">
              {/* First set */}
              {duplicatedCompanies.map((company, index) => (
                <div
                  key={`first-${company.id}-${index}`}
                  className="flex-shrink-0 w-[200px] md:w-[250px]"
                >
                  <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-full">
                    <div className="mb-3 flex items-center justify-center min-h-[60px]">
                      {company.logo}
                    </div>
                    {company.tagline && (
                      <p className="text-xs text-gray-400 text-center mt-2">
                        {company.tagline}
                      </p>
                    )}
                  </div>
                </div>
              ))}
              {/* Second set for seamless loop */}
              {duplicatedCompanies.map((company, index) => (
                <div
                  key={`second-${company.id}-${index}`}
                  className="flex-shrink-0 w-[200px] md:w-[250px]"
                >
                  <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-full">
                    <div className="mb-3 flex items-center justify-center min-h-[60px]">
                      {company.logo}
                    </div>
                    {company.tagline && (
                      <p className="text-xs text-gray-400 text-center mt-2">
                        {company.tagline}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
