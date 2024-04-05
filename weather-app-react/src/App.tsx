import { useEffect, useState } from 'react';
import { ShowTemperature } from './components/ShowTemperature';
import { ShowWeatherImg } from './components/ShowWeatherImg';

const apiKey = 'b41a3a5aa59fb23522ce7a9be4c1fc47';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const defaultCity = 'Białystok';


function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [newCityName, setNewCityName] = useState(defaultCity);

  async function showWeather(newCityName: string) {
    try {
      const response = await fetch(apiUrl + newCityName + `&appid=${apiKey}`);
      const apiData = await response.json();
      setWeatherData(apiData);
      setNewCityName('');
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

  useEffect(() => {
    showWeather(newCityName);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    showWeather(newCityName)

  }

  return (
    <form className='app' onSubmit={handleSubmit}>
      <div className='searchBar'>
        <input type="text" className='inputText' value={newCityName} onChange={e => setNewCityName(e.target.value)} />
        <button className='buttonContainer'></button>
      </div>

      {weatherData && <ShowTemperature apiData={weatherData} />}
      {weatherData && <ShowWeatherImg apiData={weatherData} />}
    </form>
  )
}

export default App
