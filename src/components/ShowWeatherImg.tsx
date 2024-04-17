import { Weather } from "../App"

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

type ShowWeatherImgProps = {
  weatherImg: Weather['main']
}

export function ShowWeatherImg({ weatherImg }: ShowWeatherImgProps) {


  const weatherImgData = weathers.find(w => w.name === weatherImg);

  return (
    <>
      {weatherImgData && <img
        className="weatherImg"
        key={weatherImgData.name}
        src={weatherImgData.url}
        alt={weatherImgData.name}
      />}
    </>


  )
}
