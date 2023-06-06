import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from "../home/Home";
const Login = () => {
   // const context = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const handleLogin = async (event) => {
        event.preventDefault();
        //console.log(email, password)
        let item = { email, password }
        const response = await fetch(`http://localhost:1812/api/auth/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item),
        });
        console.log(response)
        if (response.status === 200) {
            const data = await response.json();
            login(data)
            setTimeout(() => {
                navigate('/home');
            }, 2000);
        } else {
            alert('Invalid email or password');
        }
    };
    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Welcome FoodVN</h1>
                    <p>
                        FoodVN sẽ mang đến bạn một trải nghiệm người dùng một cách hiện đại, nơi
                        gặp của những người bạn trên mạng xã hội.
                    </p>
                    <span>Don't you have an account?</span>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)} />
                        <input type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)} />
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;

