import React, { useState, useEffect } from "react";
import "./CSS/Projects.css";

import Card from "./Card/Card";

const cards = [
  {
    title: "React Website",
    description: "Projeto para aprender e testar novas tecnologias.",
    topics: ["CSS", "React", "JS"],
    img: "/imgs/Brand.png",
    github: "https://github.com/g-llima/template1-website",
    website: "https://classy-sorbet-414eb6.netlify.app",
  },
  {
    title: "PUCRS Store - Clone",
    description:
      "Réplica das principais funcionalidades e designs da loja virtual da PUCRS.",
    topics: ["CSS", "React", "JS", "Firebase"],
    img: "/imgs/PUCRS Store.png",
    github: "https://github.com/g-llima/PUCRS_Store_clone",
    website: "https://pucrs-store.web.app",
  },
  {
    title: "HEAT",
    description: "Website de previsão do tempo para qualquer cidade do mundo.",
    topics: ["CSS", "JS"],
    img: "/imgs/HEAT.png",
    github: "https://github.com/g-llima/Heat-Website",
    website: "#",
    onlyRepo: true,
  },
  {
    title: "Instagram - Clone",
    description: "Réplica das funcionalidades básicas do Instagram.",
    topics: ["CSS", "React", "JS", "Firebase"],
    img: "/imgs/Instagram.png",
    github: "https://github.com/g-llima/instagram_clone",
    website: "https://instagram-clone-20fee.web.app",
  },
  {
    title: "Website Bootstrap",
    description: "Projeto para aprender os princípios básicos do Bootstrap.",
    topics: ["CSS", "Bootstrap"],
    img: "/imgs/Bootstrap.png",
    github: "https://github.com/g-llima/Website-bootstrap",
    website: "https://g-llima.github.io/Website-bootstrap/",
  },
  {
    title: "Portfolio",
    description: "Website para mostrar os meus projetos.",
    topics: ["SASS", "React", "JS"],
    img: "/imgs/Portfolio.png",
    github: "https://github.com/g-llima/Portfolio",
    website: "#",
    onlyRepo: true,
  },
  {
    title: "Task Tracker",
    description: "Projeto para aprender os princípios básicos do Angular.",
    topics: ["SASS", "Angular", "TS"],
    img: "/imgs/Task Tracker.png",
    github: "https://github.com/g-llima/Task-Tracker",
    website: "#",
    onlyRepo: true,
  },
  {
    title: "Conecti.me - Clone",
    description: "Réplica dos principais designs do site Conecti.me.",
    topics: ["CSS", "React", "JS", "MongoDB"],
    img: "/imgs/Conecti.me.png",
    github: "https://github.com/g-llima/E-commerce_Website",
    website: "https://nifty-curran-d3a08e.netlify.app",
  },
  {
    title: "CRUD - PHP",
    description: "Website CRUD em php utilizando apache.",
    topics: ["PHP", "Bootstrap", "MySQL"],
    img: "/imgs/Crud_PHP.png",
    github: "https://github.com/g-llima/CRUD-PHP",
    onlyRepo: true,
  },
  {
    title: "Bookmark",
    description: "Projeto para aprender e testar novas ferramentas.",
    topics: ["CSS", "React", "JS"],
    img: "/imgs/Bookmark.png",
    github: "https://github.com/g-llima/Bookmark-Website",
    website: "https://heuristic-hoover-3d87b9.netlify.app",
  },
  {
    title: "TECHNO",
    description: "Website ecommerce (loja virtual).",
    topics: ["CSS", "React", "JS", "MongoDB"],
    img: "/imgs/Ecommerce.png",
    github: "https://github.com/g-llima/E-commerce_Website",
    website: "https://legendary-piroshki-3b954e.netlify.app",
  },
  {
    title: "GEATS",
    description: "Website ecommerce de restaurante",
    topics: ["SASS", "Angular", "TS", "Java"],
    img: "/imgs/geats.png",
    github: "https://github.com/g-llima/G-EATS",
    website: "https://whimsical-kitsune-517156.netlify.app",
  },
  {
    title: "BLOG",
    description: "Projeto blog CRUD - EM DESENVOLVIMENTO ",
    topics: ["SASS", "React", "TS", "MongoDB"],
    img: "/imgs/Blog.png",
    github: "#",
    website: "#",
    isDev: true,
  },
];

const filters = [
  "Todos",
  "CSS",
  "SASS",
  "JS",
  "TS",
  "React",
  "Angular",
  "Firebase",
  "Bootstrap",
  "MongoDB",
  "MySQL",
  "PHP",
  "Java",
];

function filterByTopic(element, topic) {
  return element.topics.includes(topic);
}

function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(cards);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 1200 && animate === false) {
        setAnimate(true);
      }
    });
  }, [animate]);

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
          <li>
            <select
              className="projects__content__filter__item"
              onChange={(e) => {
                if (e.target.value == "Todos") {
                  setVisibleProjects(cards);
                } else {
                  setVisibleProjects(
                    cards.filter((el) => filterByTopic(el, e.target.value))
                  );
                }
              }}
            >
              {filters.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </li>
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
              onlyRepo={item.onlyRepo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
