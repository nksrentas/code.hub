import React from 'react';
import Loading from '../../Loading';
import { Table } from 'reactstrap';
import TableRow from './TableRow';

const Courses = ({ courses }) => {
  if (!courses) {
    return <Loading />;
  }
  return (
    <div className='mt-5'>
      <h5 className='text-secondary'>Last 5 Courses</h5>
      <Table>
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
          {courses.map((course) => {
            return <TableRow data={course} />;
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Courses;
