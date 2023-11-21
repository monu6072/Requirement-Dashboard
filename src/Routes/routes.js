import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import Main from '../Layout/Main';
import Firstpage from '../Layout/Firstpage'
import Jobapplied from '../Components1/Jobapplied';
import Recommendedblogs from '../Components2/Recommendedblogs';
import Productmanager from '../Components3/Productmanager';
import Login from '../Components3/login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path:'/',
        element:<Firstpage/>

      },
      //{
        //path:'/Firstpage',
        //element: <Firstpage/>

      //},
      {
        path: '/Jobapplied',
        element: <Jobapplied></Jobapplied>
      },
      {
        path:'/Blog',
        element:<Recommendedblogs></Recommendedblogs>
      },
      {
        path:'/view',
        element:<Productmanager></Productmanager>

      },
      {
        path:'/profile',
        element:<Login/>

      },
    ],
  },
]);

export default router;
