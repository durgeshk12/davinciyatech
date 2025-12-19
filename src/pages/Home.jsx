import React from 'react';
import HeroSlider from '../components/HeroSlider';
import TrustedBy from '../components/TrustedBy';
import FullFunnelSolutions from '../components/FullFunnelSolutions';
import PowerOfIntegration from '../components/PowerOfIntegration';
import SoftwareSection from '../components/SoftwareSection';
import B2BRevenueSection from '../components/B2BRevenueSection';
import RealEstateSection from '../components/RealEstateSection';
import GrowthPath from '../components/GrowthPath';
import ProvenResults from '../components/ProvenResults';
import HeroCTA from '../components/HeroCTA';

const Home = () => {
  return (
    <div className="relative">
      <HeroSlider />
      <TrustedBy />
      <FullFunnelSolutions />
      <PowerOfIntegration />
      <SoftwareSection />
      <B2BRevenueSection />
      <RealEstateSection />
      <GrowthPath />
      <ProvenResults />
      <HeroCTA />
    </div>
  );
};

export default Home;
