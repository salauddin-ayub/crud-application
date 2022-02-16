import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return ( 
        <div className="header">
            <nav className="nav_links">
                <Link to="/">Home</Link>
                <Link to="/users">Players</Link>
                <Link to="/users/add">Add Players</Link>
            </nav> 
            
        </div>
    );
};

export default Header;