import React from 'react';

import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import Instructor from '../Pages/Instructor/Instructor';
import Classes from '../Pages/Classes/Classes';
import { Login } from '../Pages/Login/Login';
import { SignUp } from '../Pages/SignUp/SignUp';

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/instructor',
          element: <Instructor></Instructor>
        },
        {
          path: '/classes',
          element: <Classes></Classes>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        }
        
      ]
    },
  
  ]);