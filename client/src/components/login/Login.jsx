import { useState } from "react";
import request from "../../utils/request.js";
import { useNavigate } from "react-router";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    };

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        try {
            request('http://localhost:3030/users/login', 'POST', { email, password });

            navigate('/');
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <section id="login-page">
            <form id="login" onSubmit={submitHandler}>
                <div className="container">
                    <h1>Login</h1>
                    <label htmlFor="email">Email</label>
                    <input type="email" value={email} onChange={emailChangeHandler} id="email" name="email" placeholder="Your Email" />

                    <label htmlFor="login-pass">Password</label>
                    <input type="password" value={password} onChange={passwordChangeHandler} id="login-password" name="password" placeholder="Password" />
                    <input type="submit" className="btn submit" value="Login" />
                </div>
            </form >
        </section >
    );
}