import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Components/SignUp-Login/Login.js";
import Signup from "./Components/SignUp-Login/Signup.js";


export default function App() {


    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </BrowserRouter>
    );
}
