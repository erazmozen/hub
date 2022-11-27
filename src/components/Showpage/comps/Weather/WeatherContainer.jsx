const WeatherContainer = ({ data, icons, city }) => {
  const now = new Date().getHours();

  const weatherDataObject = {
    city: `${city.Country}, ${city.Capital}`,
    cords: `${data.latitude.toFixed(2)} : ${data.longitude.toFixed(2)}`,
    currTemp: `Currently: ${data.current_weather.temperature}℃`,
    hourly: {
      tempHour: data.hourly.temperature_2m.slice(now, now + 12),
      timeHour: data.hourly.time.slice(now, now + 12),
      code: data.hourly.weathercode.slice(now, now + 12),
    },
  };

  const timeTempData = {};
  weatherDataObject.hourly.timeHour.forEach(
    (key, i) => (timeTempData[key] = weatherDataObject.hourly.tempHour[i])
  );

  function returnWeatherIcon(code) {
    switch (code) {
      case 0:
        return <icons.WiDaySunny size={32} />;
      case 1:
      case 2:
      case 3:
        return <icons.WiDaySunnyOvercast size={32} />;
      case 45:
      case 48:
        return <icons.WiFog size={32} />;
      case 51:
      case 53:
      case 55:
        return <icons.WiDayRainMix size={32} />;
      case 56:
      case 57:
        return <icons.WiDaySnowWind size={32} />;
      case 61:
      case 63:
      case 65:
        return <icons.WiRain size={32} />;
      case 66:
      case 67:
        return <icons.WiDaySnowWind size={32} />;
      case 71:
      case 73:
      case 75:
        return <icons.WiNightSnowWind size={32} />;
      case 77:
        return <icons.WiNightSnowWind size={32} />;
      case 80:
      case 81:
      case 82:
        return <icons.WiRain size={32} />;
      case 85:
      case 86:
        return <icons.WiSprinkle size={32} />;
      case 95:
        return <icons.WiStormShowers size={32} />;
      case 96:
      case 99:
        return <icons.WiStormShowers size={32} />;
      default:
        return <icons.WiDaySunny size={32} />;
    }
  }

  console.log("Render WeatherContainer");

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
        <div className="forcast">
          {Object.entries(timeTempData).map((data, index) => (
            <div key={index} className="pair">
              {returnWeatherIcon(weatherDataObject.hourly.code[index])}
              <p>{data[0].slice(-5)}</p>
              <p>{data[1]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherContainer;
