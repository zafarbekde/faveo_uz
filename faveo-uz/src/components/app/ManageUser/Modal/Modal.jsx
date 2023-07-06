import './modal.css'
import Inputs from '../../../Inputs'
import React, { useRef, useState } from 'react';


function Modal({ close }) {

    const emailRef = useRef();
    const passwordRef = useRef();
    const userRef = useRef();
    const surnameRef = useRef();
    const birthdayRef = useRef();
    const phoneRef = useRef();

    return (
        <div className='container-modal'>
            <div className="wrap-modal">
                <div className="modal-close">
                    <button className='modal-close-btn' onClick={() => close()}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                </div>

                <div className="modal-input">
                    <div className='modal-head'>
                        <h1 className='modal-title'>Personal Data</h1>

                    </div>
                    <input
                        ref={emailRef}
                        type="email"
                        placeholder="Email"
                        className="modal-active"
                    />

                    <input
                        ref={userRef}
                        type="text"
                        placeholder="Name"
                        className="modal-active"
                    />

                    <input
                        ref={surnameRef}
                        type="text"
                        placeholder="Surname"
                        className="modal-active"
                    />

                    <input
                        ref={birthdayRef}
                        type="text"
                        placeholder="Birthday"
                        className="modal-active"
                    />

                    <input
                        ref={phoneRef}
                        type="phone"
                        placeholder="Phone"
                        className="modal-active"
                    />

                    <button className='login-btn modal-btn'> Save Changes</button>
                </div>

                <div className="user-access">
                    <h1 className='modal-title'>User Access</h1>
                    <div className="user-access-wrap">
                        <input className="modal-active" type="password" placeholder="New Password" />
                        <input className="modal-active" type="password" placeholder="Retype Password" />
                        <div className="modal-select">
                            <select className='modal-active'>
                                <option value="0">Administrator</option>
                                <option value="1">User</option>
                            </select>
                            <button className='login-btn'>Update Access</button>
                        </div>
                    </div>
                </div>

                <div className="delete-user">
                    <h1 className='delete-user-title'>Danger Zone</h1>
                    <button className='login-btn delete-active'>Delete User</button>
                </div>
            </div>

        </div>
    )
}

export default Modal
