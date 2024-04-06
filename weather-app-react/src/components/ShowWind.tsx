
export const ShowWind = ({ apiData }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="windSection">
        <img src="src/assets/wind.png" alt="wind image" />
        <div className="windValue">{apiData.wind.speed} km/h</div>
      </div>
      <div className="weatherDetailsTexts">Wind speed</div>
    </div>


  )
}
