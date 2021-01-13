import React, { useContext } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../useReducer'

const WeatherInFiveDaysStyles = styled.div`
  display : flex;
  gap : 1rem;
  justify-content : space-between;

  div {
    background-color : #1E213A;
    padding : 1rem;
  }

  .max-min-temp {
    display : flex;
    justify-content : space-between;
  }
`
const HilightsStyles = styled.div`
  margin : 1rem;
  div {
    background-color : #1E213A;
    padding : 1rem;
    margin : 1rem
  }
  @media screen and (min-width : 720px) {
    display : grid;
    grid-template-columns : repeat(2, 1fr);
    gap : 2rem;
    div {
      margin : 0;
    }
  }
`

export default function Weather() {

  const { state } = useContext(GlobalContext)
  
  const futureWeather = state.weatherInFiveDays.consolidated_weather
  const weatherFromTomorow = futureWeather?.splice(1)
  console.log(weatherFromTomorow);

  const futureWeatherElem = (weatherFromTomorow) => {
    return weatherFromTomorow
      ? <WeatherInFiveDaysStyles> {weatherFromTomorow.map((weather, index) =>
        <div key={index}>
          <p>
            {index === 0 ? "Tomorrow" : weather.created}
          </p>
          <p>
            {weather.weather_state_name}
          </p>
          <picture>
            <source srcSet = {`/static/img/weather/${weather.weather_state_abbr}.svg`} alt={`${weather.weather_state_name}`}></source>
          </picture>
          <img src={`/static/img/weather/${weather.weather_state_abbr}.svg`} alt={`${weather.weather_state_name}`} />
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
      <h2>Hello world</h2>
      {futureWeatherElem(weatherFromTomorow)}
      {futureWeather && <div className="heilight">
        <h3>
          Hilight for today
        </h3>
        <HilightsStyles className="hilight-container">
          <div>
            <h4>wind status</h4>
            <div>{futureWeather && Number(futureWeather[0].wind_direction).toFixed(2)} mph</div>
            <div>{futureWeather && futureWeather[0].wind_direction_compass}</div>
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
