import { useState } from "react";
import "./main.css";
import icons from "./icons";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import ShowPage from "./components/Showpage/ShowPage";
import DataContext from "./contexts/DataContext";

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

  const functions = {
    toggleSidebar,
    toggleShowpage,
  };

  console.log("App render");

  return (
    <div className="main">
      <DataContext.Provider value={functions}>
        <Header icons={icons} />
        <div className="content-wrapper">
          {sidebarToggle && <Sidebar icons={icons} />}
          {showpageToggle && <ShowPage icons={icons} />}
        </div>
        <Footer />
      </DataContext.Provider>
    </div>
  );
}

export default App;
