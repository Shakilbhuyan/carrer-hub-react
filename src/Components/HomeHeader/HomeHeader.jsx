import React from 'react';
import './HomeHeader.css';
import picture from '../../assets/Icons/All Images/P3OLGJ1 copy 1.png'

const HomeHeader = () => {
    return (
        <div className='container'>
            <div className='header-info'>
                <h1>One Step Closer To Your <span className='purple'>Dream Job.</span></h1>
                <p><small >Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</small></p>
                <button className='btn-start'>Get Started</button>
            </div>
          <img className='header-img' src={picture} alt="" />
        </div>
    );
};

export default HomeHeader;