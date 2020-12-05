import React from 'react';
import { Jumbotron } from 'reactstrap';

const HeroSection = () => {
  return (
    <div>
      <Jumbotron>
        <h1 className='display-3'>Welcome to Code.Hub Dashboard</h1>
        <p className='lead'>Manage everything and have fun!</p>
      </Jumbotron>
    </div>
  );
};

export default HeroSection;
