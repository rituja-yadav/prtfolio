/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";


import image from "../images/assets-cached.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a Computer Science student at RMK Engineering College, expecting to graduate in June 2025. With a strong foundation in programming languages, I have advanced skills in web development and databases. Additionally, I have experience in machine learning and a passion for exploring emerging technologies like blockchain and the Internet of Things. As an active member of various organizations, including ISTE and Ted-X, I am committed to continuous learning and contributing to the tech community.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [

  "HTML",
  "CSS",
  "Python",
  "Java",
  "C",
  "JavaScript",
  "PHP",
  "Machine Learning",
  
];

const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my technical skills and experience, I continually look for new and better ways to make technology accessible by all. ";

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
