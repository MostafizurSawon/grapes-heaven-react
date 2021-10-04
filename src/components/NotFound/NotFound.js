import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <img src="https://cdn.dribbble.com/users/722246/screenshots/3066818/media/0f1c45dcf80e887f41b3c0080660fd37.gif" alt="" />
            <br />
            <Button variant="outline-secondary"><Link to="/home"><span>Back to Home</span></Link></Button>
             {/* https://i.pinimg.com/564x/f1/d2/84/f1d284f505931818a82277bf49f2c620.jpg */}
        </div>
    );
};

export default NotFound;