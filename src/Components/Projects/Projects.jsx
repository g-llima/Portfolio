import React from "react";
import "./CSS/Projects.css";

import Card from "./Card/Card";

const cards = [
  {
    title: "Lorem ipsum dolor",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    topics: ["HTML", "CSS", "REACT", "JavaScript"],
    img: "https://files.tecnoblog.net/meiobit/wp-content/uploads/2021/09/lost-in-random-001.jpg",
    github: "https://github.com/g-llima",
    website: "#",
  },
  {
    title: "Lorem ipsum dolor",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    topics: ["HTML", "CSS", "JavaScript"],
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Android_TV_game_controller.jpg/1200px-Android_TV_game_controller.jpg",
    github: "https://github.com/g-llima",
    website: "#",
  },
  {
    title: "Lorem ipsum dolor",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    topics: ["HTML", "CSS", "REACT", "JavaScript"],
    img: "https://cdnportal.mobalytics.gg/production/2021/06/64779e0a-league-of-legends-game-bg.png",
    github: "https://github.com/g-llima",
    website: "#",
  },
];

function Projects() {
  return (
    <div className="projects">
      <div className="projects__content">
        <h2 className="projects__content__title">Projetos</h2>
        <div className="projects__content__items">
          {cards.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              topics={item.topics}
              img={item.img}
              github={item.github}
              website={item.website}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
