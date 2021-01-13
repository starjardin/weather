import React, { useContext } from 'react'
import styled from 'styled-components'
import { addDays, format } from 'date-fns/fp'
import { VscLocation } from 'react-icons/vsc'

import { GlobalContext } from '../useReducer'
import { ACTIONS } from '../useReducer'

const LocationContainerStyles = styled.div`
  // max-width : 25%;
`

const LocationsStyles = styled.p`
  border : 1px solid #ccc;
  padding : 1rem;
  cursor : pointer;
`
export default function Locations() {
  const { state, dispatch } = useContext(GlobalContext)
  
  const todaysWeather = state.weatherInFiveDays.consolidated_weather?.[0]
  const todaysDate = todaysWeather?.created
  const temperature = Number(todaysWeather?.the_temp).toFixed(2)
  
  function handleClick(e) {
    const locationValue = e.target.dataset.value
    const selectedLocation = state.weatherLocationObj.filter(location => location.title === locationValue)
    console.log(selectedLocation[0].woeid);
    dispatch({type : ACTIONS.SET_WOEID, woeid : selectedLocation[0].woeid})
  }

  return (
    <LocationContainerStyles>
      {state.weatherLocationObj.length !== 0
        ? state.weatherLocationObj.map((location, index) => 
          <LocationsStyles 
            key={index}
            data-value={location.title}
            onClick={handleClick}
          >
            {location.title}
          </LocationsStyles>)
        : <div >
          {todaysWeather &&
            <div>
              <img />
              <p>{Number(temperature)} C</p>
              <p>{todaysWeather.weather_state_name}</p>
              <p>Today : {todaysDate}</p>
              <p><VscLocation /> {state.weatherInFiveDays?.title}</p>
            </div>}
        </div>
      }
    </LocationContainerStyles>
  )
}
