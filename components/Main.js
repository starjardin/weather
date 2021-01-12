import React from 'react'
import styled from 'styled-components'

import Locations from './locations'
import Weather from './Weather'

const MainStyles = styled.div`
  gap : 0rem;
  .search-feild {
    background-color : #1E213A;
    flex-basis : 35%;
    label {
      display : block;
    }
  }
  .weather {
    flex-basis : 65%;
    background-color : #100E1D;
  }
  @media screen and (min-width : 720px) {
    display : flex;
  }
`

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
          />
          <button type="submit" >search</button>
          <Locations
            weatherLocationObj={weatherLocationObj}
            handleClick={handleClick}
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
