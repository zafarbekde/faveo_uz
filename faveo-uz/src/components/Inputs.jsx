import React, { forwardRef, createRef } from 'react'

const Inputs = forwardRef(({ placeholder, type }, ref) => {
    return (
        <input
            ref={ref}
            className="login-form-email"
            type={type}
            placeholder={placeholder}
        />
    )
})


export default Inputs
