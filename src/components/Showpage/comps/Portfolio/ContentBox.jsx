const ContentBox = ({ title, body }) => {
  const splitBody = body.split("/n");

  return (
    <div className="background-rounded section">
      <h2>{title}</h2>
      <div className="section-body">
        <div>
          {splitBody.map((line) => (
            <p key={Math.floor(Math.random() * 1000)}>
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentBox;
