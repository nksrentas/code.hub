import React from 'react';
import { Spinner, Row } from 'reactstrap';

const Loading = () => {
  return (
    <Row className='justify-content-center'>
      <Spinner color='primary' />
    </Row>
  );
};

export default Loading;
