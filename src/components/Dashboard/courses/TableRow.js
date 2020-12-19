import React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from "react-router-dom";
import {
  faCheck,
  faInfoCircle,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';


const TableRow = ({ data }) => {
  const history = useHistory();
    const routeChange = (data) =>{ 
        const course=data
        history.push({ 
            pathname: '/details',
            state: {course}
        });
    }
    
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
        <Button color='info' onClick={() => routeChange(data)}>View details</Button>
      </td>
    </tr>
  );
};

export default TableRow;
