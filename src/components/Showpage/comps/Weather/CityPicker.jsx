const CityPicker = () => {
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
    </div>
  );
};

export default CityPicker;
