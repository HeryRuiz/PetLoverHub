import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

function Layout({ onBurger, offBurger }) {
  return (
    <>
      <Nav onBurger={onBurger} offBurger={offBurger} />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
