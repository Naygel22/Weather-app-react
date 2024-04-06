export const ShowHumidity = ({ apiData }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="humiditySection">
        <img src="src/assets/humidity.png" alt="humidity image" />
        <div className="humidityValue">{apiData.main.humidity}%</div>
      </div>
      <div className="weatherDetailsTexts humidityText">Humidity</div>
    </div>

  )
}