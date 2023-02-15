import React from "react";


import '../Styles/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import {useNavigate} from "react-router-dom";

import {useState} from "react";

function Navbar() {

    let navigate=useNavigate()

    const [isLogged,setLoggedIn]=useState(false)

    let string=`${window.location.href}`
    let loggedIn=string.substr(22,8)
    if(loggedIn==='loggedIn'){
        return (

            <nav>
                <div class="menu-icon">
                    <span class="fas fa-bars" onClick={show}></span>
                </div>


                <div className="logo">
                    <a href="/loggedIn/cart" className="nav_links">
                        <div className="icon-cart">
                            <div className="cart-line-1"></div>
                            <div className="cart-line-2"></div>
                            <div className="cart-line-3"></div>
                            <div className="cart-wheel"></div>
                        </div>
                    </a>
                </div>


                <div  class="nav-items">

                    <li><a href="/loggedIn/home">Home</a></li>

                    <li><a href="/loggedIn/my-profile">My Profile</a></li>
                    <li><a href="" onClick={HandlerLogout}>Logout</a></li>
                </div>

                <div class="search-icon">
                    <span class="fas fa-search"></span>
                </div>
                <div class="cancel-icon">
                    <span class="fas fa-times"></span>
                </div>
                <form action="#">
                    <input type="search" class="search-data" placeholder="Search" required />
                    <button  class="fas fa-search" onClick={search}></button>
                </form>

            </nav>


        )
    }else{
        return (
            <nav>
                <div className="menu-icon">
                    <span className="fas fa-bars" onClick={show}></span>
                </div>


                <div className="logo">
                    <a href="/cart" className="nav_links">
                        <div className="icon-cart">
                            <div className="cart-line-1"></div>
                            <div className="cart-line-2"></div>
                            <div className="cart-line-3"></div>
                            <div className="cart-wheel"></div>
                        </div>
                    </a>
                </div>


                <div className="nav-items">

                    <li><a href="/home">Home</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                </div>

                <div className="search-icon">
                    <span className="fas fa-search"></span>
                </div>
                <div className="cancel-icon">
                    <span className="fas fa-times"></span>
                </div>
                <form action="#">
                    <input type="search" className="search-data" placeholder="Search" required/>
                    <button className="fas fa-search" onClick={search}></button>
                </form>

            </nav>


        )
    }


    function HandlerLogout() {



        navigate('/login')
        window.location.reload()
    }


}

function show(event) {
    const menuBtn = document.querySelector(".menu-icon span");
    const searchBtn = document.querySelector(".search-icon");
    const cancelBtn = document.querySelector(".cancel-icon");
    const items = document.querySelector(".nav-items");
    const form = document.querySelector("form");
    menuBtn.onclick = ()=>{
        items.classList.add("active");
        menuBtn.classList.add("hide");
        searchBtn.classList.add("hide");
        cancelBtn.classList.add("show");
    }
    cancelBtn.onclick = ()=>{
        items.classList.remove("active");
        menuBtn.classList.remove("hide");
        searchBtn.classList.remove("hide");
        cancelBtn.classList.remove("show");
        form.classList.remove("active");
        cancelBtn.style.color = "#ff3d00";
    }
    searchBtn.onclick = ()=>{
        form.classList.add("active");
        searchBtn.classList.add("hide");
        cancelBtn.classList.add("show");
    }
}


function search() {

}


export default Navbar;