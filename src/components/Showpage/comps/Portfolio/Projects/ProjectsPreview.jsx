import "./projectspreview.css";

const ProjectPreview = ({ prevImages, projectLinks, index }) => {
  console.log("ProjectPreview render");

  return (
    <div className="projects-preview">
      <div>
        <h2>My Projects</h2>
        <p>
        Here is a presentation of all the projects i have been working on for the past few months.
        </p>
      </div>
      <div className="projects-slider">
        <h2>{projectLinks[index].description}</h2>
        <img key={prevImages.index} src={prevImages[index]} alt="" />
      </div>
    </div>
  );
};

export default ProjectPreview;
