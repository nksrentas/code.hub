import React from 'react';
import grabData from '../../hooks/grabData.js';
import CoursesP from './../CoursesPage/courses/CoursesP.js';

const CoursesContainer = () => {
  const courses = grabData('courses');
  
  return (    
    <>
      <CoursesP courses={courses} /> 
    </>
  );
};

export default CoursesContainer;
