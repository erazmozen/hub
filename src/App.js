import { useState } from "react";
import "./main.css";
import icons from "./icons";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import ShowPage from "./components/Showpage/ShowPage";

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(true);
  const [showpageToggle, setShowpageToggle] = useState(true);

  function toggleSidebar() {
    setSidebarToggle((prev) => (prev = !prev));
    console.log("sidebar toggled, state:", !sidebarToggle);
  }

  function toggleShowpage() {
    setShowpageToggle((prev) => (prev = !prev));
    console.log("showpage toggled, state:", !showpageToggle);
  }

  console.log("App render");

  return (
    <div className="main">
      <Header icons={icons} toggleSidebar={toggleSidebar} />
      <div className="content-wrapper">
        {sidebarToggle && (
          <Sidebar
            icons={icons}
            toggleSidebar={toggleSidebar}
            toggleShowpage={toggleShowpage}
          />
        )}
        {showpageToggle && <ShowPage icons={icons} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
