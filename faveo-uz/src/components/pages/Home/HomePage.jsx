import React from 'react'
import './home.css'
import User from '../../assets/users.png'
import Box from '../../assets/box.png'
import { Link, Route, Routes } from "react-router-dom";
function HomePage() {
  return (
    <>
    <div className='home-container'>
      <div className="home-wrapper">
        <nav className="home-nav-title">
          <h1>Faveo</h1>
        </nav>

        <div className="home-sidebar">
          <div className="home-siderbar-ul">
            <ul>
              <Link to={"/manageuser"}><li className='home-sidebar-item'> <img src={User} /> Manage Users</li></Link>
              <Link to={"/categories"}><li className='home-sidebar-item'> <img src={Box} /> Categories</li> </Link>
              <Link to={"/products"}><li className='home-sidebar-item'> <img src={Box} /> Products</li></Link>
              <Link to={"/orders"}><li className='home-sidebar-item'> <img src={Box} /> Orders</li></Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default HomePage
