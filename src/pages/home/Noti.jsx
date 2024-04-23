import React from "react";
import "./styles/Noti.css";
import ray from "../images/ray.jpg";
import bryan from "../images/bryan.jpg";
import sophie from "../images/sophie.jpg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function Noti() {
  return (
    <section id="noti">
      <div className="noti__container">
        <div className="noti__left">
          <div className="noti__item">
            <img src={ray} alt="Owner Image" className="noti__image" />
            <div className="noti__action">
              <p className="noti__title">Ray has booked a session.</p>
              <p className="noti__des">
                Session was booked for April 21st. Ray has been added to the calendar.
              </p>
            </div>
          </div>

          <div className="noti__item noti__two">
            <img src={bryan} alt="Owner Image" className="noti__image" />
            <div className="noti__action">
              <p className="noti__title">Bryan has booked a one off.</p>
              <p className="noti__des">
                Session was booked for April 23rd. Bryan has been added to the calendar.
              </p>
            </div>
          </div>

          <div className="noti__item noti__three">
            <img src={sophie} alt="Owner Image" className="noti__image" />
            <div className="noti__action">
              <p className="noti__title">Sophie has booked a meet up.</p>
              <p className="noti__des">
                Meet up was booked for April 25th. Sophie has been added to the calendar.
              </p>
            </div>
          </div>
        </div>
        <div className="noti__right">
          <p className="noti__head">
          Effortlessly <span className="noti__outline">manage</span> your
              schedule.
          </p>
          <p className="noti__body">
          Effortlessly manage your schedule with our interactive
              calander. Stay in control of your clients sessions
              and progress while staying on top of your schedule.
            
          </p>
          <Link className="noti__redirect">
            <p>Learn More</p>
            <ArrowRight className="noti__icon" />
          </Link>
          <p className="noti__redirect"></p>
        </div>
      </div>
    </section>
  );
}

export default Noti;
