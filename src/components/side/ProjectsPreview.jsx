import "../css/side/projectspreview.css";

const ProjectPreview = ({ prevImages }) => {
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
        {prevImages.map((src) => (
          <img key={src} src={src} alt="" />
        ))}
      </div>
    </div>
  );
};

export default ProjectPreview;
