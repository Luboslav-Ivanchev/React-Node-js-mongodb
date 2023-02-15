import React from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navigation/Navbar.js";
import Footer from "./Navigation/Footer";

import { BrowserRouter, Route,Routes } from "react-router-dom";
import Login from "./Forms/Login.js"
import Register from "./Forms/Register.js"
import ForgotPassword from "./Forms/Forgot-Password";
import MyProfile from "./Forms/My-Profile";
import ResetPassword from "./Forms/Reset-Password";
import Cart from "./Templates/Cart";
import Home from "./Templates/Home";
import Man from "./Pages/Man";
import ContactWithUs from "./Forms/ContactWithUs";
function App() {
  return (
<body>
<Navbar/>

  <Routes>
    <Route path="login" exact element={<Login />}/>
    <Route path="register" exact element={<Register />}/>
    <Route path="forgot-password" exact element={<ForgotPassword />}/>
    <Route path="reset-password" exact element={<ResetPassword/>}/>
    <Route path="/cart" exact element={<Cart/>}/>
    <Route path="/home" exact element={<Home/>}/>
    <Route path="/man" exact element={<Man/>}/>
    <Route path="/women" exact element={''}/>
    <Route path="/children" exact element={''}/>
    <Route path="/collections" exact element={''}/>
    <Route path="/sports" exact element={''}/>

    <Route path="/contactWithUs" exact element={<ContactWithUs/>}/>

    <Route path="/loggedIn/contactWithUs" exact element={<ContactWithUs />}/>
    <Route path="/loggedIn/my-profile" exact element={<MyProfile />}/>
    <Route path="/loggedIn/cart" exact element={<Cart/>}/>
    <Route path="/loggedIn/home" exact element={<Home/>}/>
    <Route path="/loggedIn/man" exact element={<Man/>}/>
    <Route path="/loggedIn/women" exact element={''}/>
    <Route path="/loggedIn/children" exact element={''}/>
    <Route path="/loggedIn/collections" exact element={''}/>
    <Route path="/loggedIn/sports" exact element={''}/>
  </Routes>

<Footer/>
</body>

  );
}

export default App;
