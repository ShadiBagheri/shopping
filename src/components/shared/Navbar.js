import React, {useContext} from 'react';
import {Link} from "react-router-dom";
//Context
import { CartContext } from "../../context/CartContextProvider";
//Icon
import cart from "../../assets/icon/cart.png";


const Navbar = () => {
    const {state} = useContext(CartContext);
    return (
        <div>
          <Link to="/products">Products</Link>
            <div>
                <Link to="/cart"><img src={cart} alt="cart"/></Link>
                <img src={cart} alt="cart"/>
                <span>{state.itemsCounter}</span>
            </div>
        </div>
    );
};

export default Navbar;