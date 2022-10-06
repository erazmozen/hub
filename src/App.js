import "./main.css";
import icons from "./icons";
import Header from "./components/Header";
import Sidebar from "./components/Siedbar";
import Footer from "./components/Footer";

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
