import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Login from "./Components/SignUp-Login/Login.js";
import Signup from "./Components/SignUp-Login/Signup.js";
import Cart from "./Components/Buying/Cart.js";
import MainPage from "./Components/MainPage/MainPage.js";


import Celulares from "./Components/Categories/Celulares.js"
import Laptops from "./Components/Categories/Laptops.js";
import Jogos from "./Components/Categories/Jogos.js";
import Fones from "./Components/Categories/Fones.js";
import Telescópio from "./Components/Categories/Telescópio.js";
import SmartWatch from "./Components/Categories/SmartWatch.js";
import Impressoras from "./Components/Categories/Impressoras.js";
import ProductScreen from "./productScreen/ProductScreen.js";

import UserContext from "./contexts/UserContext.js";
import CartContext from "./contexts/CartContext.js";

export default function App() {
    const [user, setUser] = useState(null);
    const [cartItems, setCartItems] = useState([]);



   
    return (
        <CartContext.Provider value={{ cartItems, setCartItems }}>
        <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/main" element={<MainPage />} />
                    
                    <Route path="/Celulares" element={<Celulares />} />
                    <Route path="/Laptops" element={<Laptops />} />
                    <Route path="/Jogos" element={<Jogos />} />
                    <Route path="/Fones" element={<Fones />} />
                    <Route path="/Telescópio" element={<Telescópio />} />
                    <Route path="/SmartWatch" element={<SmartWatch />} />
                    <Route path="/Impressoras" element={<Impressoras />} />
                    <Route path="/product/:productId" element={<ProductScreen />} />
				    <Route path="/cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
        </CartContext.Provider>
            
    );
}
