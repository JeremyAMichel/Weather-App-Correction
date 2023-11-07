import { useEffect, useState } from "react";
import "./App.css";
import Days from "./Days/Days";
import Header from "./Header/Header";
import Weather from "./Weather/Weather";
import axios from "axios";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const apiUrl = process.env.REACT_APP_WEATHER_API_URL;
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    axios
      .get(`${apiUrl}?key=${apiKey}&q=Lyon&days=3&aqi=no&alerts=no`)
      .then(function (response) {
        // en cas de réussite de la requête
        // console.log(response);
        // setWeatherData(response.data);
        if(!isDataLoaded){
          setWeatherData(response.data);
          setIsDataLoaded(true);
          console.log(weatherData);
        }
        console.log(weatherData);
      })
      .catch(function (error) {
        // en cas d’échec de la requête
        console.log(error);
      });
  });

  function handleClickDay(event) {
    console.log(event.target);

    document.querySelector(".clickedDay").classList.remove("clickedDay");
    event.target.classList.add("clickedDay");
  }

  return (
    <div className="App">
      <Header />
      <div className="row">
        <div className="col s12 m6 push-m3">
          <div className="weather card blue-grey darken-1">
            <div className="card-content white-text">
              <Weather />
            </div>
            <div className="card-action">
              <Days handleClickDay={handleClickDay} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
