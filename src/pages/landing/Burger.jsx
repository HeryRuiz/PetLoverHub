import React from "react";
import "./styles/Burger.css";
import logo from "../images/logosmall.png";
import { HandCoins, Home, X } from "lucide-react";
import { Link } from "react-router-dom";
function Burger({ onBurger, offBurger, signedin }) {
  return (
    <section id="burger">
      <div className="burger__container">
        <div className="burger__top">
          <img src={logo} alt="Logo" className="burger__logo" />

          <X
            size={"34px"}
            className="burger__icon"
            onClick={() => offBurger("burger__container")}
          />
        </div>
        <div className="burger__middle">
          <Link
            className="burger__item"
            onClick={() => offBurger("burger__container")}
            to="/"
          >
            <p>Home</p>
            <Home />
          </Link>

          <Link
            className="burger__item"
            onClick={() => offBurger("burger__container")}
            to={signedin ? "/login" : "/home"}
          >
            <p>Start Posting</p>
            <HandCoins />
          </Link>
          <Link to={signedin ? "/login" : "/home"} className="burger__link">
            {signedin ? "Explore" : "Get Started"}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Burger;
