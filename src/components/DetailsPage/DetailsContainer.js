import React from 'react'
import { useLocation } from 'react-router-dom'; 
import { Card } from 'reactstrap';
import grabData from '../../hooks/grabData';
import Loading from '../Loading';
import DetailsHeaderImage from './DetailsHeaderImage';
import DetailsCourseDescription from './DetailsCourseDescription';

const DetailsContainer = () => {
    const location = useLocation();
    const course=location.state.course;
    const instructor = grabData('instructors');  
    
    if (!instructor) {
        return <Loading />;
    }

    const id_filter = course.instructors;
    const course_instructors = instructor.filter(function(item) {
        return id_filter.includes(item.id);
    });


    return (
    <>  
        <Card inverse>
            <DetailsHeaderImage course={course}/>            
        </Card>
        <Card body >
            <DetailsCourseDescription 
            course={course}
            instructors={course_instructors}/>
        </Card>
    </>
    );
};

export default DetailsContainer;
