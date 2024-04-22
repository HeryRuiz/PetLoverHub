import React from "react";
import "./styles/Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <section id="hero">
        <div className="hero__container">
          <div className="hero__flex">
            <h2>Pet Training Hub</h2>
            <p>
            Discover the perfect match for your pet's unique requirements.
              <br />
              empower them to reach their full potential through personalized training and expert guidance.
            </p>
            <Link className="hero__button">Get Started</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
