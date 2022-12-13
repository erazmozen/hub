import { TogglesContextProvider } from "./contexts/TogglesContext";
import { IconsContextProvider } from "./contexts/IconsContext";
import Header from "./components/Header/Header";
import Content from "./components/Showpage/Content";
import Footer from "./components/Footer/Footer";
import "./main.css";

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
