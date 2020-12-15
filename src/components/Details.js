import React from 'react'
import { useLocation } from 'react-router-dom'; 
import { Media,Col,Row,Button,Table} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCheck,faTimes,faBan,faInfoCircle,faTag,faCalendarAlt,faFileSignature,faUserTie  } from '@fortawesome/free-solid-svg-icons';
import grabData from '../hooks/grabData';
import Loading from './Loading';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay,Alert } from 'reactstrap';

const Details = () => {
    const instructor = grabData('instructors');  
    const location = useLocation();
    const course=location.state.course; 

    const formatDate = (date) => {
      return new Date(date).toLocaleDateString('el-GR', {
          day : 'numeric',
          month : 'numeric',
          year : 'numeric'
      }).split(' ').join('/');
    }

    if (!instructor) {
      return <Loading />;
    }

    const id_filter = course.instructors;
    const filtered_instructor = instructor.filter(function(item) {
      return id_filter.includes(item.id);
  });


    return (
    <>  
    <div>
      <Card inverse>
        <CardImg width="100%" src="../background-image.jpg" alt="Card image cap" />
        <CardImgOverlay className="d-flex" style={{alignItems:"center"}}>
            <Col xs="4" className="pl-0">                
              <Media object src={course.imagePath} style={{width: "90%"}} />
            </Col>  
            <Col xs="8">
              <Media body>
                <Media heading>
                  <h1>{course.title}</h1>
                </Media>
                {course.open ? (                 
                      <Alert color="success" className="ml-5">
                        <h4 className="alert-heading ">Enrollment is Open! </h4>
                      </Alert>) :
                      (<Alert color="danger" className="ml-5">
                      <h5>Enrollment is Closed <FontAwesomeIcon icon={faBan} color='red' /></h5>
                      </Alert>
                )}
              </Media>
            </Col>
        </CardImgOverlay>
      </Card>
    </div>

    <Card body >
    <Row className="mt-3">
      <Col md="8" style={{textAlign:"justify"}} >      
        <CardTitle tag="h4" style={{color: "#2471A3"}}>Description – Motivation</CardTitle>
        <CardText><div dangerouslySetInnerHTML={{__html: course.description}} /></CardText>      
      </Col>
      <Col md="4">
        <Table  responsive >
          <tbody>
          <tr>              
              <td scope="row"><FontAwesomeIcon icon={faInfoCircle} color='#2471A3' /> Course Number</td>
              <th style={{ textAlign: 'right' }}>{course.id}</th>
            </tr>
            <tr>
              <td scope="row"><FontAwesomeIcon icon={faCalendarAlt} color='#2471A3' /> Classes Start</td>
              <th style={{ textAlign: 'right' }}>{formatDate(course.dates.start_date)} </th>
            </tr>
            <tr>
              <td scope="row"><FontAwesomeIcon icon={faCalendarAlt} color='#2471A3' /> Classes End</td>
              <th style={{ textAlign: 'right' }}>{formatDate(course.dates.end_date)} </th>
            </tr>
            <tr>
              <td scope="row"><FontAwesomeIcon icon={faTag} color='#2471A3' /> Cost of attendance</td>
              <th style={{ textAlign: 'right' }}>{course.price.normal}€</th>
            </tr>
            <tr>
              <td scope="row"><FontAwesomeIcon icon={faFileSignature} color='#2471A3' /> Bookable:</td>
              <th style={{ textAlign: 'right' }}>{course.open ? (
                                        <FontAwesomeIcon icon={faCheck} color='green' />)
                                        : (<FontAwesomeIcon icon={faTimes} color='red' />
                )}</th>
            </tr>
          </tbody>
        </Table> 
        </Col>
        </Row>
        <Row>
        <Col md="8" style={{textAlign:"justify"}} >      
          <CardTitle tag="h4" style={{color: "#2471A3"}}>Duration</CardTitle>
          <CardText>This specific Code.Learn program lasts {course.duration}.</CardText>      
        </Col>
        </Row>
        <Row className="mt-3">
        <Col md="8" style={{textAlign:"justify"}} >      
          <CardTitle tag="h4" style={{color: "#2471A3"}}>Instructors</CardTitle> 
          {filtered_instructor.map(instructor => 
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
        </Row>

        <Row className="mt-3">
          <Col md="11">
            <Button color="info">Edit</Button>        
          </Col>
          <Col md="1">
            <Button color="danger" >Delete</Button>
          </Col>
        </Row>
        
        
    </Card>
    </>
    );
};

export default Details;
