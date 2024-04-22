import React from "react";
import "./styles/Nav.css";
import logo from "../images/logo.png";
import { LayoutGrid, Menu } from "lucide-react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <>
      <nav>
        <div className="nav__container">
          <div className="nav__flex">
            <p>Home</p>
            <p>Trainers</p>
            <p>About us</p>
          </div>
            <img src={logo} alt="Logo" className="nav__logo" />
          <div className="nav__smaller">
            <Link to="/" className="nav__started">
              <div className="nav__back">
                <LayoutGrid />
              </div>

              <p>Get Started</p>
            </Link>
            <Menu className="burger" size="30px" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
