import './categories.css';
import Pen from '../../assets/pen.png';
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import CatModal from './CategorieModal/CatModal';
import Product from '../Products/Products';

function Categories() {
  const [showModal, setShowModal] = useState(false);
  const [categoryInfo, setCategoryInfo] = useState(null);

  const handleSaveCategory = (info) => {
    setCategoryInfo(info);
  };

  return (
    <>
      <div className='container-categories'>
        <div className="categories-wrap">
          <div className="categories-head">
            <h1 className="categories-title">Categories</h1>
            <button onClick={() => setShowModal(true)} className="login-btn">Create Product</button>
          </div>

          <div className="categories-product">
            {categoryInfo && (
              <div className="categories-product-head">
                <div className='prosta-div'>
                  <img className='categories-product-img' src={categoryInfo.selectedImage} alt={categoryInfo.name} />
                  <span className="categories-product-title">{categoryInfo.name}</span>
                </div>
                <div className="categories-button">
                  <button onClick={() => setShowModal(true)} className='login-btn categories-active'><img src={Pen} alt="Edit" /></button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {showModal && createPortal(<CatModal onSave={handleSaveCategory} close={() => setShowModal(false)} />, document.getElementById("modal-root"))}

      {categoryInfo && (
        <Product
          image={categoryInfo.selectedImage}
          name={categoryInfo.name}
          price="" // Provide the price for the category
        />
      )}
    </>
  );
}

export default Categories;
