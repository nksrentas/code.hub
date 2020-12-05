import React from 'react';
import { Row, Col } from 'reactstrap';
import Loading from '../../Loading';
import StatCard from './StatCard';

const Stats = ({ stats }) => {
  if (!stats) {
    return <Loading />;
  }
  return (
    <Row>
      {stats.map((stat) => (
        <Col key={stat.id}>
          <StatCard stat={stat} />
        </Col>
      ))}
    </Row>
  );
};

export default Stats;
