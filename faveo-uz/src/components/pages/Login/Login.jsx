import React, { useRef } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import axios from 'axios';
import '../Login/login.css';
import Register from '../Register/Register'

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const rootReg = () => {
        createBrowserRouter([
            {
                path: "/register",
                element: <Register />
            }
        ])
    }
    const requestLogin = async () => {
        const url = 'http://faveo.uz:8080/api/v1/auth';
        const body = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };

        try {
            const response = await axios.post(url, body);
            console.log(response.status);
            console.log(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    

    return (
        <RouterProvider router={rootReg}>
            <div className="container-login">
                <nav className="login-nav">
                    <h1 className="login-title">Faveo</h1>
                </nav>

                <div className="login-wrap">
                    <div className="login-form">
                        <h1 className="login-form-title">Login</h1>
                        <input
                            ref={emailRef}
                            className="login-form-email"
                            type="email"
                            placeholder="Email"
                        />
                        <input
                            ref={passwordRef}
                            className="login-form-password"
                            type="password"
                            placeholder="Password"
                        />
                        <button onClick={requestLogin} className="login-btn">
                            Login
                        </button>
                        <button onClick={rootReg} className="login-btn active">Register</button>
                    </div>
                </div>
            </div>
        </RouterProvider>
    );
}

export default Login;