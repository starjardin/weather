import React, { useState, useContext } from 'react'
import { VscLocation } from 'react-icons/vsc'
import { BiCurrentLocation } from 'react-icons/bi'
import { format } from 'date-fns'

import MainStyles from './MainStyles'
import Locations from './locations'
import Weather from './Weather'
import { GlobalContext } from '../useReducer'

export default function Main({ handleSearch }) {
  const { state } = useContext(GlobalContext)
  const [searchIsOpen, setSearchIsOpen] = useState(false)
   
  const todaysWeather = state.weatherInFiveDays.consolidated_weather?.[0]
  const todaysDate = todaysWeather?.created
  const temperature = Math.round(Number(todaysWeather?.the_temp))
  
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
              <button type="button" className="close" onClick={closeSearch}>&#10006;</button>
              <form action="#" className="form-search" onSubmit={handleSearch}>
                <input 
                  name="search"
                  id="search-input"
                  autoComplete="off"
                  placeholder="search location"
                />
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
              id="search-for-places"
              name="search-for-places"
            />
            <BiCurrentLocation />
            <div className="weather-today">
              {todaysWeather
                ? <div>
                  <img src={`https://www.metaweather.com//static/img/weather/${todaysWeather.weather_state_abbr}.svg`} alt={`${todaysWeather.weather_state_name}`} />
                  <p>
                    <span className="heat">{Number(temperature)}</span> <span className="deg">&#xb0;C</span>
                  </p>
                  <p className="weather-state">{todaysWeather.weather_state_name}</p>
                    <div>Today : 
                      <span className="date">{ format(new Date(todaysDate), 'EEE') }</span>
                      <span className="date">{ format(new Date(todaysDate), 'i') }</span>
                      <span className="date">{ format(new Date(todaysDate), 'LLL') }</span>
                    </div>
                  <p className="location">
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
