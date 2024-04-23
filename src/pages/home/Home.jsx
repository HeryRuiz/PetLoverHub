import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Noti from "./Noti";
import Banner from "./Banner";
import Footer from "./Footer";
import Phone from "./Phone";
import Window from "./Window";

function Home() {
  return (
    <>
      <Nav />
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
