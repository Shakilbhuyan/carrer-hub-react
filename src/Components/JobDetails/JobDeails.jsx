import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addAppliedJobIDS, getAppliedJobIDS } from '../../utilities/fakedb';
import './JobDeails.css'

const JobDeails = () => {
    const { jobID } = useParams();
    const [job, setJob] = useState({});

    const [appliedJobIDS, setAppliedJobIDs] = useState(getAppliedJobIDS());

    useEffect(() => {
        fetch('/jobList.json')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setJob(data.find(job => job.id === +jobID)));
    }, [jobID])
    return (
        <div>
            <h1 className='jobDetails-title'>Job Details</h1>
            <div className='detail-total-info'>
                <div className='detail-info'>
                    <p><span>Job Description: </span>{job.jobDescription}</p>
                    <p><span>Job Responsibilities: </span>{job.jobResponsibilities}</p>
                    <p><span>Educational Requirements: </span>{job.educationalRequirements}</p>
                    <p><span>Experiences: </span>{job.experience}</p>
                </div>
                <div className='cart-info'>
                    <p><span>Salary: </span>{job.salary}</p>
                    <p><span>Job title: </span>{job.jobTitle}</p>
                    <h6>Contact infomartion</h6>
                    <hr />
                    <p><span>Phone:</span>{job.contactNumber}</p>
                    <p><span>E-mail:</span>{job.email}</p>
                    <p><span>Address:</span>{job.address}</p>
                    {
                        appliedJobIDS.indexOf(jobID) === -1 && <button className='btn-apply' onClick={() => setAppliedJobIDs(addAppliedJobIDS(jobID))}>Apply Now</button>
                    }
                    {
                        appliedJobIDS.indexOf(jobID) === -1 || <button className='btn-apply' >Already Applied</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default JobDeails;