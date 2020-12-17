import React from 'react'
import { Col,Row,Button,Table} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUserTie  } from '@fortawesome/free-solid-svg-icons';
import { CardTitle, CardText } from 'reactstrap';
import DetailsCourseTable from './DetailsCourseTable'

const DetailsCourseDescription = ({ course , instructors }) => {

    return (
    <> 
    <Row className="mt-3">
      <Col md="8" style={{textAlign:"justify"}} >
        {/* DESCRIPTION */}
        <CardTitle tag="h4" style={{color: "#2471A3"}}>Description – Motivation</CardTitle>
        <CardText><div dangerouslySetInnerHTML={{__html: course.description}} /></CardText>
        {/* DURATION INFO */}
        <CardTitle tag="h4" style={{color: "#2471A3"}}>Duration</CardTitle>
        <CardText>This specific Code.Learn program lasts {course.duration}.</CardText>
        {/* INSTRUCTORS INFO */}
        <CardTitle tag="h4" style={{color: "#2471A3"}}>Instructors</CardTitle> 
          {instructors.map(instructor => 
          <Row className="mt-3">
            <Col>
              <CardTitle tag="h5" ><FontAwesomeIcon icon={faUserTie} color='#515A5A' />
                {' '}{instructor.name.first} {instructor.name.last} 
                <h6 style={{color: "#2471A3"}}>{instructor.bio}</h6>
              </CardTitle>
              <CardText>
                <Button outline disabled style={{opacity: "1"}}><strong>Email: </strong>{instructor.email} </Button>{' '}
                <Button outline color="primary">Linkedin</Button>
              </CardText>
            </Col>
          </Row>
            )}   
      </Col>
      <Col md="4">
        <DetailsCourseTable course={course}/>
      </Col>
    </Row>
    <Row className="mt-3">
      <Col xs="11">
        <Button color="info">Edit</Button>        
      </Col>
      <Col xs="1">
        <Button color="danger" >Delete</Button>
      </Col>
    </Row>
    </>
    );
};

export default DetailsCourseDescription;
