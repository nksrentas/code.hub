import React from 'react';
import grabData from '../../hooks/grabData';
import HeroSection from './HeroSection';
import Stats from './stats/Stats';

const DashboardContainer = () => {
  const stats = grabData('stats');
  return (
    <>
      <HeroSection />
      <Stats stats={stats} />
    </>
  );
};

export default DashboardContainer;
