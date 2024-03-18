import "./header.css";
import React from'react';
import {useState} from "react";
import icon from "./icon.png";
import {Link} from "react-router-dom";

     function Header(){
      const [showLinks,setShowlinks]=useState(false)

      const handleShowLinks= () =>{
        setShowlinks(!showLinks)
      }
       return(
        <nav className={`navbar ${showLinks? "show-nav" :"hide-nav"} `} >
        <div className="navbar__logo"><img src={icon} alt="logo" /></div> 
      <ul className="navbar__links"  > 

        <li className="navbar__items slideInDwn-1" >
        <Link to="/" className="navbar__link">Acueille</Link>
        </li> 

        <li className="navbar__items slideInDwn-2">
        <Link to="/Blog" className="navbar__link">Blog</Link>
        </li> 
        
        <li className="navbar__items slideInDwn-3">
        <Link to="/Realisation" className="navbar__link">Realisation</Link>

        </li> 
        <li className="navbar__items slideInDwn-4">
        <Link to="/MentionLegal" className="navbar__link">Mention Legal</Link>
        </li> 

        <li className="navbar__items slideInDwn-5">
        <Link to="/Service" className="navbar__link">Service</Link>
        </li> 

        <li className="navbar__items slideInDwn-6" >
        <Link to="/Contact" className="navbar__link">Contact</Link>
        </li> 

        </ul>

      <button className="navbar__burger" onClick={handleShowLinks}>
          <span className="burger__bar" ></span>
        </button>

        </nav>
       )
     } 
     export default Header;

