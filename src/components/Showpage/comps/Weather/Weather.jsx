import React, { useState } from "react";
import "./weather.css";
import useApi from "../../../common/hooks/useApi";
import WeatherContainer from "./WeatherContainer";
import weatherCityData from "../../../../data/weatherCityData.json";
import CityPicker from "./CityPicker";

const Weather = ({ icons }) => {
  const [city, setCity] = useState(weatherCityData[0]);

  const { state } = useApi(
    `https://api.open-meteo.com/v1/forecast?latitude=${city.Latitude}&longitude=${city.Longitude}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,rain,showers,snowfall,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset&current_weather=true&timezone=auto`,
    city
  );

  function changeCity(index, filterCity) {
    setCity(filterCity[index]);
  }

  console.log("Weather render");

  return (
    <div className="weather-wrapper">
      <CityPicker
        icons={icons}
        changeCity={changeCity}
        weatherCityData={weatherCityData}
      />

      <div className="card resize">
        {!state.loading && (
          <WeatherContainer
            icons={icons}
            data={state.data}
            city={city}
          />
        )}
      </div>
    </div>
  );
};

export default Weather;
