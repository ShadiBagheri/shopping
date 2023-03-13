import React, { useContext } from 'react';
import {Link, useParams} from "react-router-dom";
//Context
import { ProductContext } from "../context/ProductContextProvider";


const ProductDetails = (props) => {
    const params =useParams();
    const id = params.id;
    const data = useContext(ProductContext);
    const product = data[id - 1];
    const [image, title, description, price, category] = product;

    return (
        <div>
           <img src={image} alt="product"/>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p><span>Category:</span>{category}</p>
            </div>
            <div>
                <span>{price} $</span>
                <Link to="/products">Back to shop</Link>
            </div>
        </div>
    );
};

export default ProductDetails;