import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    return(
        <div className="flex">
            <div className="logo-container">
                <img className="w-50" src={LOGO_URL} alt="logo" />
                <h3 className="title-name">Zoop-Delivery...</h3>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={()=>{
                         btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                         }}
                         >{btnName}</button>  
                </ul>
            </div>
        </div>
    );
};

export default Header;