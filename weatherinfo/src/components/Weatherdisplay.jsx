import React from 'react';

const Weatherdisplay = ({ data }) => {
  return (
    <div className="weather-display">
      <h2>{data.name}, {data.sys.country}</h2>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Condition: {data.weather[0].description}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind: {data.wind.speed} kph</p>
    </div>
  );
};

export default Weatherdisplay;
