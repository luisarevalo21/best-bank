import React from "react";

import { NavLink, Outlet } from "react-router-dom";

import logo from "../assets/bestbank_logo.png";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <img src={logo} alt="best bank" className="navbar-img" />

        <nav>
          <ul>
            <NavLink className={({ isActive }) => (isActive ? "activeClass" : "")} to="/">
              Home
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? "activeClass" : "")} to="/payments">
              Payments
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? "activeClass" : "")} to="/savings">
              Savings
            </NavLink>
            {/* <NavLink className={({ isActive }) => (isActive ? "activeClass" : "")} to="/financing">
              Financing
            </NavLink> */}
            <NavLink className={({ isActive }) => (isActive ? "activeClass" : "")} to="/stocks">
              Stocks
            </NavLink>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
