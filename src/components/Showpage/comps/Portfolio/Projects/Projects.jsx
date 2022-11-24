import { useState } from "react";
import prevImages from "../../../../../data/prevData";
import ProjectLink from "./ProjectLink";
import ProjectPreview from "./ProjectsPreview";
import "./projects.css";

const Projects = ({ icons }) => {
  const [index, setIndex] = useState(0);

  const projectLinks = [
    {
      title: "Fitnes-App",
      description: "MERN STACK Fitnes Tracking App",
    },
    {
      title: "React-Signin",
      description: "Simple React Login Page",
    },
    {
      title: "Portfolio-Template",
      description: "Artist's Portfolio Webpage",
    },
    {
      title: "React-Calculator",
      description: "React Calculator App",
    },
    {
      title: "Meme-Generator",
      description: "React Meme Generator",
    },
    {
      title: "React-ImageSlider",
      description: "Simple Image Slider in React",
    },
    {
      title: "Tenzies-Game",
      description: "React Tenzies Game",
    },
    {
      title: "Password-Generator",
      description: "Password Generator made with JavaScript",
    },
  ];

  function changeSlide(linkIndex) {
    console.log("changeSlide");
    if (linkIndex === index) return;
    setIndex(linkIndex);
  }

  function nextSlide() {
    const isLast = index === prevImages.length - 1;
    setIndex(isLast ? 0 : index + 1);
  }

  function prevSlide() {
    const isFirst = index === 0;
    setIndex(isFirst ? prevImages.length - 1 : index - 1);
  }

  console.log("Projects render");
  return (
    <div className="projects">
      <div className="link-holder">
        {projectLinks.map((link, linkIndex) => (
          <ProjectLink
            key={linkIndex}
            icons={icons}
            index={index}
            linkIndex={linkIndex}
            changeSlide={changeSlide}
            title={link.title}
          />
        ))}

        <div>
          <div className="button-holder">
            <button className="navigate-button" onClick={prevSlide}>
              <icons.MdOutlineNavigateBefore />
            </button>
            <button className="navigate-button" onClick={nextSlide}>
              <icons.MdOutlineNavigateNext />
            </button>
          </div>
        </div>
      </div>
      <ProjectPreview
        index={index}
        projectLinks={projectLinks}
        prevImages={prevImages}
      />
    </div>
  );
};
export default Projects;
