import React, { useContext, useState } from 'react'
import { GlobalContext, API_KEY } from '../useReducer'
import { FaLocationArrow } from 'react-icons/fa'
import { WeatherInFiveDaysStyles, HilightsStyles } from './WeatherInFiveDaysStyles'

export default function Weather() {

  const { state } = useContext(GlobalContext)
  let futureWeather = state.weatherInFiveDays.consolidated_weather
  const [futureWeathe, setFutureWeather] = useState({})
  console.log(futureWeathe);
  
  const weatherFromTomorow = futureWeather?.splice(1)
  console.log(weatherFromTomorow);
  console.log(futureWeather);
  const weatherHighlits = (itemId) => {
    // setFutureWeather(weatherFromTomorow?.filter(weather => weather.id === itemId))
  }

  const futureWeatherElem = (weatherFromTomorow) => {
    return weatherFromTomorow
      ? <WeatherInFiveDaysStyles> {weatherFromTomorow.map((weather, index) =>
        <div key={index} onClick={() => weatherHighlits(weather.id)}>
          <p>
            {index === 0 ? "Tomorrow" : weather.created}
          </p>
          <img src={`https://www.metaweather.com//static/img/weather/${weather.weather_state_abbr}.svg`} alt={`${weather.weather_state_name}`} />
          <div className="max-min-temp">
            <span> {Math.round(weather.max_temp)}</span>
            <span> {Math.round(weather.min_temp)}</span>
          </div>
        </div>
      )
      }
      </WeatherInFiveDaysStyles>
      : <div>Loading...</div>
    }

  return (
    <div>
      {futureWeatherElem(weatherFromTomorow)}
      {futureWeather && <div className="heilight">
        <h3>
          Today's Highlight
        </h3>
        <HilightsStyles className="hilight-container">
          <div>
            <h4>wind status</h4>
            <div>{futureWeather && Number(futureWeather[0].wind_direction).toFixed(2)} mph</div>
            <div>
              <FaLocationArrow className="arrow-location"/>  {futureWeather && futureWeather[0].wind_direction_compass}
            </div>
          </div>
          <div>
            <h4>Humidity</h4>
            <p>{ futureWeather && futureWeather[0].humidity } % </p>
            <progress max="100" value={futureWeather && futureWeather[0].humidity}></progress>
          </div>
          <div>
            <h4>Visibility</h4>
            <div>{futureWeather && Number(futureWeather[0].visibility).toFixed(2)} miles</div>
          </div>
          <div>
            <h4>Air Presure</h4>
            <div>{futureWeather && futureWeather[0].air_pressure} mb</div>
          </div>
        </HilightsStyles>
      </div>}
    </div>
  )
}
