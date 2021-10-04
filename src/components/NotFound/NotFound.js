import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            404 <br />
            Not Found!!
            <br />
            <button><Link to="/">Home</Link></button>
        </div>
    );
};

export default NotFound;