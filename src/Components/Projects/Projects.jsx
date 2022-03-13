import React, { useState, useEffect } from "react";
import "./CSS/Projects.css";

import Card from "./Card/Card";

const cards = [
  {
    title: "Website de teste",
    description: "Projeto para aprender e testar novas tecnologias.",
    topics: ["CSS", "React", "JS"],
    img: "/imgs/Brand.png",
    github: "https://github.com/g-llima/template1-website",
    website: "#",
  },
  {
    title: "PUCRS Store - Clone",
    description:
      "Réplica das principais funcionalidades e designs da loja virtual da PUCRS.",
    topics: ["CSS", "React", "JS", "Firebase"],
    img: "/imgs/PUCRS Store.png",
    github: "https://github.com/g-llima/PUCRS_Store_clone",
    website: "#",
  },
  {
    title: "HEAT",
    description: "Website de previsão do tempo para qualquer cidade do mundo.",
    topics: ["CSS", "JS"],
    img: "/imgs/HEAT.png",
    github: "https://github.com/g-llima/Heat-Website",
    website: "#",
  },
  {
    title: "Instagram - Clone",
    description: "Réplica das funcionalidades básicas do Instagram.",
    topics: ["CSS", "React", "JS", "Firebase"],
    img: "/imgs/Instagram.png",
    github: "https://github.com/g-llima/instagram_clone",
    website: "#",
  },
  {
    title: "Website Bootstrap",
    description: "Projeto para aprender os princípios básicos do Bootstrap.",
    topics: ["CSS", "Bootstrap"],
    img: "/imgs/Bootstrap.png",
    github: "https://github.com/g-llima/Website-bootstrap",
    website: "#",
  },
  {
    title: "Portfolio",
    description: "Website para mostrar os meus projetos.",
    topics: ["SASS", "React", "JS"],
    img: "/imgs/Portfolio.png",
    github: "https://github.com/g-llima/Portfolio",
    website: "#",
  },
  {
    title: "Task Tracker",
    description: "Projeto para aprender os princípios básicos do Angular.",
    topics: ["SASS", "Angular", "TS"],
    img: "/imgs/Task Tracker.png",
    github: "https://github.com/g-llima/Portfolio",
    website: "#",
  },
  {
    title: "Conecti.me - Clone",
    description: "Réplica dos principais designs do site Conecti.me.",
    topics: ["CSS", "React", "JS"],
    img: "/imgs/Conecti.me.png",
    github: "https://github.com/g-llima/Portfolio",
    website: "#",
  },
  {
    title: "Bookmark",
    description: "Projeto para aprender e testar novos designs.",
    topics: ["CSS", "React", "JS", "MySQL"],
    img: "/imgs/Bookmark.png",
    github: "https://github.com/g-llima/Portfolio",
    website: "#",
  },
  {
    title: "TECHNO",
    description: "Projeto blog CRUD - EM DESENVOLVIMENTO ",
    topics: ["SASS", "React", "TS", "MongoDB"],
    img: "/imgs/Blog.png",
    github: "https://github.com/g-llima/Portfolio",
    website: "#",
    isDev: true,
  },
  {
    title: "Ecommerce",
    description: "Website ecommerce (loja virtual) - EM DESENVOLVIMENTO ",
    topics: ["CSS", "React", "JS"],
    img: "/imgs/Ecommerce.png",
    github: "https://github.com/g-llima/Portfolio",
    website: "#",
    isDev: true,
  },
];

const filters = [
  "CSS",
  "SASS",
  "JS",
  "TS",
  "React",
  "Angular",
  "Firebase",
  "MySQL",
  "Bootstrap",
  "MongoDB",
];

function filterByTopic(element, topic) {
  return element.topics.includes(topic);
}

function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(cards);
  const [activeBtn, setActiveBtn] = useState(-1);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 1200 && animate === false) {
        setAnimate(true);
      }
    });
  }, []);

  return (
    <div className="projects">
      <div className="projects__content">
        {/* TITLE */}
        <h2
          className={`projects__content__title ${
            animate ? "projects__show" : null
          }`}
        >
          Projetos
        </h2>

        <ul className="projects__content__filter">
          {/* "TODOS" FILTER */}
          <li
            className={`projects__content__filter__item 
            ${activeBtn == -1 ? "active__filter" : null}
            ${animate ? "filter__show" : null}`}
            onClick={() => {
              setVisibleProjects(cards);
              setActiveBtn(-1);
            }}
          >
            Todos
          </li>

          {/* FILTERS */}
          {filters.map((item, index) => (
            <li
              key={index}
              className={`projects__content__filter__item 
              ${activeBtn == index ? "active__filter " : null}
              ${animate ? "filter__show" : null}__${index}`}
              onClick={(e) => {
                setVisibleProjects(
                  cards.filter((el) => filterByTopic(el, e.target.innerHTML))
                );
                setActiveBtn(index);
              }}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* PROJECTS */}
        <div
          className={`projects__content__items 
          ${animate ? "projects__show" : null}`}
        >
          {visibleProjects.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              topics={item.topics}
              img={item.img}
              github={item.github}
              website={item.website}
              isDev={item.isDev}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
