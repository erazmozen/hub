import { useState, useEffect } from "react";
import "./main.css";
import icons from "./icons";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import ShowPage from "./components/Showpage/ShowPage";
import DataContext from "./contexts/DataContext";
import axios from "axios";

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(true);
  const [showpageToggle, setShowpageToggle] = useState(true);
  const [meteoWeatherData, setMeteoWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getOpenMeteoData = async () => {
    const options = {
      method: "GET",
      url: "https://api.open-meteo.com/v1/forecast?latitude=44.43&longitude=20.64&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,direct_radiation,diffuse_radiation&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset&current_weather=true&timezone=auto",
    };

    await axios.request(options).then(function (response) {
      console.log("axios, Meteo:",response.data )
      setMeteoWeatherData(response.data);
      setLoading(false);
    })
    .catch(
      function (error) {
        console.error("axios error", error)
      }
    )
  }

  useEffect(() => {
    console.log("run useEffect[] for getOpenMeteoData");
    getOpenMeteoData();
  }, []);

  const functions = {
    toggleSidebar,
    toggleShowpage,
    loading,
    meteoWeatherData
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
      <DataContext.Provider value={functions}>
        <Header icons={icons} />
        <div className="content-wrapper">
          {sidebarToggle && <Sidebar icons={icons} />}
          {showpageToggle && <ShowPage icons={icons} />}
        </div>
        <Footer />
      </DataContext.Provider>
    </div>
  );
}

export default App;
