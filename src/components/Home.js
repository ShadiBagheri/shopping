import React, {useContext} from 'react';
//Context
import {ProductContext} from "../context/ProductContextProvider";
//Components
import Product from "./shared/Product";

const Home = () => {

    const products = useContext(ProductContext);
    return (
        <div>
            {
                products.map(product => <Product
                    key={product.id}
                    productData={product}
                />)
            }
        </div>
    );
};

export default Home;