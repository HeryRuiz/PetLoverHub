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
              <p className="noti__title">Ray has replied to you.</p>
              <p className="noti__des">
                Ray has replied to your post. "I loved the place. Great to
                finally meet you bryan".
              </p>
            </div>
          </div>

          <div className="noti__item noti__two">
            <img src={bryan} alt="Owner Image" className="noti__image" />
            <div className="noti__action">
              <p className="noti__title">Bryan has liked your post.</p>
              <p className="noti__des">
                Bryan has liked to your post. "Went to the dog park today and
                met Ray and his dog".
              </p>
            </div>
          </div>

          <div className="noti__item noti__three">
            <img src={sophie} alt="Owner Image" className="noti__image" />
            <div className="noti__action">
              <p className="noti__title">Sophie has liked a post.</p>
              <p className="noti__des">
                "My dog finally had a playdate, and he looks so happy. We have
                another one tomorrow".
              </p>
            </div>
          </div>
        </div>
        <div className="noti__right">
          <p className="noti__head">
            Receive <span className="noti__outline">notifications</span> from
            your profile.
          </p>
          <p className="noti__body">
            Receive notifications with our interactive application. Whether it's
            keeping track of your replies or discovering new friends for both
            you and your pet, our app ensures you're always in the loop.
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
