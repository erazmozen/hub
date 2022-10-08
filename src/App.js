import "./main.css";
import icons from "./icons";
import Header from "./components/main/Header";
import Sidebar from "./components/main/Siedbar";
import Footer from "./components/main/Footer";
import { useState } from "react";
import ShowPage from "./components/main/ShowPage";

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(true);

  function toggleSidebar() {
    console.log("toggleSiedbar");
    setSidebarToggle((prev) => (prev = !prev));
  }

  return (
    <div className="main">
      <Header icons={icons} toggleSidebar={toggleSidebar} />
      <div className="content-wrapper">
        {sidebarToggle && <Sidebar icons={icons}
        toggleSidebar={toggleSidebar} />}
        <ShowPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
