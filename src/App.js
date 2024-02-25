import React, { createContext, useContext, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Products from "./components/Products";
import LandingPage from './components/LandingPage';
import { CartContextAPI } from './context/CartContext';

export const CartContext = createContext(null);
function App() {

  // const [cart, setCart] = useState([]);



  return (
    // <CartContext.Provider value={{ cart, setCart }}>
     <CartContextAPI>
       <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/register" element={<RegisterForm></RegisterForm>}></Route>
        <Route path="/login" element={<LoginForm></LoginForm>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
      </Routes>
     </CartContextAPI>
    // </CartContext.Provider>
  );
}

export default App;
