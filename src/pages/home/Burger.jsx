import React from "react";
import "./styles/Burger.css";
import logo from "../images/logosmall.png";
import { BookText, HandCoins, Home, Store, X } from "lucide-react";
import { Link } from "react-router-dom";
function Burger() {
  const toggleBurger = () => {
    document.querySelector(".burger__container").style.display = "none";
  };

  return (
    <section id="burger">
      <div className="burger__container">
        <div className="burger__top">
          <img src={logo} alt="Logo" className="burger__logo" />

          <X size={"34px"} className="burger__icon" onClick={toggleBurger} />
        </div>
        <div className="burger__middle">
          <Link to="/" className="burger__item" onClick={toggleBurger}>
            <p>Home</p>
            <Home />
          </Link>

          <Link className="burger__item" onClick={toggleBurger}>
            <p>Services</p>

            <Store />
          </Link>

          <Link className="burger__item" onClick={toggleBurger}>
            <p>Pricing</p>
            <HandCoins />
          </Link>
          <Link className="burger__item" onClick={toggleBurger}>
            <p>Resources</p>
            <BookText />
          </Link>
        </div>
        <Link to='/login' className="burger__link">Get Started</Link>
      </div>
    </section>
  );
}

export default Burger;
