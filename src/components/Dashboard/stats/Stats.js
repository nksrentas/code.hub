import React from 'react';
import { Row, Col } from 'reactstrap';
import StatCard from './StatCard';

const Stats = ({ stats }) => {
  console.log(stats);
  return (
    <Row>
      {stats.map((stat) => (
        <Col>
          <StatCard stat={stat} key={stat.id} />
        </Col>
      ))}
    </Row>
  );
};

export default Stats;
