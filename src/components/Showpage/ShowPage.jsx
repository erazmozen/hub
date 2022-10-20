import Portfolio from "./comps/Portfolio/Portfolio";
import Notes from "./comps/Notes";
import Poll from "./comps/Poll";
import ShowpageHeader from "./comps/ShowpageHeader";
import "./showpage.css";

const ShowPage = ({ icons }) => {
  console.log("ShowPage render");
  return (
    <div className="background-rounded showpage">
      <ShowpageHeader icons={icons} />
      <Portfolio icons={icons} />
      <Notes icons={icons} />
      <Poll />
    </div>
  );
};

export default ShowPage;
