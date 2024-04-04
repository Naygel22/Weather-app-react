import React, { useEffect, useState } from 'react';

const apiKey = 'b41a3a5aa59fb23522ce7a9be4c1fc47';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const city = 'Białystok';

const weathers = [
  {
    name: 'Clear',
    url: 'images/clear.png'
  },
  {
    name: 'Clouds',
    url: 'images/clouds.png'
  },
  {
    name: 'Drizzle',
    url: 'images/drizzle.png'
  },
  {
    name: 'Mist',
    url: 'images/mist.png'
  },
  {
    name: 'Rain',
    url: 'images/rain.png'
  },
  {
    name: 'Snow',
    url: 'images/snow.png'
  }
];

function App() {
  const [weatherData, setWeatherData] = useState(null);

  async function showWeather(city) {
    try {
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
      const apiData = await response.json();
      setWeatherData(apiData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

  useEffect(() => {
    showWeather(city);
  }, []);

  return (
    <>
      <div className='searchBar'>
        <input type="text" className='inputText' />
        <button className='buttonContainer'></button>
      </div>

    </>
  )
}

export default App
