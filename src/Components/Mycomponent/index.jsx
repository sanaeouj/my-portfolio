import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Mycomponent(props) {
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <h4><strong>{props.title}</strong></h4>
            <p>{props.parag}</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <p>Date: {props.date}</p>
          </Col>
        </Row>
      </Container>
    );
  }
  export default Mycomponent;
  