import React from 'react'
import styled from 'styled-components'

const LocationContainerStyles = styled.div`
  max-width : 25%;
`

const LocationsStyles = styled.p`
  border : 1px solid #ccc;
  padding : 1rem;
  cursor : pointer;
`
export default function Locations({
  weatherLocationObj, handleClick
}) {
  return (
    <LocationContainerStyles>
      {weatherLocationObj.length !== 0
        ? weatherLocationObj.map((location, index) => 
          <LocationsStyles 
            key={index}
            onClick={() => handleClick(location.title)}
          >
            {location.title}
          </LocationsStyles>)
        : "can not find your location please search"
      }
    </LocationContainerStyles>
  )
}
