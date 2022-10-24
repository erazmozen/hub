import Portfolio from "./comps/Portfolio/Portfolio";
import Notes from "./comps/Notes";
import Poll from "./comps/Poll";
import ShowpageHeader from "./comps/ShowpageHeader";
import "./showpage.css";
import Weather from "./comps/Weather";

const ShowPage = ({ icons }) => {
  console.log("ShowPage render");
  return (
    <div className="background-rounded showpage">
      <ShowpageHeader icons={icons} />
      <Weather icons={icons} />
      <Portfolio icons={icons} />
      <Notes icons={icons} />
      <Poll />
    </div>
  );
};

export default ShowPage;
