import { Route, Routes, Navigate } from "react-router-dom";

// Components
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';

// Context
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from './context/CartContextProvider';

function App() {
    return (
        <ProductContextProvider>
            <CartContextProvider>
                <Navbar />
                    <Routes>
                        <Route path="/products/:id" element={<ProductDetails/>} />
                        <Route path="/products" element={<Home/>} />
                        <Route path="/cart" element={<ShopCart/>} />
                        <Route path="/*" element={<Navigate to="/products"/>}/>
                    </Routes>
            </CartContextProvider>
        </ProductContextProvider>
    );
}

export default App;
