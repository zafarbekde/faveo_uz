import React from 'react'
import './products.css'
import Pen from '../../assets/pen.png'

function Products({ image, name, price, category }) {
  return (
    <div className='product-container'>
      <div className="product-wrapper">
        <div className="product-header">
          <div className="product-head">
            <h1 className='product-header-title'>Product</h1>
            <button className='login-btn product-header-button'>Create-Product</button>
          </div>

          <div className="product-header-filter">
            <select className='modal-active product-filter-categories'>
              <option value="1">By Categories</option>
              <option value="2">Eng Oxirgi</option>
              <option value="3">Eng Yangi </option>
            </select>

            <select className='modal-active product-filter-name'>
              <option value="1">By Name</option>
              <option value="2">By Price</option>
              <option value="3">By Popular</option>
              <option value="4">By Rate</option>
            </select>
          </div>
        </div>

        <div className="product-card">
          <div className="card">
            <div className="card-category">
                
            </div>
            <img className="card-image" src={image} alt={name} />
            <div className="card-details">
              <div className="product-details">
                <h2 className="card-name">{name}</h2>
                <p className="card-price">${price}</p>
              </div>
              <button className="card-button"><img className='card-product-img' src={Pen} /> Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
