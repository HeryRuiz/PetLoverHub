import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faEnvelope,
  faHouse,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { auth, database } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import logo2 from "../images/logo2.png";
import paws from "../images/paws.png";
import "./styles/Auth.css";
function Signup() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const userRef = ref(database, "users/" + user.uid);

      await set(userRef, {
        firstName: firstName,
        lastName: lastName,
        email: email,
      });

      setEmail("");
      setFirstName("");
      setLastName("");
      setPassword("");
      setError(null);
      setSuccess(true);
      navigate("/login");
    } catch (error) {
      setSuccess(false);
      document.querySelector(".form__error").style.opacity = "1";
    }
  };

  return (
    <section id="signup">
      <div className="auth__top">
        <p className="auth__redirect">
          <Link to="/">
            <FontAwesomeIcon icon={faHouse} className="home__icon" />
          </Link>
        </p>
        <p className="auth__redirect">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
      <div className="auth__container">
        <div className="auth__left">
          <img src={paws} alt="paws" className="auth__paws2" />
          <div className="auth__div">
            <div>
              <h2 className="auth__title">Welcome to</h2>
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
            <p className="auth__form__title">Sign up</p>
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
                  <FontAwesomeIcon icon={faUser} className="auth__icon" />
                  <input
                    type="text"
                    className="auth__input"
                    placeholder="First name"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    required
                  />
                </label>
                <label className="auth__input_with_icon">
                  <FontAwesomeIcon icon={faUser} className="auth__icon" />
                  <input
                    type="text"
                    className="auth__input"
                    placeholder="Last name"
                    value={lastName}
                    onChange={handleLastNameChange}
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
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
