import React from 'react';

import {shorten} from "../../helpers/functions";

const Product = ({productData}) => {

    return (
        <div>
            <img src={productData.image} alt="product"/>
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div>
                <a href="#">Details</a>
                <div>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;