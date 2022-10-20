import { useState } from "react";
import "./main.css";
import icons from "./icons";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import ShowPage from "./components/Showpage/ShowPage";
import { DataProvider } from "./contexts/DataContext";

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(true);
  const [showpageToggle, setShowpageToggle] = useState(true);

  const functions = {
    toggleSidebar,
    toggleShowpage,
  };

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
      <DataProvider value={functions}>
        <Header icons={icons} />
        <div className="content-wrapper">
          {sidebarToggle && <Sidebar icons={icons} />}
          {showpageToggle && <ShowPage icons={icons} />}
        </div>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
