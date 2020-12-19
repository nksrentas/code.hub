import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Card } from 'reactstrap';
import grabData from '../../hooks/grabData';
import Loading from '../Loading';
import DetailsHeaderImage from './DetailsHeaderImage';
import DetailsCourseDescription from './DetailsCourseDescription';
import axios from 'axios';
import { API_URL } from '../../config';

const DetailsContainer = () => {
  const [course, setCourse] = useState();
  const location = useLocation();
  // const course = location.state.course;
  const courseID = location.state.course.id;
  console.log('course', courseID);
  const instructor = grabData('instructors');

  useEffect(() => {
    axios.get(`${API_URL}/courses/${courseID}`).then((d) => setCourse(d.data));
  }, []);

  if (!course) {
    return <h1>wait</h1>;
  }

  if (!instructor) {
    return <Loading />;
  }

  const id_filter = course.instructors;
  const course_instructors = instructor.filter(function (item) {
    return id_filter.includes(item.id);
  });

  return (
    <>
      <Card inverse>
        <DetailsHeaderImage course={course} />
      </Card>
      <Card body>
        <DetailsCourseDescription
          course={course}
          instructors={course_instructors}
        />
      </Card>
    </>
  );
};

export default DetailsContainer;
