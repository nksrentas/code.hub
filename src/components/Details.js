import React from 'react'
import { useLocation } from 'react-router-dom'; 
import { Breadcrumb, BreadcrumbItem,Media,Col,Row,Button} from 'reactstrap';

const Details = () => {
    const location = useLocation();
    const p=location.state.course;
    console.log(p);

    return (
    <>  
    <Breadcrumb>
        <BreadcrumbItem><a href="/courses">Courses</a></BreadcrumbItem>
        <BreadcrumbItem active>{p.title}</BreadcrumbItem>
    </Breadcrumb>
    <h3>{p.title} ({p.id})</h3>
    <Media src={p.imagePath} />
    
    <Col>
      <Media >
        <Media object data-src={p.imagePath} fluid="xl" />
      </Media>
      </Col>
      <Row>
        <Col xs="11">Price: {p.price.normal}</Col>
        <Col xs="1">Duration:</Col>
      </Row>
      <Row>
        <Col xs="11">Bookable: </Col>
        <Col  xs="1">Dates: </Col>
      </Row>
      <Row>{p.description}</Row>
      <Row>
      <Button className="float-right">Edit</Button>
      <Button className="float-right">Delete</Button>
      </Row>
    <h3>Instructors</h3>
    <h4></h4>
    <Col xs="11">Email: </Col>
    </>
    );
};

export default Details;
