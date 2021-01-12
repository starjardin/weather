import React, { useContext } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../useReducer'

const WeatherInFiveDaysStyles = styled.div`
  display : flex;
  gap : 1rem;
  justify-content : space-between;
`
const HilightsStyles = styled.div`
  margin : 1rem;
  div {
    background-color : #1E213A;
    padding : 2rem;
    margin : 2rem;
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

  const { state, dispatch } = useContext(GlobalContext)
  
  const futureWeather = state.weatherInFiveDays.consolidated_weather
  console.log(state);
  const futureWeatherElem = (futureWeather) => {
    return futureWeather
      ? <WeatherInFiveDaysStyles> {futureWeather.map((weather, index) =>
        <div key={index}>
          <p>
          {weather.weather_state_name}
          </p>
          <picture>
            <source srcSet = {`/static/img/weather/${weather.weather_state_abbr}.svg`} alt={`${weather.weather_state_name}`}></source>
          </picture>
          <img src={`/static/img/weather/${weather.weather_state_abbr}.svg`} alt={`${weather.weather_state_name}`}/>
        </div>
      )
      }
      </WeatherInFiveDaysStyles>
      : <div>Loading...</div>
    }

  return (
    <div>
      <h2>Hello world</h2>
      {futureWeatherElem(futureWeather)}
      {futureWeather && <div className="heilight">
        <h3>
          Hilight for today
        </h3>
        <HilightsStyles className="hilight-container">
          <div>
            <h4>wind status</h4>
            <div>{futureWeather && futureWeather[0].wind_direction_compass}</div>
          </div>
          <div>
            <h4>Humidity</h4>
            <progress max="100" value={futureWeather && futureWeather[0].humidity}></progress>
          </div>
          <div>
            <h4>Visibility</h4>
            <div>{futureWeather && futureWeather[0].visibility} miles</div>
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
