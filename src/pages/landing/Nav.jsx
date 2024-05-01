import React from "react";
import "./styles/Nav.css";
import logo from "../images/logo.png";
import { LayoutGrid, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import Burger from "./Burger";
function Nav({ offBurger, onBurger, signedin }) {
  console.log(signedin);
  return (
    <>
      <Burger onBurger={onBurger} offBurger={offBurger} signedin={signedin} />
      <nav id="nav">
        <div className="nav__container">
          <div className="nav__flex">
            <Link to="/">Home</Link>
            <Link to={signedin ? "/home" : "/login"}>Start Posting</Link>
          </div>
          <Link to="/">
            <img src={logo} alt="Logo" className="nav__logo" />
          </Link>
          <div className="nav__smaller">
            <Link to={signedin ? "/home" : "/login"} className="nav__started">
              <div className="nav__back">
                <LayoutGrid />
              </div>

              <p>{signedin ? "Explore" : "Get Started"}</p>
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
