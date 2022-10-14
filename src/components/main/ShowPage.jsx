import Portfolio from "../showpage/Portfolio";
import Projects from "../showpage/Projects";
import Poll from "../side/Poll";

const ShowPage = ({ icons }) => {
  console.log("ShowPage render");
  return (
    <div className="background-rounded showpage">
      <Projects icons={icons} />
      <Portfolio />
      <Poll />
    </div>
  );
};

export default ShowPage;
