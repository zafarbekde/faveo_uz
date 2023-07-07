import React from 'react'
import './categories.css'
import Vector from '../../assets/vector.png'
import Pen from '../../assets/pen.png'

function Categories() {
  return (
    <div className='container-categories'>
      <div className="categories-wrap">
        <div className="categories-head">
          <h1 className="categories-title">Categories</h1>
          <button className="login-btn">Create Product</button>
        </div>

        <div className="categories-product">
          <div className="categories-product-head">
            <img className='categories-product-img' src={Vector} />
            <span className="categories-product-title">Foods</span>
          </div>

          <div className="categories-button">
            <button className='login-btn categories-active'><img src={Pen} /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
