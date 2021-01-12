import React, { createContext, useEffect, useReducer } from 'react'
import axios from 'axios'

const GlobalContext = createContext()

const  CORS_KEY = "https://cors-anywhere.herokuapp.com/"
const API_KEY = "https://www.metaweather.com/api/"
const API_LOCATION = "/api/location/search/?query="

export const ACTIONS = {
  LOADING_STATE: "laoding_state",
  SET_LOCATION: "set_location",
  SET_WOEID: "set_woeid",
  SET_WEATHER_IN_FIVE_DAYS : "set_weather_in_five_days",
}

const initialState = {
  location : "london",
  weatherLocationObj : [],
  weatherInFiveDays : [],
  woeid : '',
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.LOADING_STATE: {
      return { ...state, weatherLocationObj : action.playload }
    }
    case ACTIONS.SET_LOCATION: {
      return { ...state, location: action.location }
    }
    case ACTIONS.SET_WOEID: {
      return { ...state, woeid : action.woeid }
    }
    case ACTIONS.SET_WEATHER_IN_FIVE_DAYS: {
      return { ...state, weatherInFiveDays : action.playload }
    }
  }
}


export default function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  async function fetchData() {
    const res = await axios.get(CORS_KEY + API_KEY + API_LOCATION + state.location)
    dispatch({ type: ACTIONS.LOADING_STATE, playload: res.data })
  }

  const getWeather = async () => {
    const res = await axios.get(CORS_KEY + API_KEY + "location/" + state.woeid)
    dispatch({type : ACTIONS.SET_WEATHER_IN_FIVE_DAYS, playload: res.data})
  }

  useEffect(() => {
    fetchData()
  }, [state.location])

  useEffect(() => {
    getWeather()
  }, [state.woeid])

  return (
    <GlobalContext.Provider value={{state, dispatch}}>
      { children }
    </GlobalContext.Provider>
  )
}

export { ContextProvider, GlobalContext }