import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Login from './components/pages/Login/Login.jsx'
import HomePage from './components/pages/Home/HomePage.jsx'
import Register from './components/pages/Register/Register.jsx'
import ManageUser from './components/app/ManageUser/ManageUser.jsx'
import Categories from './components/app/Categories/Categories.jsx'
import Products from './components/app/Products/Products.jsx'
import Orders from './components/app/Orders/Orders.jsx'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/login"} />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/home",
    element: <HomePage />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/manageuser",
    element: <ManageUser />
  },
  {
    path: "/categories",
    element: <Categories />
  },
  {
    path: "/products",
    element: <Products />
  },
  {
    path: "/orders",
    element: <Orders />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={rootRouter}>
    <QueryClientProvider client={QueryClient}>
      <App />
    </QueryClientProvider>
  </RouterProvider>

)
