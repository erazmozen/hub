const ContentBox = ({ title, body }) => {
  const splitBody = body.split("/n");

  return (
    <div className="background-rounded section">
      <h2>{title}</h2>
      <div className="section-body">
        <div>
          {splitBody.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentBox;
