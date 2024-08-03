import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const[btnName,setbtnName]=useState("Login");
    return(
        <div className="header">
            <div className="logo-container">
                <Link to="/"><img className="logo" src={LOGO_URL}/></Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li ><Link className="under" to="/">Home</Link></li>
                    <li><Link className="under" to="/about">About us</Link></li>
                    <li><Link className="under" to="/contact">Contact us</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        btnName==="Login"?setbtnName("Logout"):setbtnName("Login");
                        }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;