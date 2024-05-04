import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider, createHashRouter } from 'react-router-dom'
import Home from './sections/home/Home';
import AboutMe from './sections/aboutme/AboutMe';
import AboutThis from './sections/aboutthis/AboutThis';

const router = createHashRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/me',
    element: <AboutMe/>
  },
  {
    path: '/this',
    element: <AboutThis/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
