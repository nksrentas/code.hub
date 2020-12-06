import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
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
                <CardSubtitle tag="h6" className="mb-2 text-muted">Price: <b>{course.price.normal}</b> | Bookable: {course.open ? (
                                        <FontAwesomeIcon icon={faCheck} color='green' />)
                                        : (<FontAwesomeIcon icon={faTimes} color='red' />
                )}</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>View</Button>
            </CardBody>
        </Card>
    </>
    );
};

export default CCard;
