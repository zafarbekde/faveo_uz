import React from 'react'
import './CatModal.css'
import Vector from '../../../assets/vector.png'

function CatModal({ close }) {
    return (
        <div className="categories-modal">
            <div className="categories-modal-wrap">
                <div className="categories-modal-head">
                    <div className="categories-modal-item">
                        <h1 className="categories-modal-title">Create category</h1>
                        <button onClick={() => close()}>Close</button>
                    </div>
                    <div className="categories-modal-product">
                        <div className="categories-modal-img">
                            <img src={Vector} />
                        </div>
                        <div className='categories-modal-input'>
                            <input className='cat-input' type="text" placeholder="Name" />
                            <input className='cat-input' type="none" placeholder="Select Logo" />
                        </div>
                    </div>
                </div>
                <div className="categories-modal-button">
                    <button className='login-btn categories-modal-delete'>Delete</button>
                    <button className='login-btn categories-modal-save'>Save Changes</button>
                </div>
            </div>
        </div>
    )
}

export default CatModal