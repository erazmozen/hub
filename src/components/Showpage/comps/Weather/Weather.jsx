import React, { useState } from "react";
import "./weather.css";
import useApi from "../../../common/hooks/useApi";
import WeatherContainer from "./WeatherContainer";
import weatherCityData from "../../../../data/weatherCityData.json";

const Weather = ({ icons }) => {
  const [city, setCity] = useState(weatherCityData[0]);
  const [searchInput, setSearchInput] = useState("");

  const { loading, data } = useApi(
    `https://api.open-meteo.com/v1/forecast?latitude=${city.Latitude}&longitude=${city.Longitude}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,rain,showers,snowfall,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset&current_weather=true&timezone=auto`,
    city
  );

  function changeCity(index) {
    setCity(weatherCityData[index]);
  }

  if (data == null) {
    return <div>Data is unavaliable!</div>;
  }
  const filterCity = weatherCityData.filter(
    (city) =>
      city.Capital.toLowerCase().includes(searchInput) ||
      city.Country.toLowerCase().includes(searchInput)
  );
  console.log("Weather render");

  return (
    <div>
      <button className="common-button">Choose city</button>
      <input
        typeof="text"
        className="common-input"
        placeholder="search.."
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <div className="city-wrapper">
        {filterCity.map((city, index) => (
          <div key={index} className="city-picker" onClick={() => changeCity(index)}>
            <p>{city.Country}</p>
            <p>~</p>
            <p>{city.Capital}</p>
          </div>
        ))}
      </div>
      {!loading && <WeatherContainer icons={icons} data={data} city={city} />}
    </div>
  );
};

export default Weather;
