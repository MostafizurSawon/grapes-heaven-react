import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Image, Row } from 'react-bootstrap';
import './NotFound.css';

const NotFound = () => {
    return (
        <>
            <Row>
                <Col sm>
                <Image src="https://cdn.dribbble.com/users/722246/screenshots/3066818/media/0f1c45dcf80e887f41b3c0080660fd37.gif" fluid />
                <br />
                <Button variant="outline-secondary"><Link to="/home"><span>Back to Home</span></Link></Button>
                </Col>
            </Row>
        </>
    );
};

export default NotFound;