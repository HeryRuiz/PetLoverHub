import React, { useEffect } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Layout from "./pages/Layout/Layout";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const offBurger = (con) => {
    const element = document.querySelector(`.${con}`);
    if (element) {
      element.style.display = "none";
    }
  };

  const onBurger = (con) => {
    const element = document.querySelector(`.${con}`);
    if (element) {
      element.style.display = "block";
    }
  };
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout onBurger={onBurger} offBurger={offBurger} />}>
          {"Public Routes"}

          <Route path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {"Private Routes"}
      </Routes>
    </Router>
  );
}

export default App;
