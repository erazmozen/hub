import "./main.css";
import icons from "./icons";
import Header from "./components/Header";
import Sidebar from "./components/Siedbar";

function App() {
  return (
    <div className="main">
      <Header icons={icons} />
      <Sidebar icons={icons} />

      <div className="footer-wrapper background-rounded">Footer</div>
    </div>
  );
}

export default App;
