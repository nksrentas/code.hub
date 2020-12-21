import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DetailsCourseDescription from '../DetailsPage/DetailsCourseDescription';
import axios from 'axios';
import { API_URL } from '../../config';
import { useHistory } from 'react-router-dom';

const DeleteCourse = ({ course }) => {  
    let history = useHistory();
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const deleteC = () => {
        //e.preventDefault();
        // delete request
        axios.delete(`${API_URL}/courses/${course.id}`)
          .then((res) => {
            console.log('delete response', res);
            history.push('/courses');
          })
          .catch((err) => {
            console.error(err);
          });
      };

    return (
        <>
        <Button className="float-right" color='danger' onClick={toggle}>Delete</Button>        
        <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle}>Delete Course</ModalHeader>
            <ModalBody>
            Are you sure you want to delete "{course.title}" course?
            </ModalBody>
            <ModalFooter>
            <Button color="danger" onClick={deleteC}>Delete</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
        </>
    );
}

export default DeleteCourse;