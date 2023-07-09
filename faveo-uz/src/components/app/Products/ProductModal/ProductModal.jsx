import React, { useState } from 'react';
import './productmodal.css';
import Vector from '../../../assets/vector.png';

function CatModal({ close, onSave }) {
  const [name, setName] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    setSelectedImage(URL.createObjectURL(selectedFile));
  };

  const handleSave = () => {
    onSave({ name, selectedImage });
    close();
  };

  return (
    <div className="categories-modal">
      <div className="categories-modal-wrap">
        <div className="categories-modal-head">
          <div className="categories-modal-item">
            <h1 className="categories-modal-title">Create category</h1>
            <button className='categories-modal-close' onClick={() => close()}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="categories-modal-product">
            <div className="categories-modal-img">
              <img className='categories-modal-image' src={selectedImage || Vector} alt='Selected Image' />
            </div>
            <div className='categories-modal-input'>
              <input
                className='cat-input'
                type="text"
                placeholder="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <input
                type="file"
                className='cat-input'
                onChange={handleImageChange}
              />
            </div>
          </div>
        </div>
        <div className="categories-modal-button">
          <button className='login-btn categories-modal-delete'>Delete</button>
          <button className='login-btn categories-modal-save' onClick={handleSave}>Save Changes</button>
        </div>
      </div>
    </div>
  );
}

export default CatModal;
