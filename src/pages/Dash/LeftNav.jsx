import React from "react";
import "./styles/Left.css";
import logo2 from "../images/logo.png";
import {
  BookUser,
  CalendarDays,
  CircleHelp,
  Clock9,
  Gem,
  Settings,
  SquarePlus,
} from "lucide-react";
import { Link } from "react-router-dom";
function Left({ content, setContent }) {
  return (
    <section id="left">
      <div className="left__container">
        <div>
          <div className="left__top">
            <Link to="/">
              <img src={logo2} alt="Logo" className="left__logo" />
            </Link>
            <div className="left__flex">
              <div
                className={
                  content === "Booking" ? "left__selected" : "left__item"
                }
                onClick={() => {
                  setContent("Booking");
                }}
              >
                <div className="left__text">
                  <SquarePlus />
                  <p>Booking types</p>
                </div>
              </div>
              <div
                className={
                  content === "Schedule" ? "left__selected" : "left__item"
                }
                onClick={() => {
                  setContent("Schedule");
                }}
              >
                <div className="left__text">
                  <CalendarDays />
                  <p>Scheduled events</p>
                </div>
              </div>
              <div
                className={
                  content === "Profile" ? "left__selected" : "left__item"
                }
                onClick={() => {
                  setContent("Profile");
                }}
              >
                <div className="left__text">
                  <BookUser />
                  <p>Client profiles</p>
                </div>
              </div>
            </div>
          </div>
          <div className="left__middle">
            <div className="left__flex">
              <div
                className={
                  content === "Transactions" ? "left__selected" : "left__item"
                }
                onClick={() => {
                  setContent("Transactions");
                }}
              >
                <div className="left__text">
                  <Clock9 />
                  <p>Availability</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="left__bottom">
          <div className="left__flex">
            <div className="left__sub">
              <div className="left__text">
                <Gem />
                <p>Upgrade plan</p>
              </div>
            </div>
            <div className="left__item">
              <div className="left__text">
                <Settings />
                <p>Settings</p>
              </div>
            </div>
            <div className="left__item">
              <div className="left__text">
                <CircleHelp />
                <p>Help</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Left;
