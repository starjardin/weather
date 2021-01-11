import React from 'react'

export default function Weather({weatherInFiveDays}) {
  
  const futureWeather = weatherInFiveDays.consolidated_weather
  console.log(futureWeather);
  const futureWeatherElem = (futureWeather) => {
    return futureWeather
      ? <div> {futureWeather.map((weather, index) =>
          <p
            key={index}
          >
          {weather.weather_state_name}
          <img src={`/static/img/weather/png/${weather.weather_state_abbr}.png`}/>
          </p>)
        }
      </div>
      : <div>Loading...</div>
    }

  return (
    <div>
      <h2>Hello world</h2>
      {futureWeatherElem(futureWeather)}
    </div>
  )
}
