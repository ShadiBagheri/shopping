import React, {useContext} from 'react';
import {Link} from "react-router-dom";
//Context
import { CartContext } from "../../context/CartContextProvider";
//Icon
import cart from "../../assets/icon/cart.png";
import search from "../../assets/icon/search.png";


const Navbar = () => {

    const {state} = useContext(CartContext);

    return (
        <div>
            <div>
                <img src={search} alt="search"/>
                <input type="text" placeholder="search"/>
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