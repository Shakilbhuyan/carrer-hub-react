import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAppliedJobIDS } from '../../utilities/fakedb';
import './AppliedJobs.css';

const AppliedJob = ({ job }) => {
    const navigate = useNavigate();
    return <div className='applied-job'>
        <div className='applied-job-details'>
            <img src={job.img} width={130} height={130} />
            <div>
                <h3>{job.jobTitle}</h3>
                <p>{job.companyName}</p>
                <span style={{ border: "2px solid pink", padding: "5px", borderRadius: "5px" }}>{job.remoteOrOnsite}</span>
                <p style={{ display: "flex", gap: "20px", fontSize: "12px" }}><span>{job.address}</span> <span>{`$ Salary ${job.salary}`}</span></p>
            </div>
        </div>
        <button className='btn-view' onClick={() => navigate(`/jobdetails/${job.id}`)}>View Details</button>
    </div>
}

const AppliedJobs = () => {

    const appliedJobsIDs = getAppliedJobIDS();
    const [allJobs, setAllJobs] = useState([]);

    useEffect(() => {
        fetch('/jobList.json')
            .then(res => res.json())
            .then(data => setAllJobs(data))
    }, []);

    return (
        <>
            <div id='applied-job-banner' style={{display: "flex", justifyContent: "center", alignItems: "center", height: "250px"}}>
                <h1>Applied Jobs</h1>
            </div>
            <div id='applied-job-container'>
                {
                    appliedJobsIDs.map(appliedJobsID => {
                        const appliedJob = allJobs.find(job => job.id === +appliedJobsID);
                        if (appliedJob) {
                            return <AppliedJob key={appliedJobsID} job={appliedJob} />;
                        }
                        return null;
                    })
                }
            </div>
        </>
    );
};

export default AppliedJobs;