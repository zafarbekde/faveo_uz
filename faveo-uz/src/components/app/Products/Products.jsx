import React from 'react'
import './products.css'

function Products() {
  return (
    <div className='product-container'>
      <div className="product-wrapper">
        <div className="product-header">
          <div className="product-head">
            <h1 className='product-header-title'>Product</h1>
            <button className='login-btn product-header-button'>Create-Product</button>
          </div>

          <div className="product-header-filter">
            <select className='product-filter-categories'> 
              <option value="1">By Categories</option>
              <option value="2">Eng Oxirgi</option>
              <option value="3">Eng Yangi </option>
            </select>

            <select className='product-filter-name'>
              <option value="1">By Name</option>
              <option value="2">By Price</option>
              <option value="3">By Popular</option>
              <option value="4">By Rate</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
