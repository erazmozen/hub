const WeatherContainer = ({ data, icons }) => {

    const weatherDataObject = {
        city: `Mladenovac, Koracica`,
        cords: `${data.latitude} ${data.longitude}`,
        currTemp: `Currently: ${data.current_weather.temperature}℃`,
    };

    console.log("Render WeatherContainer")

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

export default WeatherContainer