import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";

export const WeatherIcons = {
  "01d": "/icon/sunny.jpg",
  "01n": "/icon/night.jpg",
  "02d": "/icon/day.jpg",
  "02n": "/icon/cloudy-night.jpg",
  "03d": "/icon/cloudy.jpg",
  "03n": "/icon/cloudy.jpg",
  "04d": "/icon/perfect-day.jpg",
  "04n": "/icon/cloudy-night.jpg",
  "09d": "/icon/rain.jpg",
  "09n": "/icon/rain-night.jpg",
  "10d": "/icon/rain.jpg",
  "10n": "/icon/rain-night.jpg",
  "11d": "/icon/storm.jpg",
  "11n": "/icon/storm.jpg",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;
const CloseButton = styled.span`
  padding: 2px 3px;
  background-color: black;
  border-radius: 50%;
  color: white;
  position: absolute;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q= ${city} &appid=728b6c43884d51dbbd4c681b7489dd5b&units=metric `,
    );
    updateWeather(response.data);
  };
  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;