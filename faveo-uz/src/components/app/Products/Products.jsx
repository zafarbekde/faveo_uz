import React from 'react';
import './products.css';
import Pen from '../../assets/pen.png';

function Product({ product }) {
  const { selectedImage, name, price } = product || {}; // Assign an empty object as the default value

  return (
    <div className='card'>
      <div className="card-category">
        {selectedImage && (
          <img className='card-category-img' src={selectedImage} alt={name} />
        )}
        <span className='card-category-title'>{name}</span>
      </div>
      {selectedImage && (
        <img className="card-image" src={selectedImage} alt={name} />
      )}
      <div className="card-details">
        <div className="product-details">
          <h2 className="card-name">{name}</h2>
          <p className="card-price">${price}</p>
        </div>
        <button className="card-button">
          <img className='card-product-img' src={Pen} alt="Edit" /> Edit
        </button>
      </div>
    </div>
  );
}

export default Product;
