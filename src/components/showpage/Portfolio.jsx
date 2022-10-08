import data from "../../data/portfolioData.json";

console.log(data);

const ContentBox = ({ title, body }) => {
  return (
    <div className="background-rounded">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

const Portfolio = () => {
  const dataArray = [];

  Object.keys(data).forEach(function (key) {
    dataArray.push(data[key]);
  });

  console.log("Portfolio render");
  return (
    <div>
      {dataArray.map((section) => (
        <ContentBox
          key={section.id}
          title={section.title}
          body={section.body}
        />
      ))}
    </div>
  );
};

export default Portfolio;
