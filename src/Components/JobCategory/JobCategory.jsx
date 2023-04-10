import React, { useEffect, useState } from 'react';
import './JobCtegory.css';
import Category from '../Category/Category';


const JobCategory = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <div className='category-info'>
                <h1>Job Category List</h1>
                <p><small>Explore thousands of job opportunities with all the information you need. Its your future</small></p>
            </div>
            <div className='categories-cart'>
                {
                  categories.map(category =><Category
                   key={category.id}
                   category={category}
                  ></Category>)
                }
            </div>
        </div>
    );
};

export default JobCategory;