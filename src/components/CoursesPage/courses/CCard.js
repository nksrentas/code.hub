import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,ListGroup,ListGroupItem
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCheck,faTimes  } from '@fortawesome/free-solid-svg-icons';

const CCard = ({ course }) => {
    return (
        <>    
        <Card >
            <CardImg top width="100%" src={course.imagePath} alt="Card image cap" />
            <CardBody>
                <CardTitle tag="h5">{course.title}</CardTitle>
                <CardSubtitle tag="h5" className="mb-2 text-muted">Price: <b>{course.price.normal}</b> | Bookable: {course.open ? (
                                        <FontAwesomeIcon icon={faCheck} color='green' />)
                                        : (<FontAwesomeIcon icon={faTimes} color='red' />
                )}</CardSubtitle>
                <CardText>
                    <ListGroup flush>
                        <ListGroupItem>Duration: <b className="text-muted">{course.duration}</b></ListGroupItem>
                        <ListGroupItem>Dates: <b className="text-muted"> </b></ListGroupItem>
                    </ListGroup>
                </CardText>
                <Button>View</Button>
            </CardBody>
        </Card>
    </>
    );
};

export default CCard;
