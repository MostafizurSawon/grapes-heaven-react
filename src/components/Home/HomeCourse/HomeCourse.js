import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Card, Col, Row, Button, Badge } from 'react-bootstrap';

const HomeCourse = (props) => {
    const {name, fee, description} = props.course;
    const add = <FontAwesomeIcon icon={faPlus} />
    return (  
            <Col>
            <Card>
                <Card.Header>{name}</Card.Header>
                <Card.Body>
                    <Card.Title>Course Fee : ৳ {fee}</Card.Title>
                    <Card.Text>
                    {description}
                    </Card.Text>
                    <Button variant="info">Details</Button>
                    <Button className="ms-2" variant="success">{add} Enroll</Button>
                </Card.Body>
                </Card>
            </Col>

    );
};

export default HomeCourse;