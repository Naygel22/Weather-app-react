import { SyntheticEvent, useEffect, useState } from 'react';
import { ShowTemperature } from './components/ShowTemperature';
import { ShowWeatherImg } from './components/ShowWeatherImg';
import { ShowCityName } from './components/ShowCityName';
import { WeatherDetails } from './components/WeatherDetails';

const apiKey = 'b41a3a5aa59fb23522ce7a9be4c1fc47';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const defaultCity = 'Białystok';

type Coordinates = {
  lon: number,
  lat: number
}

export type Weather = {
  id: number,
  main: string,
  description: string,
  icon: string
}



export type WeatherResponse = {
  coord: Coordinates,
  weather: Array<Weather>
  ///
}



// {
//   "coord": {
//       "lon": 23.15,
//       "lat": 53.1333
//   },
//   "weather": [
//       {
//           "id": 804,
//           "main": "Clouds",
//           "description": "overcast clouds",
//           "icon": "04d"
//       }
//   ],
//   "base": "stations",
//   "main": {
//       "temp": 281.07,
//       "feels_like": 280.62,
//       "temp_min": 280.16,
//       "temp_max": 283.16,
//       "pressure": 1004,
//       "humidity": 85
//   },
//   "visibility": 10000,
//   "wind": {
//       "speed": 1.34,
//       "deg": 351,
//       "gust": 3.13
//   },
//   "clouds": {
//       "all": 99
//   },
//   "dt": 1713367773,
//   "sys": {
//       "type": 2,
//       "id": 2077278,
//       "country": "PL",
//       "sunrise": 1713324180,
//       "sunset": 1713375022
//   },
//   "timezone": 7200,
//   "id": 776069,
//   "name": "Białystok",
//   "cod": 200
// }


function App() {
  const [weatherData, setWeatherData] = useState<WeatherResponse | undefined>();
  const [newCityName, setNewCityName] = useState(defaultCity);

  console.log("weatherData", weatherData)

  async function showWeather(cityName: string) {
    try {
      const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
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

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    if (newCityName !== '') {
      showWeather(newCityName);
    }

  }

  return (
    <form className='app' onSubmit={handleSubmit}>
      <div className='searchBar'>
        <input type="text" className='inputText' value={newCityName} onChange={e => setNewCityName(e.target.value)} />
        <button className='buttonContainer'></button>
      </div>
      {weatherData && <>
        <ShowWeatherImg weatherImg={weatherData.weather[0].main} />
        <ShowTemperature apiData={weatherData} />
        <ShowCityName apiData={weatherData} />
        <WeatherDetails apiData={weatherData} />
      </>}
    </form>
  );
}

export default App;
