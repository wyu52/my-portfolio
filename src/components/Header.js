import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import React from 'react';

function Header() {

    return (
        
        <nav className="header" id="header">
            <div id="logo">
            <Link to="/"><img className="logo" src={logo} alt="Logo" /></Link>
            </div>
            <ul className="main-nav">
            <li className="main-nav-button"><Link to="/"><svg  className="nav-icon-svg" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="white" fill-rule="evenodd" clip-rule="evenodd"><path d="M22 11.414v12.586h-20v-12.586l-1.293 1.293-.707-.707 12-12 12 12-.707.707-1.293-1.293zm-6 11.586h5v-12.586l-9-9-9 9v12.586h5v-9h8v9zm-1-7.889h-6v7.778h6v-7.778z"/></svg></Link></li>
            <li className="main-nav-button"><Link to="../pages/projects"><svg  className="nav-icon-svg" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="white" fill-rule="evenodd" clip-rule="evenodd"><path d="M16 3.383l-.924-.383-7.297 17.617.924.383 7.297-17.617zm.287 3.617l6.153 4.825-6.173 5.175.678.737 7.055-5.912-7.048-5.578-.665.753zm-8.478 0l-6.249 4.825 6.003 5.175-.679.737-6.884-5.912 7.144-5.578.665.753z"/></svg></Link></li>

                
            </ul>
        </nav>
    )
}

export default Header;