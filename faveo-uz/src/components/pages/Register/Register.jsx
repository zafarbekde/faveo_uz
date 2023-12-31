import React, { useRef, useState } from 'react';
import axios from 'axios';
import '../Login/login.css';
import { Link, Route, Routes } from "react-router-dom";
import Inputs from '../../Inputs';


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
          <Inputs
            ref={emailRef}
            type="email"
            placeholder="Email"
          />
          <Inputs
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />

          <Inputs
            ref={userRef}
            type="text"
            placeholder="Name"
          />

          <Inputs
            ref={surnameRef}
            type="text"
            placeholder="Surname"
          />

          <Inputs
            ref={birthdayRef}
            type="text"
            placeholder="Birthday"
            
          />

          <Inputs
            ref={phoneRef}
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
