import React, { useEffect } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Password from "./pages/Auth/Password";
import Home from "./pages/home/Home";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  function offBurger(con) {
    const element = document.querySelector(`.${con}`);
    if (element) {
      element.style.display = "none";
    }
  }

  function onBurger(con) {
    const element = document.querySelector(`.${con}`);
    if (element) {
      element.style.display = "block";
    }
  }
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={<Landing onBurger={onBurger} offBurger={offBurger} />}
          Platform
        />
        <Route 
          path="/home"
          element={<Home onBurger={onBurger} offBurger={offBurger} />}
          Platform
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<Password />} />
        {"Private Routes"}
      </Routes>
    </Router>
  );
}

export default App;
