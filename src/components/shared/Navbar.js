import React, { useContext } from 'react';
import {Link} from "react-router-dom";
//Components
import Login from "./Login";
//Context
import { CartContext } from "../../context/CartContextProvider";
//Icon
import cart from "../../assets/icon/cart.png";
import user from "../../assets/icon/user.png";
//styles
import styles from "../shared/Navbar.module.css";

const Navbar = () => {

    const {state} = useContext(CartContext);

    return (
        <div className={styles.mainContainer}>

             <div className={styles.container}>
                <Link className={styles.productLink} to="/products">Products</Link>
                <div className={styles.iconContainer}>
                    <Link className={styles.userIcon} to="/SignUp" ><img src={user} alt="user"/></Link>
                    <Link to="/cart"><img src={cart} alt="cart"/></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;