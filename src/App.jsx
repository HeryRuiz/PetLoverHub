import { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/home/Home";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
function App() {
  return (
    <>
    <>
      <Router>
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  </>
  );
}

export default App;
