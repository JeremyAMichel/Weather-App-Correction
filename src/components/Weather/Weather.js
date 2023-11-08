import img from '../../assets/img/sun.svg';
import './Weather.css';

function Weather({ city, tempC, wind, windDegree }) {
  return (
    <>
      <span className="card-title">{city}</span>
      <p>
        <img src={img} />
      </p>
      <span className="temperature">{tempC}°</span>
      <div className="wind">Vent {wind}km/h ({windDegree}°)</div>
    </>
  );
}

export default Weather;
