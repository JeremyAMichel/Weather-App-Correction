import img from '../../assets/img/sun.svg';
import './Weather.css';

function Weather() {
  return (
    <>
      <span className="card-title">Lyon</span>
      <p>
        <img src={img} />
      </p>
      <span className="temperature">15°</span>
      <div className="wind">Vent 1km/h (360°)</div>
    </>
  );
}

export default Weather;
