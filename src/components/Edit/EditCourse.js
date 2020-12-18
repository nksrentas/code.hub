import React, { useState, useRef } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import AddCourse from '../AddCourse/AddCourse';

const EditCourse = ({ course }) => {
  const [modal, setModal] = useState(false);
  const childRef = useRef();

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color='info' onClick={toggle}>
        Edit
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Course: {course.title}</ModalHeader>
        <ModalBody>
          <AddCourse initialState={course} ref={childRef} />
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={() => childRef.current.kappa()}>
            Submit
          </Button>{' '}
          <Button color='secondary' onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditCourse;
