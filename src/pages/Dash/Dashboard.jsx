import React, { useState } from "react";
import Left from "./LeftNav";

function Dashboard() {
    const [content, setContent] = useState("Booking");
  return (
    <section id="dashboard">
      <Left content={content} setContent={setContent}/>
    </section>
  );
}

export default Dashboard;
