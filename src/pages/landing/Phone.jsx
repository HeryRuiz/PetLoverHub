import React from "react";
import "./styles/Phone.css";
import phone from "../images/phone.png";
import phone2 from "../images/phone2.png";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
function Phone() {
  return (
    <section id="phone">
      <div className="phone__container">
        <div className="phone__box">
          <div className="phone__left">
            <p className="phone__head">
              Access a <span className="noti__outline">community</span> anytime
              you need.
            </p>
            <p className="phone__body">
              Access a community anytime, anywhere, on any device you choose.
              Download, see, and adore all pets on one
              platform.
            </p>
            <Link className="phone__redirect">
              <p>Learn More</p>
              <ArrowRight className="phone__icon" />
            </Link>
          </div>
        </div>
        <div className="phone__filler"></div>
        <img src={phone} alt="Phone and computer" className="phone__image" />
        <img src={phone2} alt="Phone" className="phone__image2" />
      </div>
    </section>
  );
}

export default Phone;
