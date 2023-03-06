import React from 'react';

//Context
import ProductContextProvider from "./context/ProductContextProvider";
//Components
import Home from "./components/Home";
import {Route} from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import CartContextProvider from "./context/CartContextProvider";

const App = () => {
    return (
      <ProductContextProvider>
              {/*<CartContextProvider></CartContextProvider>*/}
              {/*<Route path="/products/:id" element={<ProductDetails/>}/>*/}
              {/*<Route path="/products" element={<Home/>}/>*/}
          <Home/>
      </ProductContextProvider>
    );
};

export default App;