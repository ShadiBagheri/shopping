import React, {useEffect, useState} from 'react';
import {validate} from "./validate";
// import styles from "./SignUp.module.css";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {notify} from "./Toast";
import {Link} from "react-router-dom";



const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    useEffect(() => {
        setErrors(validate(data,"login"));
    },[data, touched]);
    const changeHandler = event => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const focusHandler = event => {
        setTouched({...touched, [event.target.name]: true})
    }
    const submitHandler = event => {
        event.preventDefault();
        if (!Object.keys(errors).length){
            notify("You logged in successfully", "success");
        } else{
            notify("Invalid data!", "error");
            setTouched({
                email: true,
                password: true,
            })
        }
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <h2>Login</h2>
                <div>
                    <label>Email</label>
                    <input
                        // className={(errors.email && touched.email) ? styles.unCompleted : styles.formInput}
                           type="text"
                           name="email"
                           value={data.email}
                           onChange={changeHandler}
                           onFocus={focusHandler}/>
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <label>Password</label>
                    <input
                        // className={(errors.password && touched.password) ? styles.unCompleted : styles.formInput}
                           type="password"
                           name="password"
                           value={data.password}
                           onChange={changeHandler}
                           onFocus={focusHandler}/>
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div>
                    <Link to="/SignUp">Sign Up</Link>
                    <button type="submit">Login</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;