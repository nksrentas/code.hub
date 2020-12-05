import React from 'react';
import { Button } from 'reactstrap';

const TableRow = ({ data }) => {
  return (
    <tr>
      <td></td>
      <td>{data.title}</td>
      <td></td>
      <td>{data.price.normal}</td>
      <td>
        {data.dates.start_date} - {data.dates.end_date}
      </td>
      <td>
        <Button color='info'>View details</Button>
      </td>
    </tr>
  );
};

export default TableRow;
