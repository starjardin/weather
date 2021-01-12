import React, { useContext } from 'react'
import styled from 'styled-components'

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
export default function Locations({ loadingLoaction }) {
  const { state, dispatch } = useContext(GlobalContext)

  function handleClick(e) {
    const locationValue = e.target.dataset.value
    const selectedLocation = state.weatherLocationObj.filter(location => location.title === locationValue)
    console.log(selectedLocation[0].woeid);
    dispatch({type : ACTIONS.SET_WOEID, woeid : selectedLocation[0].woeid})
  }

  return (
    <LocationContainerStyles>
      {loadingLoaction
        ? state.weatherLocationObj.length !== 0
          ? state.weatherLocationObj.map((location, index) => 
            <LocationsStyles 
              key={index}
              data-value={location.title}
              onClick={handleClick}
            >
              {location.title}
            </LocationsStyles>)
          : <div >
            <p>Loading...</p>
            <p>Can't find location, Please search</p>
          </div>
        : <p>Hello world</p>
      }
    </LocationContainerStyles>
  )
}
