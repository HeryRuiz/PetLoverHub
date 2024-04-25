import React from "react";
import "./styles/Burger.css";
import logo from "../images/logosmall.png";
import { BookText, HandCoins, Home, Store, X } from "lucide-react";
import { Link } from "react-router-dom";
function Burger({ onBurger,  offBurger}) {
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
          >
            <p>Home</p>
            <Home />
          </Link>

          <Link
            className="burger__item"
            onClick={() => offBurger("burger__container")}
          >
            <p>Services</p>

            <Store />
          </Link>

          <Link
            className="burger__item"
            onClick={() => offBurger("burger__container")}
          >
            <p>Pricing</p>
            <HandCoins />
          </Link>
          <Link
            className="burger__item"
            onClick={() => offBurger("burger__container")}
          >
            <p>Resources</p>
            <BookText />
          </Link>
          <Link to="/login" className="top__burger__link">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Burger;