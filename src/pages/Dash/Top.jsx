import React from "react";
import logo from "../images/logosmall.png";
import {
  BookUser,
  CalendarDays,
  Clock9,
  Gem,
  Landmark,
  Menu,
  SquarePlus,
  X,
} from "lucide-react";
import "./styles/Top.css";
import { Link } from "react-router-dom";
function Top({ onBurger, offBurger, setContent }) {
  return (
    <>
      <section id="top__burger">
        <div className="top__burger__container">
          <div className="top__burger__top">
            <Link to="/">
              <img src={logo} alt="Logo" className="top__burger__logo" />
            </Link>
            <X
              size={"34px"}
              className="top__burger__icon"
              onClick={() => offBurger("top__burger__container")}
            />
          </div>
          <div className="top__burger__middle">
            <div
              className="top__burger__item"
              onClick={() =>
                offBurger("top__burger__container") + setContent("Booking")
              }
            >
              <p>Booking types</p>
              <SquarePlus />
            </div>

            <div
              className="top__burger__item"
              onClick={() =>
                offBurger("top__burger__container") + setContent("Schedule")
              }
            >
              <p>Scheduled events</p>

              <CalendarDays />
            </div>

            <div
              className="top__burger__item"
              onClick={() =>
                offBurger("top__burger__container") + setContent("Profile")
              }
            >
              <p>Client profiles</p>
              <BookUser />
            </div>
            <div
              className="top__burger__item"
              onClick={() =>
                offBurger("top__burger__container") + setContent("Transactions")
              }
            >
              <p>Availability</p>
              <Clock9 />
            </div>
            <Link
              className="top__burger__item"
              onClick={() => offBurger("top__burger__container")}
            >
              <p>Upgrade plan</p>
              <Gem />
            </Link>
          </div>
        </div>
      </section>
      <section id="top">
        <div className="top__container">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <Menu
            size={"35px"}
            className="top__burger"
            onClick={() => onBurger("top__burger__container")}
          />
        </div>
      </section>
    </>
  );
}

export default Top;
