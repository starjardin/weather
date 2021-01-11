import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Locations from './components/locations'

export default function App () {

  const [ location, setLocation ] = useState('london')
  const [ weatherLocationObj, setWeatherLocationObj ] = useState([])
  const [ weatherInFiveDays, setWeatherInFiveDays ] = useState([])

  const  CORS_KEY = "https://cors-anywhere.herokuapp.com/"
  const API_KEY = "https://www.metaweather.com/api/"
  const API_LOCATION = "/api/location/search/?query="

  async function fetchData() {
    const res= await axios.get(CORS_KEY + API_KEY + API_LOCATION + location)
    console.log(res.data);
    setWeatherLocationObj(res.data)
  }

  useEffect (() => {
    fetchData()
  }, [])

  useEffect (() => {
    getWeather()
  }, [location])

  let date = new Date()
  const localDate = date.toLocaleDateString();
  const splitedDate = localDate.split("/");
  const americanDate = `${splitedDate[2]}/${splitedDate[0]}/${splitedDate[1]}`

  let woeid = weatherLocationObj.length > 0 && weatherLocationObj[0].woeid
  
  const getWeather = async () => {
    const data = await axios.get(CORS_KEY + API_KEY + "location/" + `${woeid ? woeid : ""}`)
    setWeatherInFiveDays(data)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    const searchLocation = e.target.search.value
    if (searchLocation.trim() == "") {
      console.log("Hello world");
    }
    setLocation(searchLocation)
  }

  function handleChange (e) {
    const location = e.target.value
    setLocation(location)
  }

  function handleClick (locationFound) {
    setLocation(locationFound)
  }

  if (!weatherLocationObj.length) return null
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
        <Locations
          weatherLocationObj={weatherLocationObj}
          handleClick={handleClick}
        />
      </form>
    </>
  )
}