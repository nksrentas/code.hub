import React from 'react';
import { Card, CardBody, CardTitle, Badge } from 'reactstrap';

const StatCard = ({ stat }) => {
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle tag='h5' className='text-uppercase'>
            {stat.title}: <Badge color='secondary'>{stat.amount}</Badge>
          </CardTitle>
        </CardBody>
      </Card>
    </>
  );
};

export default StatCard;
