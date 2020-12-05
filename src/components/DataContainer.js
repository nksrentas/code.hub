import React from 'react';
import grabData from '../hooks/grabData';

const DataContainer = () => {
  const courses = grabData('courses');
  const stats = grabData('stats');

  console.log(courses, stats);
  return <div></div>;
};

export default DataContainer;
