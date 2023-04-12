import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Job.css';

const Job = ({job}) => {
    const {id, img, jobTitle, companyName, remoteOrOnsite, salary, address} = job;
    const navigate =  useNavigate();

    const onViewDetailsClicked = () => {
        navigate(`/jobdetails/${id}`);
    }

    return (
        <div className='detail-container'>
            <img className='company-img' src={img} alt="" />
            <h4>{jobTitle}</h4>
             <p>{companyName}</p>
             <p className='places'>{remoteOrOnsite}</p>
             <p> {address};  Salary: <span>{salary}</span></p>
             <button className='btn-view' onClick={onViewDetailsClicked}>View Details</button>
        </div>
    );
};

export default Job;