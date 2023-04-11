import React from 'react';
import './Job.css'

const Job = ({job}) => {
    const {img, jobTitle, companyName, remoteOrOnsite, salary, address} = job;
    return (
        <div className='detail-container'>
            <img className='company-img' src={img} alt="" />
            <h4>{jobTitle}</h4>
             <p>{companyName}</p>
             <p className='places'>{remoteOrOnsite}</p>
             <p> {address};  Salary: <span>{salary}</span></p>
             <button className='btn-view'>View Details</button>
        </div>
    );
};

export default Job;