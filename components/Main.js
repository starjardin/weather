import React from 'react'
import styled from 'styled-components'

import Locations from './locations'
import Weather from './Weather'

const MainStyles = styled.div`
  display : flex;
  gap : 0rem;
  div:nth-of-type(1) {
    background-color : #1E213A;
    flex-basis : 35%;
    label {
      display : block;
    }
  }
  div:nth-of-type(2) {
    flex-basis : 65%;
    background-color : #100E1D;
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
      <div>
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
      <div>
        <Weather
          weatherInFiveDays={weatherInFiveDays}
        />
      </div>
    </MainStyles>
  )
}
