import { useState } from "react";
import request from "../../utils/request.js";
import { useNavigate } from "react-router";

export default function Register() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: '',
        rePass: '',
    });

    const changeHandler = (e) => {
        setData((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        if (data.password !== data.rePass) {
            return alert('Passwords must match!');
        }

        try {
            await request('http://localhost:3030/users/register', 'POST', { ...data });

            navigate('/');
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={submitHandler}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input type="email" value={data.email} onChange={changeHandler} id="email" name="email" placeholder="Your Email" />

                    <label htmlFor="pass">Password:</label>
                    <input type="password" value={data.password} onChange={changeHandler} name="password" id="register-password" placeholder="Password" />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input type="password" value={data.rePass} onChange={changeHandler} name="rePass" id="confirm-password" placeholder="Repeat Password" />

                    <input className="btn submit" type="submit" value="Register" />
                </div>
            </form>
        </section>
    );
}