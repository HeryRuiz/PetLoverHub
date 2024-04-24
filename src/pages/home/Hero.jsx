import React, { useEffect, useState } from "react";
import "./styles/Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <section id="hero">
        <div className="hero__container">
          <div className="hero__flex">
            <h2>Pet Trainer Hub</h2>
            {isSmallScreen ? (
              <p>
                Elevate your pet training game.
                Organize, schedule, and book.
                <br />
                All in one platform.
              </p>
            ) : (
              <p>
                Elevate your pet training game with our all-in-one platform. <br />
                Booking to scheduling, our tools empower organization.<br />
               
              </p>
            )}

            <Link className="hero__button">Get Started</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
