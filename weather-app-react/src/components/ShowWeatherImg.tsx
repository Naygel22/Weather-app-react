
const weathers = [
  {
    name: 'Clear',
    url: 'src/assets/clear.png'
  },
  {
    name: 'Clouds',
    url: 'src/assets/clouds.png'
  },
  {
    name: 'Drizzle',
    url: 'src/assets/drizzle.png'
  },
  {
    name: 'Mist',
    url: 'src/assets/mist.png'
  },
  {
    name: 'Rain',
    url: 'src/assets/rain.png'
  },
  {
    name: 'Snow',
    url: 'src/assets/snow.png'
  }
]

export function ShowWeatherImg({ apiData }) {
  const currentWeatherImg = apiData.weather[0].main

  return (
    <>
      {weathers.map((weather) => {
        if (weather.name === currentWeatherImg) {
          return (
            <img
              className="weatherImg"
              key={weather.name}
              src={weather.url}
              alt={weather.name}
            />
          )
        }
      })}
    </>
  )
}
