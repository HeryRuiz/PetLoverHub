import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHouse } from "@fortawesome/free-solid-svg-icons";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase";
import logo2 from "../images/logo2.png";
import paws from "../images/paws.png";
import { CircleAlert, CircleCheckBig } from "lucide-react";
function Password({ popup }) {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailInput = document.querySelector(".pass__input");
    const email = emailInput.value.trim();
    try {
      await sendPasswordResetEmail(auth, email);
      popup("popup__success");
    } catch (error) {
      popup("popup__fail");
      console.error("Error sending password reset email: ", error);
    }
    emailInput.value = "";
  };

  return (
    <>
      <section id="login">
        <div className="auth__top">
          <p className="auth__redirect">
            <Link to="/">
              <FontAwesomeIcon icon={faHouse} className="home__icon" />
            </Link>
          </p>
          <p className="auth__redirect">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
        <div className="auth__container">
          <div className="auth__left">
            <img src={paws} alt="paws" className="auth__paws2" />
            <div className="auth__div">
              <div>
                <h2 className="auth__title">Login to</h2>
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
              <p className="auth__form__title">Password Reset</p>
              <form onSubmit={handleSubmit}>
                <div className="auth__form__div">
                  <label className="auth__input_with_icon">
                    <FontAwesomeIcon icon={faEnvelope} className="auth__icon" />
                    <input
                      type="email"
                      className="auth__input pass__input"
                      placeholder="Email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                  </label>
                </div>
                <button type="submit" className="auth__button">
                  Reset
                </button>
                <div className="auth__or__div">
                  <div className="auth__line"></div>
                  <p>Or</p>
                  <div className="auth__line"></div>
                </div>
                <p className="auth__redirect">
                  Already Have an account? <Link to="/login">Login</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="popup__success">
        <CircleCheckBig />
        <p>Signed up</p>
      </div>
      <div className="popup__fail">
        <CircleAlert />
        <p>Reset Failed</p>
      </div>
    </>
  );
}

export default Password;
