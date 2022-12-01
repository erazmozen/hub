import { useContext } from "react";
import { TogglesContext } from "../../contexts/TogglesContext";
import Sidebar from "../Sidebar/Sidebar";
import ShowPage from "../Showpage/ShowPage";

const Content = ({ icons }) => {
  const { sidebarToggle, showpageToggle } = useContext(TogglesContext);
  console.log("Content Render");
  return (
    <div className="content-wrapper">
      {sidebarToggle && <Sidebar icons={icons} />}
      {showpageToggle && <ShowPage icons={icons} />}
    </div>
  );
};

export default Content;
