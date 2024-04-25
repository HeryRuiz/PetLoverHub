import React from "react";
import Hero from "./Hero";
import Noti from "./Noti";
import Banner from "./Banner";
import Phone from "./Phone";
import Window from "./Window";

function Home() {
  return (
    <>
      <Hero />
      <main>
        <Phone />
        <Window />
        <Noti />
        <Banner />
      </main>
    </>
  );
}

export default Home;
