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
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getWeatherData = async () => {
    const options = {
      method: "GET",
      url: "https://aerisweather1.p.rapidapi.com/forecasts/44.444330,20.606940",
      headers: {
        "X-RapidAPI-Key": "358eefedb5mshd1c04f32ace0284p164d29jsn9f2a63a83d79",
        "X-RapidAPI-Host": "aerisweather1.p.rapidapi.com",
      },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log("iz axiosa", response.data);
        setWeatherData(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.error("axios error", error);
      });
  };

  useEffect(() => {
    console.log("run useEffect[]");
    getWeatherData();
  }, []);

  const functions = {
    toggleSidebar,
    toggleShowpage,
    weatherData,
    loading,
  };

  function toggleSidebar() {
    setSidebarToggle((prev) => (prev = !prev));
    console.log("sidebar toggled, state:", !sidebarToggle);
  }

  function toggleShowpage() {
    setShowpageToggle((prev) => (prev = !prev));
    console.log("showpage toggled, state:", !showpageToggle);
  }

  console.log("App render", weatherData);

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
