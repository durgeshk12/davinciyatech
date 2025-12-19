import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

// Services
import BrandingServices from './pages/services/BrandingServices';
import ContentWriting from './pages/services/ContentWriting';
import ConversionRateOptimization from './pages/services/ConversionRateOptimization';
import DesignServices from './pages/services/DesignServices';
import DigitalMarketingStrategy from './pages/services/DigitalMarketingStrategy';
import FractionalCMOService from './pages/services/FractionalCMO';
import InfluencerMarketing from './pages/services/InfluencerMarketing';
import LeadGeneration from './pages/services/LeadGeneration';
import LogoDesign from './pages/services/LogoDesign';
import PerformanceMarketing from './pages/services/PerformanceMarketing';
import ReputationManagement from './pages/services/ReputationManagement';
import SEOServices from './pages/services/SEOServices';
import SocialMediaMarketing from './pages/services/SocialMediaMarketing';
import WebDevelopment from './pages/services/WebDevelopment';

// Solutions
import SoftwareDevelopment from './pages/solutions/SoftwareDevelopment';
import B2BMarketing from './pages/solutions/B2BMarketing';
import B2CMarketing from './pages/solutions/B2CMarketing';
import FractionalCMOSolution from './pages/solutions/FractionalCMO';
import RealEstateMarketing from './pages/solutions/RealEstateMarketing';
import CRMSolutions from './pages/solutions/CRMSolutions';

// About
import AboutUs from './pages/about/AboutUs';
import Industries from './pages/about/Industries';

// Contact
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Services Routes */}
          <Route path="/services/branding-services" element={<BrandingServices />} />
          <Route path="/services/content-writing" element={<ContentWriting />} />
          <Route path="/services/conversion-rate-optimization" element={<ConversionRateOptimization />} />
          <Route path="/services/design-services" element={<DesignServices />} />
          <Route path="/services/digital-marketing-strategy" element={<DigitalMarketingStrategy />} />
          <Route path="/services/fractional-cmo" element={<FractionalCMOService />} />
          <Route path="/services/influencer-marketing" element={<InfluencerMarketing />} />
          <Route path="/services/lead-generation" element={<LeadGeneration />} />
          <Route path="/services/logo-design" element={<LogoDesign />} />
          <Route path="/services/performance-marketing" element={<PerformanceMarketing />} />
          <Route path="/services/reputation-management" element={<ReputationManagement />} />
          <Route path="/services/seo-services" element={<SEOServices />} />
          <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          
          {/* Solutions Routes */}
          <Route path="/solutions/software-development" element={<SoftwareDevelopment />} />
          <Route path="/solutions/b2b-marketing" element={<B2BMarketing />} />
          <Route path="/solutions/b2c-marketing" element={<B2CMarketing />} />
          <Route path="/solutions/fractional-cmo" element={<FractionalCMOSolution />} />
          <Route path="/solutions/real-estate-marketing" element={<RealEstateMarketing />} />
          <Route path="/solutions/crm-solutions" element={<CRMSolutions />} />
          
          {/* About Routes */}
          <Route path="/about/about-us" element={<AboutUs />} />
          <Route path="/about/industries" element={<Industries />} />
          
          {/* Placeholder routes for other pages */}
          <Route path="/product-suite" element={<div className="py-16 px-5 max-w-6xl mx-auto"><h1 className="text-4xl text-gray-800 mb-4">Product Suite</h1><p className="text-lg text-gray-600">Explore our product suite.</p></div>} />
          <Route path="/blog" element={<div className="py-16 px-5 max-w-6xl mx-auto"><h1 className="text-4xl text-gray-800 mb-4">Blog</h1><p className="text-lg text-gray-600">Read our latest blog posts.</p></div>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
