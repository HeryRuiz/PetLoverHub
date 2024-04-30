import React from "react";
import "./styles/Hero.css";
import { Link } from "react-router-dom";

function Hero({signedin}) {

  return (
    <>
      <section id="hero">
        <div className="hero__container">
          <div className="hero__flex">
            <h2>Pet Lover Hub</h2>
            <p>
              Elevate your pet owner game with our all-in-one platform. <br />
              meeting to scheduling, our tools empower interactivity.
              <br />
            </p>

            <Link className="hero__button" to={signedin? "/home" : "/login"} >{signedin? "Explore" : "Get Started"}</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
