import React from 'react'
import './home.css'
import User from '../../assets/users.png'
import Box from '../../assets/box.png'
function HomePage() {
  return (
    <div className='home-container'>
      <div className="home-wrapper">
        <nav className="home-nav-title">
          <h1>Faveo</h1>
        </nav>

        <div className="home-sidebar">
          <div className="home-siderbar-ul">
            <ul>
              <li className='home-sidebar-item'> <img src={User} /> Manage Users</li>
              <li className='home-sidebar-item'> <img src={Box} /> Categories</li>
              <li className='home-sidebar-item'> <img src={Box} /> Products</li>
              <li className='home-sidebar-item'> <img src={Box} /> Orders</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
