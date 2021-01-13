import React, { useState, useContext } from 'react'

import Main from './components/Main'
import { GlobalContext } from './useReducer'
import { ACTIONS } from './useReducer'

export default function App () {
  const { dispatch } = useContext(GlobalContext)
  
  const handleSearch = (e) => {
    e.preventDefault()
    const searchLocation = e.target.search.value
    if (searchLocation.trim() === "") {
      console.log("Hello world")
    }
    dispatch({type : ACTIONS.SET_LOCATION, location : searchLocation})
  }

  return (
    <>
      <Main
        handleSearch={handleSearch}
      />
    </>
  )
}