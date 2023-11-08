import { useEffect, useState } from "react";
import "./App.css";
import Days from "./Days/Days";
import Header from "./Header/Header";
import Weather from "./Weather/Weather";
import axios from "axios";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [city, setCity] = useState("Lyon");

  const apiUrl = process.env.REACT_APP_WEATHER_API_URL;
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    axios
      .get(`${apiUrl}?key=${apiKey}&q=Lyon&days=3&aqi=no&alerts=no`)
      .then(function (response) {
        // en cas de réussite de la requête
        // console.log(response);
        // setWeatherData(response.data);
        if (!isDataLoaded) {
          setWeatherData(response.data);
          setIsDataLoaded(true);
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
            {isDataLoaded ? (
              <>
                <div className="card-content white-text">
                  <Weather
                    city={city}
                    tempC={weatherData.forecast.forecastday[0].day.avgtemp_c}
                    wind={weatherData.forecast.forecastday[0].day.avgvis_km}
                    windDegree={weatherData.forecast.forecastday[0].hour[0].wind_degree}
                  />
                </div>
                <div className="card-action">
                  <Days handleClickDay={handleClickDay} />
                </div>
              </>
            ) : (
              <p>... LOADING</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
