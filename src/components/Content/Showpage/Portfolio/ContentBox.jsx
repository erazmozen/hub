const ContentBox = ({ title, body, type }) => {
  const splitBody = body.split("/n");

  console.log(splitBody);
  return (
    <div className="background-rounded section">
      <h2>{title}</h2>
      <div className="section-body">
        <div
          className="body-holder"
          style={{
            flexDirection:
              type === "text" ? "column" : "row",
          }}
        >
          {splitBody.map((line, index) => (
            <p
              className={type === "tags" ? "tag" : ""}
              key={index}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentBox;
