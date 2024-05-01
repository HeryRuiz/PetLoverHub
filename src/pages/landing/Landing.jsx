import React from "react";
import Hero from "./Hero";
import Noti from "./Noti";
import Banner from "./Banner";
import Phone from "./Phone";
import Nav from "./Nav";
import Footer from "./Footer";

function Landing({ onBurger, offBurger, signedin }) {
  return (
    <>
      <Nav onBurger={onBurger} offBurger={offBurger} signedin={signedin} />
      <Hero signedin={signedin} />
      <main>
        <Phone signedin={signedin} />
        <Noti signedin={signedin} />
        <Banner signedin={signedin} />
      </main>
      <Footer />
    </>
  );
}

export default Landing;
