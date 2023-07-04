import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom'
import Login from './components/pages/Login/Login.jsx'
import HomePage from './components/pages/Home/HomePage.jsx'
import Register from './components/pages/Register/Register.jsx'

const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/login"}/> 
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/home",
    element: <HomePage/>
  },
  {
    path: "/register",
    element: <Register/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={rootRouter}>
    <App />
  </RouterProvider>
)
