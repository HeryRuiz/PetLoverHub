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
              <p className="noti__title">Ray has saved your post</p>
              <p className="noti__des">
                Excellent update! Bryan has saved your post. Your content
                shines! Keep up the fantastic work!
              </p>
            </div>
          </div>

          <div className="noti__item noti__two">
            <img src={bryan} alt="Owner Image" className="noti__image" />
            <div className="noti__action">
              <p className="noti__title">Bryan has saved your post.</p>
              <p className="noti__des">
                Exciting news! Ray has saved your post. Your content is
                resonating! Keep it up!
              </p>
            </div>
          </div>

          <div className="noti__item noti__three">
            <img src={sophie} alt="Owner Image" className="noti__image" />
            <div className="noti__action">
              <p className="noti__title">Sophie has saved a post.</p>
              <p className="noti__des">
                Wonderful update! Ray has saved your post. Your content is
                making waves!
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
