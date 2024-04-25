import React, { useEffect, useState } from "react";
import './styles/Dashboard.css'
import Left from "./LeftNav";
import Top from "./Top";
import Calendar from "./Calendar";

function Dashboard({onBurger, offBurger}) {
  const [content, setContent] = useState("Booking");
  const [isUnder1000px, setIsUnder1000px] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsUnder1000px(window.innerWidth < 1000);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="dashboard">
      {isUnder1000px ? (
        <Top onBurger={onBurger} offBurger={offBurger} content={content} setContent={setContent}/>
      ) : (
        <Left content={content} setContent={setContent} />
      )}
      
      <Calendar />
    </section>
  );
}

export default Dashboard;
