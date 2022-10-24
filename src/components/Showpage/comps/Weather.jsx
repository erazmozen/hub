import React, { useContext } from "react";
import "./weather.css";
import useApi from "../../common/hooks/useApi";

const Weather = ({ icons }) => {
  const { loading, data } = useApi(
    "https://api.open-meteo.com/v1/forecast?latitude=44.43&longitude=20.64&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,direct_radiation,diffuse_radiation&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset&current_weather=true&timezone=auto"
  );

  const WeatherContainer = ({ data, icons }) => {
    const weatherDataObject = {
      city: `Mladenovac, Koracica`,
      cords: `${data.latitude} ${data.longitude}`,
      currTemp: `Currently: ${data.current_weather.temperature}℃`,
    };

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

  console.log("Weather render");

  return !loading && <WeatherContainer icons={icons} data={data} />;
};

export default Weather;
