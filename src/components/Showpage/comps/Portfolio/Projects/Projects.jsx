import { useState } from "react";
import imagePreview from "../../../../../data/prevData";
import ProjectLink from "./ProjectLink";
import ProjectPreview from "./ProjectsPreview";
import "./projects.css";
import Button from "../../../../common/Button";

const Projects = ({ icons }) => {
  const [index, setIndex] = useState(0);

  function changeSlide(linkIndex) {
    console.log("changeSlide");
    if (linkIndex === index) return;
    setIndex(linkIndex);
  }

  function nextSlide() {
    const isLast = index === imagePreview.length - 1;
    setIndex(isLast ? 0 : index + 1);
  }

  function prevSlide() {
    const isFirst = index === 0;
    setIndex(isFirst ? imagePreview.length - 1 : index - 1);
  }

  console.log("Projects render");
  return (
    <div className="projects">
      <div className="link-holder">
        {imagePreview.map((link, linkIndex) => (
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
            <Button
              onClick={prevSlide}
              icon={<icons.MdOutlineNavigateBefore />}
            />
            <Button
              onClick={nextSlide}
              icon={<icons.MdOutlineNavigateNext />}
            />
          </div>
        </div>
      </div>
      <ProjectPreview
        index={index}
        imagePreview={imagePreview}
      />
    </div>
  );
};
export default Projects;
