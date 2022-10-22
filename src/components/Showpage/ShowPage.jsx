import Portfolio from "./comps/Portfolio/Portfolio";
import Notes from "./comps/Notes";
import Poll from "./comps/Poll";
import ShowpageHeader from "./comps/ShowpageHeader";
import "./showpage.css";
import Weather from "./comps/Weather";
import { useContext } from "react";
import DataContext from "../../contexts/DataContext";

const ShowPage = ({ icons }) => {
  const loading = useContext(DataContext);
  const isLoading = loading.loading;
  console.log("ShowPage render");
  return (
    <div className="background-rounded showpage">
      <ShowpageHeader icons={icons} />
      {!isLoading && <Weather icons={icons} />}
      <Portfolio icons={icons} />
      <Notes icons={icons} />
      <Poll />
    </div>
  );
};

export default ShowPage;
