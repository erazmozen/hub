import "./main.css";
import icons from "./icons";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { TogglesContextProvider } from "./contexts/TogglesContext";
import Content from "./components/Showpage/Content";

function App() {
  console.log("App render");
  return (
    <div className="main">
      <TogglesContextProvider>
        <Header icons={icons} />
        <Content icons={icons} />
        <Footer />
      </TogglesContextProvider>
    </div>
  );
}

export default App;
