import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/Searchbar";
import Weatherdisplay from "./components/Weatherdisplay";
import axios from "axios";
import clouds from "../src/image.png";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const weatherApi = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/",
    params: {
      appid: "624970b13b6a02fb6c38b8cbf8e28b2d",
      units: "metric",
    },
  });

  const searchWeather = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await weatherApi.get("weather", { params: { q: city } });
      setWeather(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-12 flex-col items-center justify-center h-screen w-screen bg-cover bg-[url('../src/image.png')]">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold ">Weather App</h1>
        <SearchBar city={city} setCity={setCity} onSearch={searchWeather} />
      </div>
      <div className="flex flex-col justify-center items-center w-[80%] h-[60%] backdrop-blur-md shadow-xl">
        {error && <div className="error">{error}</div>}

        {weather && !error && <Weatherdisplay data={weather} />}
      </div>
    </div>
  );
};

export default App;
