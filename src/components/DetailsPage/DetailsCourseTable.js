import React from 'react'
import { Table} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCheck,faTimes,faInfoCircle,faTag,faCalendarAlt,faFileSignature  } from '@fortawesome/free-solid-svg-icons';
import FormatDate from '../FormatDate'

const DetailsCourseTable = ({ course }) => {
    
    return (
    <>  
        <Table  responsive >
            <tbody>
                <tr>              
                    <td scope="row"><FontAwesomeIcon icon={faInfoCircle} color='#2471A3' /> Course Number</td>
                    <th style={{ textAlign: 'right' }}>{course.id}</th>
                </tr>
                <tr>
                    <td scope="row"><FontAwesomeIcon icon={faCalendarAlt} color='#2471A3' /> Classes Start</td>
                    <th style={{ textAlign: 'right' }}>
                    <FormatDate date={course.dates.start_date}/>  
                    </th>
                </tr>
                <tr>
                    <td scope="row"><FontAwesomeIcon icon={faCalendarAlt} color='#2471A3' /> Classes End</td>
                    <th style={{ textAlign: 'right' }}>                        
                        <FormatDate date={course.dates.end_date}/> 
                    </th>
                </tr>
                <tr>
                    <td scope="row"><FontAwesomeIcon icon={faTag} color='#2471A3' /> Cost of attendance</td>
                    <th style={{ textAlign: 'right' }}>{course.price.normal}€</th>
                </tr>
                <tr>
                    <td scope="row"><FontAwesomeIcon icon={faFileSignature} color='#2471A3' /> Bookable:</td>
                    <th style={{ textAlign: 'right' }}>{course.open ? (
                                            <FontAwesomeIcon icon={faCheck} color='green' />)
                                            : (<FontAwesomeIcon icon={faTimes} color='red' />
                    )}</th>
                </tr>
            </tbody>
        </Table> 
    </>
    );
};

export default DetailsCourseTable;
