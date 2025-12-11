import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup"; 
import Food from "./Components/Food";
import Cart from "./Components/Cart";
import Partner from "./Components/Partner";
import Partner_Info from "./Components/Partner_Info";
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
<>
<ToastContainer position="top-right" autoClose={2000} />
<BrowserRouter>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/Login" element={<Login />} />
<Route path="/sign-in" element={<Signup />} />
<Route path="/Food" element={<Food />} />
<Route path="/cart" element={<Cart />} />
<Route path="/partner" element={<Partner />} />
<Route path="/partner-info" element={<Partner_Info />} />
</Routes>
</BrowserRouter>
</>
);
}

export default App