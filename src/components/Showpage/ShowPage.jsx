import { Route, Routes } from "react-router-dom";
import Portfolio from "./comps/Portfolio/Portfolio";
import Notes from "./comps/Notes";
// import Poll from "./comps/Poll";
import ShowpageHeader from "./comps/ShowpageHeader";
import "./showpage.css";
import Weather from "./comps/Weather";

const ShowPage = ({ icons }) => {
  console.log("ShowPage render");
  return (
    <div className="background-rounded showpage">
      <ShowpageHeader icons={icons} />
      <Routes>
        <Route path="/hub" element={<Portfolio icons={icons} />}>
          {/* <Poll /> */}
        </Route>

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
