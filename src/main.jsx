import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import Statistics from './Components/Statistics/Statistics';
import Error from './Components/Error/Error';
import JobDeails from './Components/JobDetails/JobDeails';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';

const router = createBrowserRouter([
      {
        path:'/',
        element:<Layout></Layout>,
         children:[
          {
            path:'/',
            element:<Home></Home>
          },
          {
             path:'statistics',
             element:<Statistics></Statistics>
          },
          {
           path:'/appliedjobs',
           element:<AppliedJobs></AppliedJobs>
          },
          {
           path:'/jobdetails/:jobID',
           element:<JobDeails></JobDeails>
          },
          {
            path:'/blog',
            element:<Blog></Blog>
          },
          {
            path:'*',
            element:<Error></Error>
          }
         ]
      }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
