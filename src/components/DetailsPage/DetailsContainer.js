import React from 'react';
import { Card } from 'reactstrap';
import grabData from '../../hooks/grabData';
import Loading from '../Loading';
import DetailsHeaderImage from './DetailsHeaderImage';
import DetailsCourseDescription from './DetailsCourseDescription';

import { useParams} from "react-router-dom";

const DetailsContainer = () => {
  const {courseID} = useParams();
  const course = grabData(`courses/${courseID}`)
  const instructor = grabData('instructors');

  if (!course || !instructor) {
    return  <Loading />;  
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
