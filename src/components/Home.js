import React, { useContext } from 'react';
//Context
import { ProductContext } from "../context/ProductContextProvider";
//Components
import Product from "./shared/Product";
//Styles
import styles from "./Home.module.css";

const Home = () => {

    const products = useContext(ProductContext);

    return (
        <div className={styles.container}>
            {
                products.map(product => <Product
                    key={product.id}
                    productData = {product}
                />)
            }
        </div>
    );
};

export default Home;