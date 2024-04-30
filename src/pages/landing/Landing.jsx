import React from "react";
import Hero from "./Hero";
import Noti from "./Noti";
import Banner from "./Banner";
import Phone from "./Phone";
import Nav from "./Nav";
import Footer from "./Footer";

function Landing({ onBurger, offBurger }) {
  return (
    <>
      <Nav onBurger={onBurger} offBurger={offBurger}/>
      <Hero />
      <main>
        <Phone />
        <Noti />
        <Banner />
      </main>
      <Footer />
    </>
  );
}

export default Landing;
