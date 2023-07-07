import './categories.css'
import Vector from '../../assets/vector.png'
import Pen from '../../assets/pen.png'
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import CatModal from './CategorieModal/CatModal'

function Categories() {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
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
              <button onClick={() => setShowModal(true)} className='login-btn categories-active'><img src={Pen} /></button>
            </div>
          </div>
        </div>
      </div>

      {
        showModal && createPortal(<CatModal close={() => setShowModal(false)} />, document.getElementById("modal-root"))
      }
    </>
  )
}

export default Categories
