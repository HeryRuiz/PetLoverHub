import React from "react";
import Hero from "./Hero";
import Noti from "./Noti";
import Banner from "./Banner";
import Phone from "./Phone";
import Window from "./Window";
import Nav from "./Nav";
import Footer from "./Footer";

function Home({ onBurger, offBurger }) {
  return (
    <>
      <Nav onBurger={onBurger} offBurger={offBurger} />
      <Hero />
      <main>
        <Phone />
        <Window />
        <Noti />
        <Banner />
      </main>
      <Footer />
    </>
  );
}

export default Home;
