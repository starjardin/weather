import React, { useState, useEffect } from 'react'

export default function App () {

  const [ location, setLocation ] = useState('san')
  const [ weatherLocationObj, setWeatherLocationObj ] = useState([])
  const [ weatherInFiveDays, setWeatherInFiveDays ] = useState([])

  const  CORS_KEY = "https://cors-anywhere.herokuapp.com/"
  const API_KEY = "https://www.metaweather.com/api/"
  const API_LOCATION = "/api/location/search/?query="

  async function fetchData () {
    const res= await fetch(CORS_KEY + API_KEY + API_LOCATION + location)
    const data = await res.json()
    setWeatherLocationObj(data)
  }

  console.log(weatherLocationObj);

  const getWeather = async () => {
    const res = await fetch(CORS_KEY + API_KEY + API_LOCATION + weatherLocationObj.woeid)
    const data = await res.json()
    setWeatherInFiveDays(data)
  }
  console.log(weatherInFiveDays);

  const handleSearch = (e) => {
    e.preventDefault()
    const searchLocation = e.target.search.value
    if (searchLocation.trim() == "") {
      console.log("Hello world");
    }
    setLocation(searchLocation)
  }

  useEffect (() => {
    fetchData()
    getWeather()
  }, [ location ])

  return (
    <>
      <h1>Hello world</h1>
      <h2>{}</h2>
      <form action="#" className="form-search" onSubmit={handleSearch}>
        <label htmlFor="search-input">Search Location</label>
        <input 
          name="search"
          id="search-input"
        />
        <button type="submit" >search</button>
      </form>
    </>
  )
}