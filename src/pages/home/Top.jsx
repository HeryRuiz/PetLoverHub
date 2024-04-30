import React from "react";
import small from "../images/logosmall.png";
import "./styles/Top.css";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
function Top() {
  return (
    <nav id="top">
      <div className="top__container">
        <div className="top__flex">
          <Link to='/'>
            <img src={small} alt="Logo" className="top__logo" />
          </Link>

          <p className="top__selected">Home</p>
          <p className="top__unselected"> Create</p>
        </div>
        <div className="top__profile">
        <div className="top__avatar">H</div>
        <ChevronDown />
        </div>
      </div>
    </nav>
  );
}

export default Top;
