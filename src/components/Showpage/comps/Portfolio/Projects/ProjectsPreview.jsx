import "./projectspreview.css";

const ProjectPreview = ({ index, imagePreview }) => {
  console.log("ProjectPreview render");

  return (
    <div className="projects-preview">
      <div>
        <h2>My Projects</h2>
        <p>
          Here is a presentation of all the projects i have
          been working on for the past few months.
        </p>
      </div>
      <div className="projects-slider">
        <h2>{imagePreview[index].title}</h2>
        <h3>{imagePreview[index].description}</h3>
        <img
          key={imagePreview.index}
          src={imagePreview[index].image}
          alt={imagePreview[index].title}
        />
      </div>
    </div>
  );
};

export default ProjectPreview;
