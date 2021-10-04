import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './ServiceDetails.css'

const ServiceDetails = (props) => {
    const {name, img, description} = props.grapes;
    return (
        <Col>
        <Card>
        <Card.Img className="custom-image mx-auto p-3" variant="top" fluid src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
    );
};

export default ServiceDetails;