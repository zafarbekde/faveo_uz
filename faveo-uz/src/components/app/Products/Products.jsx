
import './products.css';
import Pen from '../../assets/pen.png';
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ProductModal from './ProductModal/ProductModal';

function Products({ image, name, price }) {
  const [showModal, setShowModal] = useState(false);
  const handleSaveProduct = (info) => {
    setCategories([...categories, info]);
  };

  return (
    <div className='product-container'>
      <div className="product-wrapper">
        <div className="product-header">
          <div className="product-head">
            <h1 className='product-header-title'>Product</h1>
            <button onClick={() => setShowModal(true)} className='login-btn product-header-button'>Create-Product</button>
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
              <img className='card-category-img' src={image} />
              <span className='card-category-title' >{name}</span>
            </div>
            <img className="card-image" src={"image"}  />
            <div className="card-details">
              <div className="product-details">
                <h2 className="card-name">{""}</h2>
                <p className="card-price">${price}</p>
              </div>
              <button className="card-button"><img className='card-product-img' src={Pen} alt="Edit" /> Edit</button>
            </div>
          </div>
        </div>
      </div>
      {showModal && createPortal(<ProductModal onSave={handleSaveProduct} close={() => setShowModal(false)} />, document.getElementById("modal-root"))}
    </div>
  );
}

export default Products;
