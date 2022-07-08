import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";



export default function App() {
    return(
        <BrowserRouter>
			
		 	<Routes>
				
		 		<Route path="/main" element={<MainPage />} />
			</Routes>
		 </BrowserRouter>
        
    );
}