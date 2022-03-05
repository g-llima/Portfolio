import React from "react";
import "./CSS/Home.css";

import Hero from "../../Components/Hero/Hero";
import About from "../../Components/About/About";

function Home() {
  return (
    <div className="home">
      <Hero />
      <About />
    </div>
  );
}

export default Home;
