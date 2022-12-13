import { useState } from "react";
import weatherCityData from "../../../../data/weatherCityData.json";
import useApi from "../../../common/hooks/useApi";
import WeatherContainer from "./WeatherContainer";
import CityPicker from "./CityPicker";
import "./weather.css";

const Weather = () => {
  const [city, setCity] = useState(weatherCityData[196]);

  const { state } = useApi(
    `https://api.open-meteo.com/v1/forecast?latitude=${city.Latitude}&longitude=${city.Longitude}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,rain,showers,snowfall,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset&current_weather=true&timezone=auto`,
    city
  );

  function changeCity(index, filterCity) {
    setCity(filterCity[index]);
  }

  console.log("Weather render");

  return (
    <>
      {!state.loading && (
        <div className="weather-wrapper">
          <WeatherContainer data={state.data} city={city} />
          <CityPicker
            changeCity={changeCity}
            weatherCityData={weatherCityData}
          />
        </div>
      )}
    </>
  );
};

export default Weather;
