import { useState } from "react";
import "./citypicker.css";

const CityPicker = ({ changeCity, weatherCityData }) => {
  const [searchInput, setSearchInput] = useState("");

  const filterCity = weatherCityData.filter(
    (city) =>
      city.Capital.toLowerCase().includes(searchInput) ||
      city.Country.toLowerCase().includes(searchInput)
  );

  console.log("City Picker Render");

  return (
    <div className="card city-picker-wrapper">
      <h3>Search for your city:</h3>
      <input
        typeof="text"
        className="common-input"
        placeholder="search.."
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <div className="city-wrapper">
        {filterCity.map((city, index) => (
          <div
            className="city-picker"
            key={index}
            onClick={() => changeCity(index, filterCity)}
          >
            {/* {city.Capital ? <p>{city.Capital}</p> : <p>asd</p>} */}
            {/* {city.Country ? <p>{city.Country}</p> : <p>asd</p>} */}
            <p>{city.Capital}</p>
            <p>{city.Country}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityPicker;
