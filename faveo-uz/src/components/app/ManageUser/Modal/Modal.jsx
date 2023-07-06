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
                <h1 className='modal-title'>Personal Data</h1>
                <button onClick={() => close()}> close</button>

                <div className="modal-input">
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
                            <select>
                                <option value="0">Administrator</option>
                                <option value="1">User</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Modal
