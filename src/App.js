import "./main.css";
import icons from "./icons";
import Header from "./components/main/Header";
import Sidebar from "./components/main/Siedbar";
import Footer from "./components/main/Footer";
import { useState } from "react";

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(true);

  function toggleSidebar() {
    console.log("toggleSiedbar");
    setSidebarToggle((prev) => (prev = !prev));
  }

  console.log(sidebarToggle);

  return (
    <div className="main">
      <Header icons={icons} toggleSidebar={toggleSidebar} />
      {sidebarToggle && <Sidebar icons={icons} toggleSidebar={toggleSidebar} />}
      <Footer />
    </div>
  );
}

export default App;
