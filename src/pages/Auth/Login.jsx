import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope, faHouse } from "@fortawesome/free-solid-svg-icons";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import logo2 from "../images/logo2.png";
import paws from "../images/paws.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
      navigate("/home");
    } catch {
      setError("Invalid email or password");
      document.querySelector(".form__error").style.opacity = "1";
    }
  };

  return (
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
                Access a community anytime, anywhere, on any device you choose.
                Download, see, and adore all pets on one platform.
              </p>
            </div>
            <img src={paws} alt="paws" className="auth__paws1" />
          </div>
        </div>
        <div className="auth__right">
          <div className="auth__right__div">
            <p className="auth__form__title">Login</p>
            <form onSubmit={handleSubmit}>
              <div className="auth__form__div">
                <label className="auth__input_with_icon">
                  <FontAwesomeIcon icon={faEnvelope} className="auth__icon" />
                  <input
                    type="email"
                    className="auth__input"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </label>
                <label className="auth__input_with_icon">
                  <FontAwesomeIcon icon={faLock} className="auth__icon" />
                  <input
                    type="password"
                    className="auth__input"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    minLength={6}
                    required
                  />
                </label>
              </div>
              <button type="submit" className="auth__button">
                Login
              </button>
              <div className="auth__or__div">
                <div className="auth__line"></div>
                <p>Or</p>
                <div className="auth__line"></div>
              </div>
              <p className="auth__redirect">
                Forgot password?{" "}
                <Link to="/reset-password">Reset password</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
