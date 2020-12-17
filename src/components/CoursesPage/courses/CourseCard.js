import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,ListGroup,ListGroupItem
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCheck,faTimes  } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from "react-router-dom";
import FormatDate from '../../FormatDate'

const CourseCard = ({ course }) => {
    const history = useHistory();

    const routeChange = (course) =>{ 
        history.push({ 
            pathname: '/details',
            state: {course}
        });
        console.log({course})
    }


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
                        <ListGroupItem>Duration: <b  className="text-muted">{course.duration}</b></ListGroupItem>
                        <ListGroupItem >Dates: <b className="text-muted " >
                            <FormatDate date={course.dates.start_date}></FormatDate>
                            {'-'}
                            <FormatDate date={course.dates.end_date}></FormatDate>
                            {/* {formatDate(course.dates.start_date)} - {formatDate(course.dates.end_date)} */}
                            </b></ListGroupItem>
                    </ListGroup>
                </CardText>
                <Button className="float-right" onClick={() => routeChange(course)}>View</Button>
            </CardBody>
        </Card>
    </>
    );
};

export default CourseCard;
