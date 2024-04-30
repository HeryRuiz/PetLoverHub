import React, { useEffect, useState } from "react";
import small from "../images/logosmall.png";
import "./styles/Top.css";
import { ChevronDown } from "lucide-react";
import {
  faAngleDown,
  faAngleUp,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
function Top() {
  const navigate = useNavigate();
  const [dropdown, setDropDown] = useState(false);
  useEffect(() => {
    if (dropdown === true) {
      document.querySelector(".dropdown").style.display = "block";
    } else {
      document.querySelector(".dropdown").style.display = "none";
    }
  }, [dropdown]);

  return (
    <>
      <nav id="top">
        <div className="top__container">
          <div className="top__flex">
            <Link to="/">
              <img src={small} alt="Logo" className="top__logo" />
            </Link>

            <p className="top__selected">Home</p>
            <p className="top__unselected"> Create</p>
          </div>
          <div className="top__profile" onClick={() => setDropDown(!dropdown)}>
            <div className="top__avatar">H</div>
            <FontAwesomeIcon icon={dropdown ? faAngleUp : faAngleDown} />
          </div>
        </div>
      </nav>
      <div className="dropdown__div">
        <div className="dropdown">
          <Link className="dropdown__item" to='/account'>
            <p>Account</p>
            <FontAwesomeIcon icon={faUser} />
          </Link>

          <div className="dropdown__item">
            <p>Sign Out</p>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Top;
