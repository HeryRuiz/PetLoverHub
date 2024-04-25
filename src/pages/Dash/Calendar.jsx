import React, { useState } from "react";
import "./styles/Calendar.css";
import "./styles/Dashboard.css";
import sophie from "../images/sophie.jpg";
import { ChevronDown } from "lucide-react";
function Calendar() {
  return (
    <>
      <section className="dash">
        <div className="dash__container">
          <div className="dash__top">
            <h2>Availability</h2>
            <div>
              <img src={sophie} alt="Avatar" className="dash__avatar"/>
              <ChevronDown />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Calendar;
