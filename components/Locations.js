import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { addDays, format } from 'date-fns/fp'

import { GlobalContext } from '../useReducer'
import { ACTIONS } from '../useReducer'

// let format = require('date-fns/format')

const LocationContainerStyles = styled.div`
  // max-width : 25%;
`

const LocationsStyles = styled.p`
  border : 1px solid #ccc;
  padding : 1rem;
  cursor : pointer;
  margin : 0;
`
export default function Locations({ setSearchIsOpen }) {
  const { state, dispatch } = useContext(GlobalContext)
    
  function handleClick(e) {
    const locationValue = e.target.dataset.value
    const selectedLocation = state.weatherLocationObj.filter(location => location.title === locationValue)
    console.log(selectedLocation[0].woeid);
    dispatch({ type: ACTIONS.SET_WOEID, woeid: selectedLocation[0].woeid })
    setSearchIsOpen(false)
  }

  return (
    <LocationContainerStyles>
      {state.weatherLocationObj.length !== 0
        && state.weatherLocationObj.map((location, index) => 
          <LocationsStyles 
            key={index}
            data-value={location.title}
            onClick={handleClick}
          >
            {location.title}
          </LocationsStyles>)
      }
    </LocationContainerStyles>
  )
}
