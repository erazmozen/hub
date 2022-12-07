import "./main.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { TogglesContextProvider } from "./contexts/TogglesContext";
import Content from "./components/Showpage/Content";
import { IconsContextProvider } from "./contexts/IconsContext";

function App() {
  console.log("App render");
  return (
    <div className="main">
      <IconsContextProvider>
        <TogglesContextProvider>
          <Header />
          <Content />
          <Footer />
        </TogglesContextProvider>
      </IconsContextProvider>
    </div>
  );
}

export default App;
