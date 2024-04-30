import React, { useEffect, useState } from "react";

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
import { auth, getUserByUID } from "./pages/firebase/firebase.js";
import { onAuthStateChanged } from "firebase/auth";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [signedin, setSignedIn] = useState(false);
  const [load, setLoad] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if (user) {
        setSignedIn(true);
        setLoad(true);
        setTimeout(() => {
          getUserByUID(user.uid).catch((error) => {
            setError(error.message);
          });
        }, 500);
      } else {
        setLoad(false);
        setSignedIn(false);
      }
    });
  }, []);

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
          element={
            <Landing
              onBurger={onBurger}
              offBurger={offBurger}
              signedin={signedin}
            />
          }
        />
        <Route
          path="/home"
          element={
            <Home
              onBurger={onBurger}
              offBurger={offBurger}
              popup={popup}
              signedin={signedin}
            />
          }
        />
        <Route path="*" element={<Login popup={popup} />} />
        <Route path="/login" element={<Login popup={popup} />} />
        <Route path="/signup" element={<Signup popup={popup} />} />
        <Route path="/reset-password" element={<Password popup={popup} />} />
        {"Private Routes"}
        {load ? (
          <Route
            path="/home"
            element={
              <Home
                onBurger={onBurger}
                offBurger={offBurger}
                popup={popup}
                signedin={signedin}
              />
            }
          />
        ) : (
          <Route path="/home" element={<Login popup={popup} />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
