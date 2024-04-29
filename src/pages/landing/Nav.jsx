import React from "react";
import "./styles/Nav.css";
import logo from "../images/logo.png";
import { LayoutGrid, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import Burger from "./Burger";
function Nav({ offBurger, onBurger }) {
  return (
    <>
      <Burger onBurger={onBurger} offBurger={offBurger} />
      <nav>
        <div className="nav__container">
          <div className="nav__flex">
            <Link to="/">Home</Link>
            <Link to="/login">All Post</Link>
          </div>
          <Link to='/'>
            <img src={logo} alt="Logo" className="nav__logo" />
          </Link>
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
              onClick={() => onBurger("burger__container")}
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
