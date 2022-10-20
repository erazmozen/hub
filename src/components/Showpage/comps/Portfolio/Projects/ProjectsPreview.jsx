import "./projectspreview.css";

const ProjectPreview = ({ prevImages, index }) => {
  console.log("ProjectPreview render");

  return (
    <div className="projects-preview">
      <div>
        <h2>My Projects</h2>
        <p>
          Here are some of the projects that i have done just to showcase what i
          am capeable of doing. Feel free to contact me in case of a biz offer,
          or any other thing that may pop up.
        </p>
      </div>
      <div className="projects-contact"></div>
      <div className="projects-slider">
        <img key={prevImages.index} src={prevImages[index]} alt="" />
      </div>
    </div>
  );
};

export default ProjectPreview;
