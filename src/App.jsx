import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { SearchForm } from './components/SearchForm'
import { WeatherInfo } from './components/WeatherInfo'

function App() {
    const [city,setCity]=useState('');
    const [weather,setWeather]=useState(null);

    const fetchWeather = async(city)=>{
      const apiKey = "c1edb1984e6b19880bf4a3dfd5e1c4f1";

      const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric');
      const data = await response.json();
      setWeather(data);
    }

  return (
   <div>
    <Header/>
    <SearchForm setCity={setCity} fetchWeather={fetchWeather}/>
    <WeatherInfo weather={weather}/>

   </div>
  )
}

export default App
