import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Buying/Cart";
import MainPage from "./MainPage/MainPage";



export default function App() {
    return(
        <BrowserRouter>
			
		 	<Routes>
				
		 		<Route path="/main" element={<MainPage />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		 </BrowserRouter>
        
    );
}