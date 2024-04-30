import React, { useEffect, useState } from "react";
import small from "../images/logosmall.png";
import "./styles/Top.css";
import {
  ChevronDown,
  CircleAlert,
  CircleCheckBig,
  Plus,
  X,
} from "lucide-react";
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
  const [uploadFile, setUploadFile] = useState(null);

  useEffect(() => {
    if (dropdown === true) {
      document.querySelector(".dropdown").style.display = "block";
    } else {
      document.querySelector(".dropdown").style.display = "none";
    }
  }, [dropdown]);

  const closeUpdate = () => {
    document.querySelector(".upload__modal").style.display = "none";
    document.querySelector(".upload__dark").style.display = "none";
  };

  const openUpdate = () => {
    document.querySelector(".upload__modal").style.display = "block";
    document.querySelector(".upload__dark").style.display = "block";
  };
  const isImage = (file) => {
    return file.type.startsWith("image/");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
  };
  return (
    <>
      <nav id="top">
        <div className="top__container">
          <div className="top__flex">
            <Link to="/">
              <img src={small} alt="Logo" className="top__logo" />
            </Link>

            <p className="top__selected">Home</p>
          </div>
          <div className="top__profile" onClick={() => setDropDown(!dropdown)}>
            <div className="top__avatar">H</div>
            <FontAwesomeIcon icon={dropdown ? faAngleUp : faAngleDown} />
          </div>
        </div>
      </nav>
      <button className="upload" onClick={openUpdate}>
        <Plus />
      </button>

      <div className="dropdown__div">
        <div className="dropdown">
          <Link className="dropdown__item" to="/account">
            <p>Account</p>
            <FontAwesomeIcon icon={faUser} />
          </Link>

          <div className="dropdown__item">
            <p>Sign Out</p>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </div>
        </div>
      </div>

      <div className="upload__modal">
        <div className="upload__top">
          <p>Upload your file here</p>
          <X className="upload__close" onClick={closeUpdate} />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="upload__div"></div>
          <div className="upload__div">
            <label htmlFor="file">File</label>
            <input
              type="file"
              placeholder="Title"
              className="upload__input "
              id="file"
              required
            />
          </div>
          <button className="upload__button" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="upload__dark"></div>

      <div className="popup__success">
        <CircleCheckBig />
        <p>File Added</p>
      </div>
      <div className="popup__fail">
        <CircleAlert />
        <p>File Rejected</p>
      </div>

      <div className="popup__fail2">
        <CircleAlert />
        <p>File Deleted</p>
      </div>
    </>
  );
}

export default Top;
