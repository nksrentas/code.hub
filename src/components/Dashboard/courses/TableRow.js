import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faInfoCircle,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';


const TableRow = ({ data }) => {
  
  return (
    <tr>
      <td>
        <FontAwesomeIcon icon={faInfoCircle} color='blue' />
      </td>
      <td>{data.title}</td>
      <td>
        {data.open ? (
          <FontAwesomeIcon icon={faCheck} color='green' />
        ) : (
          <FontAwesomeIcon icon={faTimes} color='red' />
        )}
      </td>
      <td>{data.price.normal}</td>
      <td>
        {data.dates.start_date} - {data.dates.end_date}
      </td>
      <td>
        <Link to={'/courses/'+ data.id}>
          <Button color='info'>View details</Button>
        </Link>
      </td>
    </tr>
  );
};

export default TableRow;
