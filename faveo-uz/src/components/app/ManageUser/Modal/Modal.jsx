import React from 'react'
import './modal.css'

function Modal({close}) {
  return (
    <div className='container-modal'>
      <h1>fuck</h1>
      <input type="text" placeholder='name'/>
      <button onClick={() => close()}> close</button>
    </div>
  )
}

export default Modal
