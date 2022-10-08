import data from "../../data/portfolioData.json";
import "../css/showpage/portfolio.css";

const ContentBox = ({ title, body }) => {
  const countWords = body.split(" ");

  return (
    <div className="background-rounded section">
      <h2>{title}</h2>
      <div className="body">
        <p>{body}</p>
        <div className="count">{`Words: ${countWords.length}`}</div>
      </div>
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
