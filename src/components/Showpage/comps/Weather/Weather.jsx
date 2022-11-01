import React from "react";
import "./weather.css";
import useApi from "../../../common/hooks/useApi";
import WeatherContainer from "./WeatherContainer";

const Weather = ({ icons }) => {
  const { loading, data } = useApi(
    "https://api.open-meteo.com/v1/forecast?latitude=44.43&longitude=20.64&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,rain,showers,snowfall,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset&current_weather=true&timezone=auto"
  );

  if (data == null) {
    return <div>Data is unavaliable!</div>;
  }

  console.log("Weather render");

  return !loading && <WeatherContainer icons={icons} data={data} />;
};

export default Weather;
