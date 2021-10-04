import React from 'react';

const HomeService = (props) => {
    const {name, img} = props.grapes;
    return (
        <div>
            service: {name}
        </div>
    );
};

export default HomeService;