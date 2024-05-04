import React, { useState } from "react";

const MySearch = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = "68d7a70da383ade72d1edab541c4525d";

  const handleSubmit = (e) => {
    e.preventDefault();

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => {
        console.error("Errore nel recupero dei dati:", error);
      });
  };

  return (
    <div>
      <h1>Ricerca Meteo</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Inserisci il nome della città</p>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <button type="submit">Cerca</button>
      </form>
      {weatherData ? (
        <div>
          <h2>
            Meteo a {weatherData.name}, {weatherData.sys.country}
          </h2>
          <p>Temperatura: {weatherData.main.temp}°C</p>
          <p>Condizioni meteo: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p> Inserisci il nome della città che vuoi controllare! </p>
      )}
    </div>
  );
};

export default MySearch;
