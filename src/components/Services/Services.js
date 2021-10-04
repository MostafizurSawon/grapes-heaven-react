import React, { useState, useEffect } from 'react';
import ServiceDetails from './ServiceDetails/ServiceDetails';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./grapes.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);
    return (
        <div>
            Services
            <br />
        <div>
            {
                services.map(grapes => <ServiceDetails key={grapes.key} grapes={grapes}></ServiceDetails>)
            }
        </div>
        </div>
    );
};

export default Services;