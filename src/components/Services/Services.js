import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import ServiceDetails from './ServiceDetails/ServiceDetails';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./grapes.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);
    return (
        <div className="container mt-3">
            <h3>We Provide World class service. Check for yourself.</h3>
        <div>
        <Row xs={1} md={3} className="g-4 my-1">
            {
                services.map(grapes => <ServiceDetails key={grapes.key} grapes={grapes}></ServiceDetails>)
            }
        </Row>
        </div>
        </div>
    );
};

export default Services;