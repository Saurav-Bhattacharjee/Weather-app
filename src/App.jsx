import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { SearchForm } from './components/SearchForm'
import { WeatherInfo } from './components/WeatherInfo'

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchCoordinates = async (city) => {
    const apiKey = 'c1edb1984e6b19880bf4a3dfd5e1c4f1'; // Replace with your OpenWeatherMap API key
    const geocodeUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
    
    console.log('Fetching coordinates from:', geocodeUrl);

    try {
      const response = await fetch(geocodeUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.length === 0) {
        throw new Error('City not found');
      }
      const { lat, lon } = data[0];
      return { lat, lon };
    } catch (error) {
      console.error('Failed to fetch coordinates:', error);
      throw error;
    }
  };

  const fetchWeather = async (city) => {
    try {
      const { lat, lon } = await fetchCoordinates(city);
      const apiKey = 'c1edb1984e6b19880bf4a3dfd5e1c4f1'; // Replace with your OpenWeatherMap API key
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
      
      console.log('Fetching weather data from:', weatherUrl);

      const response = await fetch(weatherUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error('Failed to fetch weather data:', error);
    }
  };

  return (
    <div className="App">
      <Header />
      <SearchForm setCity={setCity} fetchWeather={fetchWeather} />
      <WeatherInfo weather={weather} />
    </div>
  );
};

export default App;