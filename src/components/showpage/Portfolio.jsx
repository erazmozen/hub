import data from "../../data/portfolioData.json";
import "../css/showpage/portfolio.css";

const ContentBox = ({ title, body }) => {
  const splitBody = body.split("/n");

  return (
    <div className="background-rounded section">
      <h2>{title}</h2>
      <div className="body">
        <p>
          {splitBody.map((line) => (
            <div>{line}</div>
          ))}
        </p>
      </div>
    </div>
  );
};

const Portfolio = ({ icons }) => {
  const dataArray = [];

  Object.keys(data).forEach(function (key) {
    dataArray.push(data[key]);
  });

  console.log("Portfolio render");
  return (
    <div className="portfolio">
      <div className="portfolio-header">
        <h1>Portfolio</h1>
        <icons.BsInfo />
      </div>

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
