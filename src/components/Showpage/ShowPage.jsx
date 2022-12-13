import { Route, Routes } from "react-router-dom";
import { NotesProvider } from "../../contexts/NotesContext";
import ShowpageHeader from "./comps/Showpage Header/ShowpageHeader";
import Portfolio from "./comps/Portfolio/Portfolio";
import Weather from "./comps/Weather/Weather";
import Notes from "./comps/Notes/Notes";
import "./showpage.css";

const ShowPage = () => {
  console.log("ShowPage render");
  return (
    <div className="showpage">
      <ShowpageHeader />
      <Routes>
        <Route path="/hub" element={<Portfolio />}></Route>
        <Route
          path="/hub/applets"
          element={
            <>
              <Weather />
              <NotesProvider>
                <Notes />
              </NotesProvider>
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default ShowPage;
