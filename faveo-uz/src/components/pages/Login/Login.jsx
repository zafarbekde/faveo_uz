import React from 'react'
import '../Login/login.css'

function Login() {
    return (
        <div className='container-login'>
            <nav className="login-nav">
                <h1 className='login-title'>Faveo</h1>
            </nav>

            <div className="login-wrap">

                <div className="login-form">
                    <h1 className='login-form-title'>Login</h1>
                    <input className='login-form-email' type="email" placeholder='Email' />
                    <input className='login-form-password' type="password" placeholder='Password' />
                    <button className="login-btn">Login</button>
                    <button className="login-btn active">Register</button>
                </div>
            </div>
        </div>
    )
}

export default Login
