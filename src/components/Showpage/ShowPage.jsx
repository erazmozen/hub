import { Route, Routes } from "react-router-dom";
import Portfolio from "./comps/Portfolio/Portfolio";
import Notes from "./comps/Notes/Notes";
import ShowpageHeader from "./comps/Showpage Header/ShowpageHeader";
import Weather from "./comps/Weather/Weather";
import "./showpage.css";

const ShowPage = ({ icons }) => {
  console.log("ShowPage render");
  return (
    <div className="background-rounded showpage">
      <ShowpageHeader icons={icons} />
      <Routes>
        <Route path="/hub" element={<Portfolio icons={icons} />}></Route>

        <Route
          path="/applets"
          element={
            <div>
              <Weather icons={icons} /> <Notes icons={icons} />
            </div>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default ShowPage;
