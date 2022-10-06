import "./main.css";
import icons from "./icons";
import Header from "./components/main/Header";
import Sidebar from "./components/main/Siedbar";
import Footer from "./components/main/Footer";

function App() {
  return (
    <div className="main">
      <Header icons={icons} />
      <Sidebar icons={icons} />
      <Footer />
    </div>
  );
}

export default App;
