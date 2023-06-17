

import React from "react";

import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "My Resume Site",
    description: "My resume showcases my qualifications, achievements, and experiences, demonstrating my expertise and dedication in various fields. It highlights my skills and accomplishments, providing a comprehensive overview of my professional background.",
    url: "https://drive.google.com/file/d/1xfYEIo2LyfHiENPcucsMDFswJQi076O-/view?usp=drive_link",
  },
  {
    title: "Leetcode",
    description:
      "LeetCode has been instrumental in honing my coding skills and problem-solving abilities. Through consistent practice and challenges, I have sharpened my algorithmic thinking and coding efficiency, enabling me to tackle complex problems with confidence.",
    url: "https://leetcode.com/rituja_yadav/",
  },

];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
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
