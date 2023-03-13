import React, {useContext} from 'react';
//Helpers
import {shorten, isInCart, quantityCount} from "../../helpers/functions";
//Context
import { CartContext } from "../../context/CartContextProvider";
//Icon
import trash from "../../assets/icon/trash.png";


const Product = ({productData}) => {

    const {state, dispatch} = useContext(CartContext);
    return (
        <div>
            <img src={productData.image} alt="product"/>
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div>
                {quantityCount(state, productData.id) > 1 && <button onClick={() => dispatch({type:"DECREASE", payload: productData})}>-</button>}
                {quantityCount(state, productData.id) === 1 && <button onClick={() => dispatch({type:"REMOVE_ITEM", payload: productData})}><img src={trash} alt="trash"/></button>}
                {quantityCount(state, productData.id) > 0 && <span>{quantityCount(state, productData.id)}</span>}
                {
                  isInCart(state, productData.id) ?
                  <button onClick={() => dispatch({type: "INCREASE", payload: productData})}>+</button> :
                  <button onClick={() => dispatch({type: "ADD_ITEM", payload: productData})}>Add to cart</button>
                }
            </div>
        </div>
    );
};

export default Product;