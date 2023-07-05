  import React from 'react'
  import './home.css'
function HomePage() {
  return (
    <div className='home-container'>
      <div className="home-wrapper">
        <nav className="home-nav-title">
          <h1>Faveo</h1>
        </nav>

        <div className="home-sidebar">
          <ul className='home-sidebar-item'>
            <li>Manage Users</li>
            <li>Categories</li>
            <li>Products</li>
            <li>Orders</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HomePage
