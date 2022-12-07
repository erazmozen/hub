import { useContext } from "react";
import { TogglesContext } from "../../contexts/TogglesContext";
import Sidebar from "../Sidebar/Sidebar";
import ShowPage from "../Showpage/ShowPage";

const Content = () => {
  const { sidebarToggle, showpageToggle } =
    useContext(TogglesContext);
  console.log("Content Render");
  return (
    <div className="content-wrapper">
      {sidebarToggle && <Sidebar />}
      {showpageToggle && <ShowPage />}
    </div>
  );
};

export default Content;
