import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Main from './components/Main'

const  CORS_KEY = "https://cors-anywhere.herokuapp.com/"
const API_KEY = "https://www.metaweather.com/api/"
const API_LOCATION = "/api/location/search/?query="
"https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/2487956"
export default function App () {

  const [ location, setLocation ] = useState('london')
  const [ weatherLocationObj, setWeatherLocationObj ] = useState([])
  const [weatherInFiveDays, setWeatherInFiveDays] = useState([])
  const [woeid, setWoeid] = useState('')

  async function fetchData() {
    const res = await axios.get(CORS_KEY + API_KEY + API_LOCATION + location)
    setWeatherLocationObj(res.data)
  }

  const getWeather = async () => {
    const res = await axios.get(CORS_KEY + API_KEY + "location/" + woeid)
    setWeatherInFiveDays(res.data)
  }

  useEffect(() => {
    if (location != '') {
      fetchData()
    } else {
      return
    }
  }, [location])

  useEffect(() => {
    getWeather()
  }, [woeid])
  
  const handleSearch = (e) => {
    e.preventDefault()
    const searchLocation = e.target.search.value
    if (searchLocation.trim() === "") {
      console.log("Hello world")
    }
    setLocation(searchLocation)
  }

  function handleClick(e) {
    const locationValue = e.target.dataset.value
    const selectedLocation = weatherLocationObj.filter(location => location.title === locationValue)
    setWoeid(selectedLocation[0].woeid);
  }
  console.log(woeid)

  return (
    <>
      <Main
        weatherLocationObj={weatherLocationObj}
        handleClick={handleClick}
        handleSearch={handleSearch}
        weatherInFiveDays={weatherInFiveDays}
      />
    </>
  )
}