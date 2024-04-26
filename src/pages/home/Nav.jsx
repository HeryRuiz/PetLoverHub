import React from "react";
import "./styles/Nav.css";
import logo from "../images/logo.png";
import { LayoutGrid, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import Burger from "./Burger";
function Nav({ offBurger, onBurger }) {
  return (
    <>
      <Burger onBurger={onBurger} offBurger={offBurger}/>
      <nav>
        <div className="nav__container">
          <div className="nav__flex">
            <p>Home</p>
            <p>Services</p>
            <p>About us</p>
          </div>
          <img src={logo} alt="Logo" className="nav__logo" />
          <div className="nav__smaller">
            <Link to="/login" className="nav__started">
              <div className="nav__back">
                <LayoutGrid />
              </div>

              <p>Get Started</p>
            </Link>
            <Menu
              className="burger"
              size="30px"
              onClick={()=>onBurger("burger__container")}
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
