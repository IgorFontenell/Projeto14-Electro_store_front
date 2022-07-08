import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./Components/SignUp-Login/Login.js";
import Signup from "./Components/SignUp-Login/Signup.js";
import RotaAux from "./Components/SignUp-Login/RotaAux.js";

import UserContext from "./contexts/UserContext.js";

export default function App() {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/rotaAux" element={<RotaAux />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
            
    );
}
