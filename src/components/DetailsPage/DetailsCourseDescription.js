import React from 'react';
import { Col, Row, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { CardTitle, CardText } from 'reactstrap';
import DetailsCourseTable from './DetailsCourseTable';
import EditCourse from '../Edit/EditCourse';

const DetailsCourseDescription = ({ course, instructors }) => {
  return (
    <>
      <Row className='mt-3'>
        <Col md='7' lg='8' style={{ textAlign: 'justify' }}>
          {/* DESCRIPTION */}
          <CardTitle tag='h4' style={{ color: '#2471A3' }}>
            Description – Motivation
          </CardTitle>
          <div dangerouslySetInnerHTML={{ __html: course.description }} />
          {/* DURATION INFO */}
          <CardTitle tag='h4' style={{ color: '#2471A3' }}>
            Duration
          </CardTitle>
          <CardText>
            This specific Code.Learn program lasts {course.duration}.
          </CardText>
          {/* INSTRUCTORS INFO */}
          <CardTitle tag='h4' style={{ color: '#2471A3' }}>
            Instructors
          </CardTitle>
          {instructors.map((instructor, index) => (
            <Row className='mt-3' key={instructor.id}>
              <Col>
                <CardTitle tag='h5'>
                  <FontAwesomeIcon icon={faUserTie} color='#515A5A' />{' '}
                  {instructor.name.first} {instructor.name.last}
                  <span
                    style={{
                      color: '#2471A3',
                      display: 'block',
                      fontSize: 'smaller',
                    }}
                  >
                    {instructor.bio}
                  </span>
                </CardTitle>
                <CardText>
                  <Button outline disabled style={{ opacity: '1' }}>
                    <strong>Email: </strong>
                    {instructor.email}{' '}
                  </Button>{' '}
                  <Button outline color='primary'>
                    Linkedin
                  </Button>
                </CardText>
              </Col>
            </Row>
          ))}
        </Col>
        <Col md='5' lg='4'>
          <DetailsCourseTable course={course} />
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col xs=''>
          <EditCourse course={course} />
        </Col>
        <Col >
          <Button className="float-right" color='danger'>Delete</Button>
        </Col>
      </Row>
    </>
  );
};

export default DetailsCourseDescription;
