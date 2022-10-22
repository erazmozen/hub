import React, { useState, useEffect, useContext } from "react";
import DataContext from "../../../contexts/DataContext";
import "./weather.css";

const Weather = ({ icons }) => {
  const weather = useContext(DataContext);
  const weatherData = weather.weatherData.response[0];

  const weatherDataObject = {
    city: `Mladenovac, Koracica (${weatherData.place.name}) `,
    cords: `${weatherData.loc.lat} ${weatherData.loc.long}`,
    currTemp: `Currently: ${weatherData.periods[0].avgTempC}℃,
    but feels like: ${weatherData.periods[0].feelslikeC}℃`,
    intervalIcon: weatherData.interval ? (
      <icons.TiWeatherSunny size={32} />
    ) : (
      <icons.TiWeatherNight />
    ),
  };

  console.log("weather render, data:", weatherData);

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
