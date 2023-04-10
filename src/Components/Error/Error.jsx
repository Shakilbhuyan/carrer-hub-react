import React from 'react';
import './Error.css'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='error-contaier'>
            <div class="sad-face">
                <div class="eyes"></div>
                <div class="mouth"></div>
            </div>

            <h1>404</h1>
            <h3>Page not Found</h3>
            <p>The page You are looking for doesn't exist or an other error occurred.<Link to="/">Go back</Link></p>
        </div>
    );
};

export default Error;