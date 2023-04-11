import React, { useEffect, useState } from 'react';

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
            <h1>Featured Jobs</h1>
            <p><small>Explore thousands of job opportunities with all the information you need. Its your future</small></p>
            <div>
                {
                  
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;