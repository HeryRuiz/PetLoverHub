import React from "react";
import "./styles/Window.css";
function Window() {
  return (
    <section id="window">
      <div className="window__container">
        <div className="window__top">
          <p className="window__head">
            Check out our <span className="noti__outline">dashboard</span>
          </p>
          <p className="window__body">
            Have a look at all the features we offer through this video
          </p>
        </div>
        <div className="window__border">
          <div className="window__vid">
          </div>
        </div>
      </div>
    </section>
  );
}

export default Window;
