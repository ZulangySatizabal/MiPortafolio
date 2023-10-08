/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

import image from "../images/background-computer.jpg";
const imageAltText = "computer background";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Encriptador de Texto",
    description:
      "Web application that encrypts text. Made with html, css, javascript. With a focus on responsive design. As part of the first ONE Beginner in Programming Challenge, from the One program.",
    url: "https://github.com/ZulangySatizabal/Encriptador-de-Texto",
  },
  {
    title: "Contador de clicks con React",
    description:
      "As part of the basic React learning of the Learn React From Scratch course from FreeCodCamp in Spanish.",
    url: "https://github.com/ZulangySatizabal/contador-de-clicks",
  },
  {
    title: "Apeperia",
    description:
      "Apeperia project from the course 'Responsive Layouts: Working with mobile layouts', by Alura LATAM.",
    url: "https://github.com/ZulangySatizabal/Apperia",
  },
  {
    title: "Fruta & Fruta",
    description: "Alura Latam CSS architecture course.",
    url: "https://github.com/ZulangySatizabal/Fruta-Fruto",
  },
  {
    title: "Mini-Alura",
    description: "Project with flexbox from the Alura One program",
    url: "https://github.com/ZulangySatizabal/Mini-Alura/blob/main/README.md",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <img
        className="background"
        src={image}
        alt={imageAltText}
        style={{ opacity: "0.5", brightness: "0.4", contrast: "50%" }}
      />
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
