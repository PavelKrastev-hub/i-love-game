import { useState } from "react";
import request from "../../utils/request.js";
import { useNavigate } from "react-router";

export default function Login() {
    const navigate = useNavigate();

    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const changeHandler = (e) => {
        setData((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    }

    const submitHandler = (e) => {
        e.preventDefault();

        try {
            request('http://localhost:3030/users/login', 'POST', { ...data });

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
                    <input type="email" value={data.email} onChange={changeHandler} id="email" name="email" placeholder="Your Email" />

                    <label htmlFor="login-pass">Password</label>
                    <input type="password" value={data.password} onChange={changeHandler} id="login-password" name="password" placeholder="Password" />
                    <input type="submit" className="btn submit" value="Login" />
                </div>
            </form >
        </section >
    );
}