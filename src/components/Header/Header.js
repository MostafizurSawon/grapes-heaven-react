import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
             <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/success">Success Story</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
        </ul>
        </div>
    );
};

export default Header;