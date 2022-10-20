import "./projectlink.css";

const ProjectLink = ({ title, icons, changeSlide, linkIndex, index }) => {
  const git = "https://github.com/erazmozen/";
  const gitIo = "https://erazmozen.github.io/";

  console.log("ProjectLink render");
  return (
    <div
      onClick={() => changeSlide(linkIndex)}
      title={title}
      className={`common-button link`}
      style={index === linkIndex ? { background: "var(--primary)" } : {}}
    >
      <div className="redirect">
        <a href={`${gitIo}${title}`} target="_blank" rel="noreferrer">
          {<icons.GoPlay size={22} />}
        </a>
        <a href={`${git}${title}`} target="_blank" rel="noreferrer">
          {<icons.FiGithub />}
        </a>
      </div>
      <h3>{`${title}`}</h3>
    </div>
  );
};

export default ProjectLink;
