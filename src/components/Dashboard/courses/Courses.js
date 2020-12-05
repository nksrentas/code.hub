import React, { useState } from 'react';
import Loading from '../../Loading';
import { Table, Button, Row } from 'reactstrap';
import TableRow from './TableRow';

const sortData = (courses) => {
  return courses.sort((a, b) => {
    return new Date(b.dates.start_date) - new Date(a.dates.start_date);
  });
};

const Courses = ({ courses }) => {
  const [isExpand, setIsExpand] = useState(false);
  if (!courses) {
    return <Loading />;
  }

  const sortedData = sortData(courses);
  return (
    <div className='mt-5 bg-light'>
      <Row className='py-3'>
        <h5 className='text-secondary ml-5'>Last 5 Courses</h5>
      </Row>
      <Table className='table-striped'>
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Bookable</th>
            <th>Price</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {isExpand
            ? sortedData.map((course) => {
                return <TableRow data={course} key={course.id} />;
              })
            : sortedData.slice(0, 5).map((course) => {
                return <TableRow data={course} key={course.id} />;
              })}
        </tbody>
      </Table>
      <Row className='d-flex justify-content-end py-4'>
        <Button
          color='primary'
          className='mr-5'
          onClick={() => setIsExpand((prev) => !prev)}
        >
          View all
        </Button>
      </Row>
    </div>
  );
};

export default Courses;
