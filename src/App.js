import "./main.css";
import icons from "./icons";
import Header from "./components/main/Header";
import Sidebar from "./components/main/Siedbar";
import Footer from "./components/main/Footer";
import { useState } from "react";

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(1);

  console.log(sidebarToggle);

  return (
    <div className="main">
      <Header icons={icons} />
      <Sidebar icons={icons} setSidebarToggle={setSidebarToggle} />
      <Footer />
    </div>
  );
}

export default App;
