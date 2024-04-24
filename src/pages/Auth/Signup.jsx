import React from "react";
import "./styles/Auth.css";
import auth from "../images/auth.png";
import logo2 from "../images/logo2.png";
import paws from "../images/paws.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
function Signup() {
  return (
    <section id="login">
      <div className="auth__top">
        <p className="auth__redirect">
          <Link to="/">
            <FontAwesomeIcon icon={faHouse} className="home__icon" />
          </Link>
        </p>
        <p className="auth__redirect">
          Don't have an account? <Link to='/login'>Login</Link>
        </p>
      </div>
      <img src={auth} alt="background image" className="auth__image" />
      <div className="auth__container">
        <div className="auth__left">
          <img src={paws} alt="paws" className="auth__paws2" />
          <div className="auth__div">
            <div>
              <h2 className="auth__title">Welcome to</h2>
              <img src={logo2} alt="Logo" className="auth__logo" />
              <p className="auth__des">
                Elevate your pet training game with our all-in-one platform.
                Booking to scheduling, our tools empower organization.
              </p>
            </div>
            <img src={paws} alt="paws" className="auth__paws1" />
          </div>
        </div>
        <div className="auth__right">
          <div className="auth__right__div">
            <p className="auth__form__title">Sign up</p>
            <form action="">
              <div className="auth__form__div">
                <label className="auth__input_with_icon">
                  <FontAwesomeIcon icon={faEnvelope} className="auth__icon" />
                  <input
                    type="email"
                    className="auth__input"
                    placeholder="Email"
                    required
                  />
                </label>
                <label className="auth__input_with_icon">
                  <FontAwesomeIcon icon={faUser} className="auth__icon" />
                  <input
                    type="text"
                    className="auth__input"
                    placeholder="First name"
                    required
                  />
                </label>
                <label className="auth__input_with_icon">
                  <FontAwesomeIcon icon={faUser} className="auth__icon" />
                  <input
                    type="text"
                    className="auth__input"
                    placeholder="Last name"
                    required
                  />
                </label>
                <label className="auth__input_with_icon">
                  <FontAwesomeIcon icon={faLock} className="auth__icon" />
                  <input
                    type="password"
                    className="auth__input"
                    placeholder="Password"
                    minLength={6}
                    required
                  />
                </label>
              </div>
              <button className="auth__button">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
