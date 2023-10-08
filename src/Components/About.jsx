/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a frontend web developer. I studied Information Systems at the Universidad del Valle, and was part of the Oracle One training with a specialization in Front End. I like to give life to web pages, from the client side, using the different tools that the web offers.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web developer",
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "REACT",
  "GIT / GITHUB",
  "Responsive Web Design",
];

const detailOrQuote =
  "The presentation does matter, if the interface does not look good, the user will not have a good experience, and that is where I come in, making those websites a reality that are aesthetically beautiful and there is harmony between the details.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
