import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  return (
    <div className="header-container">
      <nav>
        <a href="#">
          <img className="logo" src={logo} alt="" />
        </a>

        <div className="nav-link-container">
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
