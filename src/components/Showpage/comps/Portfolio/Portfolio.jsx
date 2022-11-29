import data from "../../../../data/portfolioData.json";
import Projects from "./Projects/Projects";
import ContentBox from "./ContentBox";
import "./portfolio.css";

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
        <ContentBox key={section.id} id={section.id} title={section.title} body={section.body} />
      ))}
    </div>
  );
};

export default Portfolio;
