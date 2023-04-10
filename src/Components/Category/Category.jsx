import React from 'react';
import './Category.css'

const Category = ({category}) => {
    const {img, name, seats} = category;
    return (
        <div className='category-container'>
          <img src={img} alt="" />
          <h3>{name}</h3>
          <p><small>{seats} seats Available</small></p>
        </div>
    );
};

export default Category;