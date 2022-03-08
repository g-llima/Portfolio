import React from "react";
import "./CSS/Projects.css";

import Card from "./Card/Card";

function Projects() {
  return (
    <div className="projects">
      <div className="projects__content">
        <h2 className="projects__content__title">Projetos</h2>
        <div className="projects__content__items">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Projects;
