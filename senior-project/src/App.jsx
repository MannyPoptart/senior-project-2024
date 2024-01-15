import React from 'react'
import {createBrowserRouter, RouterProvider, Route, Link, Outlet} from 'react-router-dom'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import Belligol from './pages/belligol'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/belligol',
    element: <Belligol />,
  
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
  
])


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App