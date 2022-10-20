import "../css/showpage/showpage.css";
import ProjectLink from "../side/ProjectLink";
import ProjectPreview from "../side/ProjectsPreview";
import prevImages from "../../data/prevData";

const Projects = ({ icons }) => {
  console.log("Projects render");
  return (
    <div className="projects">
      <div className="slink-holder">
        <ProjectLink icons={icons} title="Fitnes-App" />
        <ProjectLink icons={icons} title="React-Gallery" />
        <ProjectLink icons={icons} title="Portfolio-Template" />
        <ProjectLink icons={icons} title="React-Calculator" />
        <ProjectLink icons={icons} title="Meme-Generator" />
        <ProjectLink icons={icons} title="React-ImageSlider" />
        <ProjectLink icons={icons} title="React-Note-App" />
        <ProjectLink icons={icons} title="Password-Generator" />
      </div>
      <ProjectPreview prevImages={prevImages} />
    </div>
  );
};
export default Projects;
