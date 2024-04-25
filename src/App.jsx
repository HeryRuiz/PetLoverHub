import { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Dashboard from "./pages/Dash/Dashboard";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
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

function App() {
  return (
    <>
      <>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={<Home onBurger={onBurger} offBurger={offBurger} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/dashboard"
              element={<Dashboard onBurger={onBurger} offBurger={offBurger} />}
            />
          </Routes>
        </Router>
      </>
    </>
  );
}

export default App;
