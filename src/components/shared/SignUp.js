import React, {useEffect, useState} from 'react';
import {validate} from "./validate";
import styles from "./SignUp.module.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {notify} from "./Toast";
import {Link} from "react-router-dom";

const SignUp = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: false
    })
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    useEffect(() => {
        setErrors(validate(data,"signup"));
    },[data, touched]);
    const changeHandler = event => {
        if (event.target.name === "isAccepted") {
            setData({ ...data, [event.target.name]: event.target.checked })
        } else {
            setData({ ...data, [event.target.name]: event.target.value })
        }
    }
    const focusHandler = event => {
        setTouched({...touched, [event.target.name]: true})
    }
    const submitHandler = event => {
        event.preventDefault();
        if (!Object.keys(errors).length){
            notify("You signed up successfully", "success");
        } else{
            notify("Invalid data!", "error");
            setTouched({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccepted: true
            })
        }
    }
    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <h2 className={styles.header}>Sign Up</h2>
                <div className={styles.formFiled}>
                    <label>Name</label>
                    <input
                        className={(errors.name && touched.name) ? styles.unCompleted : styles.formInput}
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                    />
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
                <div className={styles.formFiled}>
                    <label>Email</label>
                    <input className={(errors.email && touched.email) ? styles.unCompleted : styles.formInput}
                           type="text"
                           name="email"
                           value={data.email}
                           onChange={changeHandler}
                           onFocus={focusHandler}/>
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.formFiled}>
                    <label>Password</label>
                    <input className={(errors.password && touched.password) ? styles.unCompleted : styles.formInput}
                           type="password"
                           name="password"
                           value={data.password}
                           onChange={changeHandler}
                           onFocus={focusHandler}/>
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div className={styles.formFiled}>
                    <label>Confirm Password</label>
                    <input className={(errors.confirmPassword && touched.confirmPassword) ? styles.unCompleted : styles.formInput}
                           type="password"
                           name="confirmPassword"
                           value={data.confirmPassword}
                           onChange={changeHandler}
                           onFocus={focusHandler}/>
                    {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                <div className={styles.formFiled}>
                    <div className={styles.checkBoxContainer}>
                        <label>I accept terms of privacy policy</label>
                        <input
                            type="checkbox"
                            name="isAccepted"
                            value={data.isAccepted}
                            onChange={changeHandler}
                            onFocus={focusHandler}/>
                    </div>
                    {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
                </div>
                <div className={styles.formButtons}>
                    <Link to="/Login">Login</Link>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;