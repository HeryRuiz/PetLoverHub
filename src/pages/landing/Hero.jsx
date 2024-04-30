import React from "react";
import "./styles/Hero.css";
import { Link } from "react-router-dom";

function Hero({ signedin }) {
  return (
    <>
      <section id="hero">
        <div className="hero__container">
          <div className="hero__flex">
            <h2>Pet Lover Hub</h2>
            <p>
              Access a community anytime, anywhere, on any device you <br />
              Download, see, and adore all pets on one platform.
              <br />
            </p>

            <Link className="hero__button" to={signedin ? "/home" : "/login"}>
              {signedin ? "Explore" : "Get Started"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
