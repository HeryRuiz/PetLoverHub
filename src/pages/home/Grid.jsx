import React from "react";
import "./styles/Grid.css";
import one from "../images/1.jpg";
import two from "../images/2.jpg";
import three from "../images/3.jpg";
import four from "../images/4.jpg";
import five from "../images/5.jpg";
import six from "../images/6.jpg";
import seven from "../images/7.jpg";
import eight from "../images/8.jpg";
import nine from "../images/9.jpg";
import ten from "../images/10.jpg";
import eleven from "../images/11.jpg";
import twelve from "../images/12.jpg";
import thrit from "../images/13.jpg";
import fort from "../images/14.jpg";
import fifth from "../images/15.jpg";
import sixteth from "../images/16.jpg";
import seventeth from "../images/17.jpg";
import ninetenth from "../images/19.jpg";
import twenty from "../images/20.jpg";

function Grid() {
  const images = [
    one, two, three, four, five, six, seven, eight, nine, ten,
    eleven, twelve, thrit, fort, fifth, sixteth, seventeth,
    ninetenth, twenty
  ];

  return (
    <section id="grid">
      <div className="grid__container">
        {images.map((image, index) => (
          <div className="grid__box" key={index}>
            <button className="grid__button">Save</button>
            <img src={image} alt={`Post ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Grid;