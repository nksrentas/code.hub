import React from 'react';
import grabData from '../../hooks/grabData';
import Courses from './courses/Courses';
import HeroSection from './HeroSection';
import Stats from './stats/Stats';

const DashboardContainer = () => {
  const stats = grabData('stats');
  const courses = grabData('courses');

  return (
    <>
      <HeroSection />
      <Stats stats={stats} />
      <Courses courses={courses} />
    </>
  );
};

export default DashboardContainer;
