import React, { useContext } from 'react'
import { GlobalContext } from '../useReducer'
import { FaLocationArrow } from 'react-icons/fa'
import { format } from 'date-fns'
import { WeatherInFiveDaysStyles, HilightsStyles } from './WeatherInFiveDaysStyles'

export default function Weather() {

  const { state } = useContext(GlobalContext)
  let futureWeather = state.weatherInFiveDays.consolidated_weather
  console.log(futureWeather);
  const weatherFromTomorow = futureWeather?.splice(1)
  console.log(weatherFromTomorow);
  const futureWeatherElem = (weatherFromTomorow) => {
    return weatherFromTomorow
      ? <WeatherInFiveDaysStyles> {weatherFromTomorow.map((weather, index) =>
        <div
          key={index}
        >
          <div>
            {
              index === 0 ? <span className="date">Tomorrow</span> : 
              <div>
                <span className="date">{ format(new Date(weather.applicable_date), 'EEE') }</span>
                <span className="date">{ format(new Date(weather.applicable_date), 'i') }</span>
                <span className="date">{ format(new Date(weather.applicable_date), 'LLL') }</span>
              </div>
            }
          </div>
          <img src={`https://www.metaweather.com//static/img/weather/${weather.weather_state_abbr}.svg`} alt={`${weather.weather_state_name}`} />
          <div className="max-min-temp">
            <span className="max-temp"> {Math.round(weather.max_temp)} &#xb0;C </span>
            <span className="min-temp"> {Math.round(weather.min_temp)} &#xb0;C </span>
          </div>
        </div>
      )
      }
      </WeatherInFiveDaysStyles>
      : <div>Loading...</div>
  }
  
  const celcius = <span>&#8451;</span>
  const fahrenheit = <span>&#8457;</span>
  function changeDegree(degree) {
    return <span style={{
          padding: "0.6rem",
          backgroundColor : "#585676",
          borderRadius : "50%",
          marginInline : "0.5rem",
          cursor : 'pointer'
    }}>{ degree } </span>
  }
  return (
    <div>
      <div style={{ textAlign: "end", paddingInline: "1.5rem", paddingBlock: "2rem" }}>
        {changeDegree(celcius)}
        {changeDegree(fahrenheit)}
      </div>
      {futureWeatherElem(weatherFromTomorow)}
      {futureWeather && <div className="heilight">
        <h3 style={{ maxWidth: 650, margin : "auto"}}>
          Today's Highlight
        </h3>
        <HilightsStyles className="hilight-container">
          <div>
            <h4 className="headlines">wind status</h4>
            <p className="number">
              {futureWeather && Number(futureWeather[0].wind_direction).toFixed(2)} <span>mph</span>
            </p>
            <div>
              <FaLocationArrow className="arrow-location"/>  {futureWeather && futureWeather[0].wind_direction_compass}
            </div>
          </div>
          <div>
            <h4 className="headlines">Humidity</h4>
            <p className="number">
              {futureWeather && futureWeather[0].humidity} <span>%</span>
            </p>
            <progress max="100" value={futureWeather && futureWeather[0].humidity}></progress>
          </div>
          <div>
            <h4 className="headlines">Visibility</h4>
            <p className="number">
              {futureWeather && Number(futureWeather[0].visibility).toFixed(2)} <span>miles</span>
            </p>
          </div>
          <div>
            <h4 className="headlines">Air Presure</h4>
            <p className="number">
              {futureWeather && futureWeather[0].air_pressure} <span>mb</span>
            </p>
          </div>
        </HilightsStyles>
      </div>}
    </div>
  )
}
