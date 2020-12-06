import React from 'react';
import { Row, Col, Badge} from 'reactstrap';
import Loading from '../../Loading';
import CourseCard from './CourseCard';


const CoursesP = ({ courses }) => {
    if (!courses) {
        return <Loading />;
    }

    return (
    <>
    <h2><Badge color="info" pill className="mb-2  " >All Courses</Badge></h2>
    <Row>
        {courses.map((course) => (
            <Col sm="4" className="mb-5" key={course.id}>
                <CourseCard course={course} />
            </Col>
        ))}
    </Row>
    </>
    );
};

export default CoursesP;
