import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog-container'>
            <h1>a. When should you use context API?</h1>
            <p>Ans : The Context API in React should be used when you need to share data between multiple components that are not directly related to each other in the component tree. It provides a way to pass data down the component tree without having to pass props manually at every level.</p>
            <h1>b. What is a custom hook?</h1>
            <p>Ans : A custom hook in React is a reusable function that encapsulates a specific behavior or logic, allowing you to reuse that code across different components. Custom hooks are a powerful feature in React because they let you extract complex logic from your components into a separate function that can be easily reused and tested.</p>
            <h1>c.What is useRef?</h1>
            <p>Ans : useRef is a hook in React that provides a way to store mutable values that persist across renders. Unlike state, updating a value stored in a useRef doesn't trigger a re-render of the component.
                The most common use case for useRef is to access the DOM element of a component, but it can also be used to store other mutable values.</p>
            <h1>d. What is useMemo?</h1>
            <p>Ans : useMemo is a hook in React that allows you to memoize the result of a function and avoid unnecessary computations on each render.
                The useMemo hook takes two arguments: a function that returns a value, and an array of dependencies. The function will only be executed when one of the dependencies has changed. If none of the dependencies have changed since the last render, the previous result of the function will be returned instead of recomputing the value.</p>
        </div>
    );
};

export default Blog;