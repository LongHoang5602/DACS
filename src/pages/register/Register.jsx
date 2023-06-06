import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./register.scss";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from "../home/Home";

const Register = () => {
  const { register } = useContext(AuthContext);
  const context  = useContext(AuthContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();
    let item = { username, email, password };
    const response = await fetch('http://localhost:1812/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(item),
    });
    console.log(response)
    if (response.status === 200) {
      const data = await response.json();
      localStorage.setItem('access_token', data.access_token);
      context.setUser(data)
      console.log(data);
      setTimeout(()=>{
        navigate('/login');
    },2000)
    } else {
      alert('Registration failed. Please try again.');
    }
    
  };

  return (
    <div className="register">
    <div className="card">
        <div className="left">
            <h1>Food VN.</h1>
            <p>
                Welcome to Food Viet Nam
                Social Media top 1 VN

            </p>
            <span>Do you have an account?</span>

            <Link to="/login">
                <button>Login</button>
            </Link>
        </div>
        <div className="right">
            <h1>Register</h1>
            <form>
                <input type="text"
                            placeholder="UserName"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)} />
                <input type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)} />
                <input type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)} />
                        
                <button onClick={handleRegister}>Register</button>
            </form>
        </div>
    </div>
</div>
);
};

export default Register;