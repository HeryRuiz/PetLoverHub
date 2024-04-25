import React from "react";
import Nav from "../Layout/Nav";
import Hero from "./Hero";
import Noti from "./Noti";
import Banner from "./Banner";
import Footer from "../Layout/Footer";
import Phone from "./Phone";
import Window from "./Window";

function Home({onBurger, offBurger}) {
  return (
    <>
      <Nav onBurger={onBurger} offBurger={offBurger}/>
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
