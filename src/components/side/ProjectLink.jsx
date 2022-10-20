const ProjectLink = ({ title, icons }) => {
  const git = "https://github.com/erazmozen/";
  const gitIo = "https://erazmozen.github.io/";

  console.log("ProjectLink render");
  return (
    <div title={title} className="common-button link">
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
