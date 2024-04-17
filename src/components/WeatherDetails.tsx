import { ShowWind } from './ShowWind';
import { ShowHumidity } from './ShowHumidity';

export const WeatherDetails = ({ apiData }) => {
  return (
    <div className="weatherDetails">
      <ShowWind apiData={apiData} />
      <ShowHumidity apiData={apiData} />
    </div>
  );
};
