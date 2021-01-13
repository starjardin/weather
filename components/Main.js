import React from 'react'
import MainStyles from './MainStyles'

import Locations from './locations'
import Weather from './Weather'

export default function Main({ handleSearch }) {
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
          <Locations />
        </form>
      </div>
      <div className="weather">
        <Weather/>
      </div>
    </MainStyles>
  )
}
