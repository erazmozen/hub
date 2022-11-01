import data from "../../../../data/portfolioData.json";
import Projects from "./Projects/Projects";
import "./portfolio.css";

const ContentBox = ({ title, body }) => {
  const splitBody = body.split("/n");

  return (
    <div className="background-rounded section">
      <h2>{title}</h2>
      <div className="section-body">
        <div>
          {splitBody.map((line) => (
            <p key={Math.floor(Math.random() * 1000)}>{line}</p>
          ))}
        </div>
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

      <Projects icons={icons} />

      {dataArray.map((section) => (
        <ContentBox
          key={section.id}
          id={section.id}
          title={section.title}
          body={section.body}
        />
      ))}
    </div>
  );
};

export default Portfolio;
