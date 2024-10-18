import { useState, useRef } from 'react'
import axios from 'axios';
import './App.css'
import WeatherInformations from './components/WeatherInformations/WeatherInformations';
import WeatherInformations5Days from './components/WeatherInformations5Days/WeatherInformations5Days';

function App() {
  const [weather, setWeather] = useState();
  const [weather5Days, setweather5Days] = useState('');

  const inputRef = useRef();

  const searchCity = async () => {
    if (!inputRef.current.value) {
      alert('Digite uma cidade');
    };
    const city = inputRef.current.value;
    const key = '9cce3a58c10cf886e46be0150dc5bb16'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pt_br`;
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric&lang=pt_br`;

    try {
      const apiData = await axios.get(url);
      setWeather(apiData.data);
    } catch (error) {
      alert('Cidade não encontrada');
      cleanInput();
    }

    const apiData5Days = await axios.get(url5Days);
    setweather5Days(apiData5Days.data);
  };

  const cleanInput = () => {
    inputRef.current.value = '';
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      searchCity();
    };
  };

  return (
    <div className='container'>
      <h1>Previsão do Tempo</h1>
      <div className='search'>
        <input onClick={cleanInput} onKeyDown={handleKeyDown} ref={inputRef} type="text" placeholder='Digite o nome da cidade...' />
        <button onClick={searchCity}>Buscar</button>
      </div>


      {weather && <WeatherInformations weather={weather} />}
      {weather5Days && <WeatherInformations5Days weather5Days={weather5Days} />}
    </div>
  )
}

export default App
