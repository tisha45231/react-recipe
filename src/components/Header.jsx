import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <nav className="green darken-1">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">Home</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/about">Contact</Link></li>
                    <li><Link to="/contacts">About</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;