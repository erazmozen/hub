import React, { useContext } from "react";
import DataContext from "../../../contexts/DataContext";
import "./weather.css";

const Weather = ({ icons }) => {
  const { meteoWeatherData } = useContext(DataContext);

  const weatherDataObject = {
    city: `Mladenovac, Koracica`,
    cords: `${meteoWeatherData.latitude} ${meteoWeatherData.longitude}`,
    currTemp: `Currently: ${meteoWeatherData.current_weather.temperature}℃`,
  };

  console.log("Weather render");

  if (meteoWeatherData === null) {
    return <h2>There is no data to display, api calls must have run out..</h2>;
  }

  return (
    <div className="card weather-wrapper">
      <div className="weather-header">
        <div className="weather-title">
          {weatherDataObject.intervalIcon}
          <h2>Weather Widget</h2>
        </div>
        <h3 className="weather-city">{weatherDataObject.city}</h3>
        <h4 className="weather-cords">
          <icons.TbCurrentLocation size={13} />
          {weatherDataObject.cords}
        </h4>
      </div>
      <div className="wather-body">
        <h2>{weatherDataObject.currTemp}</h2>
      </div>
    </div>
  );
};

export default Weather;
