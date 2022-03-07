import React from "react";
import "./CSS/Home.css";

import Hero from "../../Components/Hero/Hero";
import About from "../../Components/About/About";
import Projects from "../../Components/Projects/Projects";

function Home() {
  return (
    <div className="home">
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default Home;
