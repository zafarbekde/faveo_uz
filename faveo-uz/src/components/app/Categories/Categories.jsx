import './categories.css'
import Vector from '../../assets/vector.png'
import Pen from '../../assets/pen.png'
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import CatModal from './CategorieModal/CatModal'

function Categories() {

  const [showModal, setShowModal] = useState(false);

  const items = [
    { id: 1, title: 'Food', image: Vector, button: Pen },
    { id: 2, title: 'Food', image: Vector, button: Pen },
    { id: 3, title: 'Food', image: Vector, button: Pen },
    { id: 4, title: 'Food', image: Vector, button: Pen },
    { id: 5, title: 'Food', image: Vector, button: Pen },
    { id: 6, title: 'Food', image: Vector, button: Pen },
    { id: 7, title: 'Food', image: Vector, button: Pen },
    { id: 8, title: 'Food', image: Vector, button: Pen },
    { id: 9, title: 'Food', image: Vector, button: Pen },
    { id: 10, title: 'Food', image: Vector, button: Pen },
  ]

  return (
    <>
      <div className='container-categories'>
        <div className="categories-wrap">
          <div className="categories-head">
            <h1 className="categories-title">Categories</h1>
            <button onClick={() => setShowModal(true)} className="login-btn">Create Product</button>
          </div>

          <div className="categories-product">
            {items.map((item) => (
              <div key={item.id} className="categories-product-head">
                <div className='prosta-div'>
                  <img className='categories-product-img' src={item.image} />
                  <span className="categories-product-title">{item.title}</span>
                </div>
                <div className="categories-button">
                  <button onClick={() => setShowModal(true)} className='login-btn categories-active'><img src={item.button} /></button>
                </div>
              </div>


            ))}
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
