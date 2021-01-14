import React, { useState, useContext } from 'react'
import { VscLocation } from 'react-icons/vsc'

import MainStyles from './MainStyles'
import Locations from './locations'
import Weather from './Weather'
import { GlobalContext } from '../useReducer'

export default function Main({ handleSearch }) {
  const { state } = useContext(GlobalContext)
  const [searchIsOpen, setSearchIsOpen] = useState(false)
   
  const todaysWeather = state.weatherInFiveDays.consolidated_weather?.[0]
  const todaysDate = todaysWeather?.created
  const date = new Date(todaysDate)
  const temperature = Number(todaysWeather?.the_temp).toFixed(2)
  
  function openSearch() {
    setSearchIsOpen(true)
  }

  function closeSearch() {
    setSearchIsOpen(false)
  }

  return (
    <MainStyles>
      <div className="search-feild">
        {searchIsOpen
          ? <div>
              <form action="#" className="form-search" onSubmit={handleSearch}>
                <label htmlFor="search-input">Search Location</label>
                <input 
                  name="search"
                  id="search-input"
                  autoComplete="off"
                  placeholder="london"
                />
              <button type="button" onClick={closeSearch}>&#10006;</button>
              <button type="submit" className="search">search</button>
            </form>
            <Locations
              setSearchIsOpen={setSearchIsOpen}
            />
          </div>
          :
          <div className="todays-weather">
            <input
              onClick={openSearch}
              placeholder="search for places"
              className="search-for-places"
            />
            <div className="weather-today">
              {todaysWeather
                ? <div>
                  <img src={`https://www.metaweather.com//static/img/weather/${todaysWeather.weather_state_abbr}.svg`} alt={`${todaysWeather.weather_state_name}`} />
                  <p>
                    <span className="heat">{Number(temperature)}</span> <span className="deg">&#xb0;C</span>
                  </p>
                  <p>{todaysWeather.weather_state_name}</p>
                  <p>Today : {todaysDate}</p>
                  <p style={{margin : 0}}>
                    <VscLocation /> {state.weatherInFiveDays?.title}
                  </p>
                  </div>
                : <h4>Loading...</h4>
              }
            </div>
          </div>
        }
      </div>
      <div className="weather">
        <Weather/>
      </div>
    </MainStyles>
  )
}
