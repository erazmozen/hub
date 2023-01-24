import { useState, useContext } from "react";
import { IconsContext } from "../../../../../contexts/IconsContext";
import imagePreview from "../../../../../data/prevData";
import ProjectLink from "./ProjectLink";
import ProjectPreview from "./ProjectsPreview";
import Button from "../../../../common/components/Button";
import "./projects.css";

const Projects = () => {
  const { MdOutlineNavigateBefore, MdOutlineNavigateNext } =
    useContext(IconsContext);
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
            index={index}
            linkIndex={linkIndex}
            changeSlide={changeSlide}
            title={link.title}
          />
        ))}

        <div className="button-holder">
          <Button
            onClick={prevSlide}
            icon={<MdOutlineNavigateBefore />}
          />
          <Button
            onClick={nextSlide}
            icon={<MdOutlineNavigateNext />}
          />
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
