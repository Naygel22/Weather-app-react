
const KELVIV_FACTOR = 273.15

function convertToCelsius(temp: number) {
  return Math.ceil(temp - KELVIV_FACTOR)
}

export function ShowTemperature({ apiData }) {
  return <div className="temperature">{convertToCelsius(apiData.main.temp)}°C</div>
}
