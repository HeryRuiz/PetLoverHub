import React from "react";
import "./styles/Banner.css";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import banner from "../images/banner.png";
function Banner({ signedin }) {
  return (
    <section id="banner">
      <div className="banner__border">
        <div className="banner__container">
          <div className="banner__left">
            <p className="banner__head">
              Meet all the <span className="banner__outline">friends</span> you
              need.
            </p>
            <p className="banner__body">
              Discover a vibrant community of like-minded individuals on our
              app, where connecting with new friends is just a tap away. Whether
              you're seeking companionship for yourself or your pet, our
              platform opens doors to meaningful connections and exciting
              encounters.
            </p>
            <Link
              className="banner__redirect"
              to={signedin ? "/home" : "/login"}
            >
              <p>Learn More</p>
              <ArrowRight className="banner__icon" size={"40px"} />
            </Link>
          </div>
          <img src={banner} alt="Dog sitting" className="banner__image" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
