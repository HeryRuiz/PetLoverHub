import React from "react";
import "./styles/Noti.css";
import ray from "../images/ray.jpg";

function Noti() {
  return (
    <section id="noti">
      <div className="noti__container">
        <div className="noti__left">

          <div className="noti__item">
            <img src={ray} alt="Owner Image" className="noti__image"/>
            <div className="noti__action">
              <p className="noti__title">Ray has booked a session.</p>
              <p className="noti__des">Session was booked for April 2nd.
              Ray has added extra details.
              </p>
            </div>
          </div>

          <div className="noti__item noti__two">
            <img src={ray} alt="Owner Image" className="noti__image"/>
            <div className="noti__action">
              <p className="noti__title">Ray has booked a session.</p>
              <p className="noti__des">Session was booked for April 2nd.
              Ray has added extra details.
              </p>
            </div>
          </div>

          <div className="noti__item">
            <img src={ray} alt="Owner Image" className="noti__image"/>
            <div className="noti__action">
              <p className="noti__title">Ray has booked a session.</p>
              <p className="noti__des">Session was booked for April 2nd.
              Ray has added extra details.
              </p>
            </div>
          </div>
        </div>
        <div className="noti__right">
          <p className="noti__head"></p>
          <p className="noti__body"></p>
          <div className="noti__redirect">

          </div>
          <p className="noti__redirect"></p>
        </div>
      </div>
    </section>
  );
}

export default Noti;
