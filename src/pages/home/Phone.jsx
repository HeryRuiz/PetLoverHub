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
            Get all the <span className="noti__outline">alerts</span> you
              need.
            </p>
            <p className="phone__body">
              Take charge of your alerts with our custom notifications.
              Experience the empowerment of managing both your time and client
              engagement with ease.
            </p>
            <Link className="phone__redirect">
              <p>Learn More</p>
              <ArrowRight className="phone__icon" />
            </Link>
          </div>
        </div>
        <div className="phone__filler">

        </div>
        <img src={phone} alt="Phone and computer" className="phone__image" />
        <img src={phone2}  alt="Phone" className="phone__image2" />
      </div>
    </section>
  );
}

export default Phone;
