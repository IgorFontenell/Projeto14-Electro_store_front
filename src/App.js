import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Login from "./Components/SignUp-Login/Login.js";
import Signup from "./Components/SignUp-Login/Signup.js";
import RotaAux from "./Components/SignUp-Login/RotaAux.js";
import Cart from "./Components/Buying/Cart.js";
import MainPage from "./Components/MainPage/MainPage.js";
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
                    <Route path="/rotaAux" element={<RotaAux />} />
                    <Route path="/main" element={<MainPage />} />
				    <Route path="/cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
        </CartContext.Provider>
            
    );
}
