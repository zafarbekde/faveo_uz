import React, { useRef, useState } from 'react';
import axios from 'axios';
import '../Login/login.css';
import { Link, Route, Routes } from "react-router-dom";


function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const userRef = useRef();
  const surnameRef = useRef();
  const birthdayRef = useRef();
  const phoneRef = useRef();


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

    <div className="container-login">
      <nav className="login-nav">
        <h1 className="login-title">Faveo</h1>
      </nav>

      <div className="login-wrap">
        <div className="login-form">
          <h1 className="login-form-title">Register</h1>
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

          <input
            ref={userRef}
            className="login-form-email"
            type="text"
            placeholder="Name"
          />

          <input
            ref={surnameRef}
            className="login-form-email"
            type="text"
            placeholder="Surname"
          />

          <input
            ref={birthdayRef}
            className="login-form-email"
            type="date"
            placeholder="Birthday"
            
          />

          <input
            ref={phoneRef}
            className="login-form-email"
            type="phone"
            placeholder="Phone"
          />
          <button onClick={requestLogin} className="login-btn">
            Register
          </button>
          <Link to={"/login"}><button className="login-btn active">Back to Login</button></Link>
        </div>
      </div>
    </div>

  );
}

export default Login;
