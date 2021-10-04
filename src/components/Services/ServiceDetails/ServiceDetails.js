import React from 'react';

const ServiceDetails = (props) => {
    const{name} = props.grapes;
    return (
        <div>
            details : {name}
        </div>
    );
};

export default ServiceDetails;