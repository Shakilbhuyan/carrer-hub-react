import React, { useEffect, useState } from 'react';
import './FeaturedJobs.css'
import Job from '../Job/Job';

const FeaturedJobs = () => {
    const [alljobs, setAllJobs] = useState([]);
    const [jobs, setJobs] = useState([]);
    useEffect(()=>{
        fetch('jobList.json')
        .then(res => res.json())
        .then(data=>setAllJobs(data))
    },[]);

    useEffect(()=>{
        const fourJobs = alljobs.slice(0,4);
        setJobs(fourJobs);

    },[alljobs])

    const seeAllBtn = () =>{
        //   setAllJobs(alljobs);
          setJobs(alljobs);
    }

    return (
        <div>
           <div className='feature-info'>
           <h1>Featured Jobs</h1>
            <p><small>Explore thousands of job opportunities with all the information you need. Its your future</small></p>
           </div>
            <div className='featured-conatiner'>
                {
                  jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <button className={`btn-feature ${jobs.length === 6 ? 'btn-hidden' : ''}` } onClick={seeAllBtn} >See All</button>
        </div>
    );
};

export default FeaturedJobs;