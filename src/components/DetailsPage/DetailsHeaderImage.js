import React from 'react'
import { Media,Col} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import { CardImg, CardImgOverlay,Alert } from 'reactstrap';

const DetailsHeaderImage = ({ course }) => {
    
    return (
    <>  
        <CardImg width="100%" src="/background-image.jpg" alt="Card image cap" />
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
    </>
    );
};

export default DetailsHeaderImage;
