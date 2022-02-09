import React from "react";
import { Link } from "react-router-dom";
import CartWidjet from "../CartWidjet/CartWidjet.js";
import Logo from "../../assets/lifesea.png"

import "./NavBar.css";

const NavBar = () => {
  return (
    
    <nav className="navbar fixed-top">
      <Link className="navbar-brand" to="/">
        <img src={Logo} alt="not_img" />
      </Link>
      
    
      <div className="menu">
        <ul >
          <li className="nav-item ">
            <Link className="nav-link" to="/">
              Inicio 
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">
              Productos
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/cart">
              <CartWidjet />
            </Link>
          </li>
        </ul>
      </div>
      
    </nav>
  );
};

export default NavBar;
