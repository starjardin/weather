import React from 'react'
import MainStyles from './MainStyles'

import Locations from './locations'
import Weather from './Weather'

export default function Main(
  {
    handleSearch,
    handleClick,
    weatherLocationObj,
    weatherInFiveDays
  }
) {
  return (
    <MainStyles>
      <div className="search-feild">
        <h1>Hello world</h1>
        <form action="#" className="form-search" onSubmit={handleSearch}>
          <label htmlFor="search-input">Search Location</label>
          <input 
            name="search"
            id="search-input"
            autoComplete="off"
            placeholder = "london"
          />
          <button type="submit" className="search">search</button>
          <Locations
            weatherLocationObj={weatherLocationObj}
            handleClick={handleClick}
            weatherInFiveDays={weatherInFiveDays}
          />
        </form>
      </div>
      <div className="weather">
        <Weather
          weatherInFiveDays={weatherInFiveDays}
        />
      </div>
    </MainStyles>
  )
}
