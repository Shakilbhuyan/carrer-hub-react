import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='nav-conatiner'>
            <h1>JobMarket</h1>
            <div className='link'>
                <Link to="/">Home</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/appliedjobs">Applied Jobs</Link>
                <Link to="/blog">Blog</Link>
            </div>
            <button className='header-btn'>Start Applying</button>
        </nav>
    );
};

export default Header;