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

  function popup(pop) {
    document.querySelector(`.${pop}`).style.top = "1rem";
    setTimeout(() => {
        document.querySelector(`.${pop}`).style.top = "-100px";
    }, 2000);
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
          element={<Home onBurger={onBurger} offBurger={offBurger} popup={popup} />}
          Platform
        />
        <Route path="*" element={<Login popup={popup}/>} />
        <Route path="/login" element={<Login popup={popup} />} />
        <Route path="/signup" element={<Signup popup={popup}/>} />
        <Route path="/reset-password" element={<Password popup={popup} />} />
        {"Private Routes"}
      </Routes>
    </Router>
  );
}

export default App;
