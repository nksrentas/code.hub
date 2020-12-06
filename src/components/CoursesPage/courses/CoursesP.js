import React from 'react';
import { Row, Col, Badge} from 'reactstrap';
import Loading from '../../Loading';
import CCard from './CCard';

const CoursesP = ({ courses }) => {
    if (!courses) {
        return <Loading />;
    }

    return (
    <>
    <h2><Badge color="secondary">All Courses</Badge></h2>
    <Row>
        {courses.map((course) => (
            <Col sm="4" className="mb-5" key={course.id}>
                <CCard course={course} />
            </Col>
        ))}
    </Row>
    </>
    );
};

export default CoursesP;
