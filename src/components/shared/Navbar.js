import React, { useContext } from 'react';
import {Link} from "react-router-dom";
//Components
import Login from "./Login";
//Context
import { CartContext } from "../../context/CartContextProvider";
//Icon
import cart from "../../assets/icon/cart.png";
import user from "../../assets/icon/user.png";

const Navbar = () => {

    const {state} = useContext(CartContext);

    return (
        <div>
            <div>
                <div>
                   <Link to="/SignUp" ><img src={user} alt="user"/></Link>

                </div>
            </div>
             <div>
                <Link to="/products">Products</Link>
                <div>
                    <Link to="/cart"><img src={cart} alt="cart"/></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;