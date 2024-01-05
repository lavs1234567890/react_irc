import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from "./pages/Home";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Product from './pages/Product';
import Footer from './components/Footer';

const App = () => {
 return(
<div>
    
   <Navbar/>
      <Routes>
      <Route path="/" exact element={<Home/>}/>
  <Route path="/Register" element={<Register/>}/>
  <Route path = "/Login" element = {<Login/>}/>
  <Route path = "/Cart" element = {<Cart/>}/>
  <Route path = "/Product" element = {<Product/>}/>
  
  
  
  

  </Routes>
   <Footer/>

  
  </div>
  

 )
};

export default App;