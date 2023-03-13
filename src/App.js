import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
// Components
import Navbar from './components/shared/Navbar';
import ProductDetails from "./components/ProductDetails";
import Home from "./components/Home";
import ShopCart from "./components/ShopCart";
// Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';


function App() {
    return (
        <ProductContextProvider>
              <CartContextProvider>
                  <Navbar/>
                  <Switch>
                      <Route path="/products/:id" component={ProductDetails}/>
                      <Route path="/products" component={Home}/>
                      <Route path="/cart" component={ShopCart}/>
                      <Redirect to="/products"/>
                  </Switch>
              </CartContextProvider>
        </ProductContextProvider>
    );
}

export default App;
