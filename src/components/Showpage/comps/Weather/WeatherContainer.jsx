import { useContext } from "react";
import { IconsContext } from "../../../../contexts/IconsContext";
import { returnWeatherIcon } from "../../../common/functions/returnWeatherIcon";
import "./weathercontainer.css";

const WeatherContainer = ({ data, city, loading }) => {
  const { TbCurrentLocation } = useContext(IconsContext);
  const now = new Date().getHours();

  const weatherDataObject = {
    city: `${city.Country}, ${city.Capital}`,
    cords: `${data.latitude.toFixed(
      2
    )} : ${data.longitude.toFixed(2)}`,
    currTemp: `Currently: ${data.current_weather.temperature}℃`,
    hourly: {
      tempHour: data.hourly.temperature_2m.slice(
        now,
        now + 12
      ),
      timeHour: data.hourly.time.slice(now, now + 12),
      code: data.hourly.weathercode.slice(now, now + 12),
    },
  };

  const timeTempData = {};
  weatherDataObject.hourly.timeHour.forEach(
    (key, i) =>
      (timeTempData[key] =
        weatherDataObject.hourly.tempHour[i])
  );

  console.log("Render WeatherContainer");

  return (
    <div className="card weather-container-wrapper">
      {!loading && (
        <>
          <div className="weather-header">
            <div className="weather-title">
              {weatherDataObject.intervalIcon}
              <h2>Weather Widget</h2>
            </div>
            <h3 className="weather-city">
              {weatherDataObject.city}
            </h3>
            <h4 className="weather-cords">
              <TbCurrentLocation size={13} />
              {weatherDataObject.cords}
            </h4>
          </div>
          <div className="wather-body">
            <h2>{weatherDataObject.currTemp}</h2>
            <div className="forcast">
              {Object.entries(timeTempData).map(
                (data, index) => (
                  <div key={index} className="pair">
                    {returnWeatherIcon(
                      weatherDataObject.hourly.code[index]
                    )}
                    <p>{data[0].slice(-5)}</p>
                    <p>{data[1]}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherContainer;
