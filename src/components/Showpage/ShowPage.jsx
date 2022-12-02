import { Route, Routes } from "react-router-dom";
import ShowpageHeader from "./comps/Showpage Header/ShowpageHeader";
import Portfolio from "./comps/Portfolio/Portfolio";
import Weather from "./comps/Weather/Weather";
import Notes from "./comps/Notes/Notes";
import "./showpage.css";

const ShowPage = ({ icons }) => {
  console.log("ShowPage render");
  return (
    <div className="showpage">
      <ShowpageHeader icons={icons} />
      <Routes>
        <Route
          path="/hub"
          element={<Portfolio icons={icons} />}
        ></Route>
        <Route
          path="/hub/applets"
          element={
            <>
              <Weather icons={icons} />
              <Notes icons={icons} />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default ShowPage;
