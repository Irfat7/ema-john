import React, { useState } from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";
import ActiveLink from "../ActiveLink/ActiveLink";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faCircleXmark } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  const [visible, setVisible] = useState(false)

  return (
    <div className="header-container">
      <nav>
        <Link to='/'>
          <img className="logo" src={logo} alt="" />
        </Link>

        <button onClick={()=>setVisible(!visible)} className="toggle"> {visible ? <FontAwesomeIcon className="fa-2xl" icon={faCircleXmark} style={{color: "#ffffff",}} /> : <FontAwesomeIcon className="fa-2xl" style={{color:'white'}} icon={faBars}/>} </button>
        <div className={`nav-link-container ${visible && 'navVisible'}`}>
          <ActiveLink to="/">Shop</ActiveLink>
          <ActiveLink to="/orders">Orders</ActiveLink>
          <ActiveLink to="/inventory">Inventory</ActiveLink>
          <ActiveLink to="/login">Login</ActiveLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
