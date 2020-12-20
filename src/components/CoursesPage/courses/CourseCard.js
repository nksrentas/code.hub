import React from 'react';
import {
  Link,
  useRouteMatch
} from "react-router-dom";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import FormatDate from '../../FormatDate';


const CourseCard = ({ course }) => {
  const { url } = useRouteMatch();

  return (
    <>
      <Card>
        <CardImg top width='100%' src={course.imagePath} alt='Card image cap' />
        <CardBody>
          <CardTitle tag='h5'>{course.title}</CardTitle>
          <CardSubtitle tag='h5' className='mb-2 text-muted'>
            Price: <b>{course.price.normal}</b> | Bookable:{' '}
            {course.open ? (
              <FontAwesomeIcon icon={faCheck} color='green' />
            ) : (
              <FontAwesomeIcon icon={faTimes} color='red' />
            )}
          </CardSubtitle>
          <ListGroup flush>
            <ListGroupItem>
              Duration: <b className='text-muted'>{course.duration}</b>
            </ListGroupItem>
            <ListGroupItem>
              Dates:{' '}
              <b className='text-muted '>
                <FormatDate date={course.dates.start_date} />
                {'-'}
                <FormatDate date={course.dates.end_date} />{' '}
              </b>
            </ListGroupItem>
          </ListGroup>
          <Link to={`${url}/`+ course.id}>
            <Button className='float-right' > View </Button>
          </Link>
        </CardBody>
      </Card>

  
    </>
  );
};

export default CourseCard;
