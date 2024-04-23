import React from "react";
import "./styles/Banner.css";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import banner from "../images/banner.png";
function Banner() {
  return (
    <section id="banner">
      <div className="banner__border">
        <div className="banner__container">
          <div className="banner__left">
            <p className="banner__head">
              Get all the <span className="banner__outline">alerts</span> you
              need.
            </p>
            <p className="banner__body">
              Take charge of your alerts with our custom notifications.
              Experience the empowerment of managing both your time and client
              engagement with ease.
            </p>
            <Link className="banner__redirect">
              <p>Learn More</p>
              <ArrowRight className="banner__icon" />
            </Link>
          </div>
          <img src={banner} alt="Dog sitting" className="banner__image" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
