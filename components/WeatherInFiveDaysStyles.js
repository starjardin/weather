import styled from 'styled-components'

export const WeatherInFiveDaysStyles = styled.div`
  display : flex;
  gap : 1rem;
  // justify-content : space-between;
  flex-wrap : wrap;
  text-align : center;

  div {
    background-color : #1E213A;
    padding : 1rem;
    cursor : pointer;
    max-width : 120px;
  }

  .max-min-temp {
    display : flex;
    justify-content : space-between;
  }

  img  {
    max-width : 56px;
    max-height : 62px;
  }
`
export const HilightsStyles = styled.div`
  margin : 1rem;
  div {
    background-color : #1E213A;
    padding : 1rem;
    margin : 1rem;
    text-align : center;
  }

  @media screen and (min-width : 720px) {
    display : grid;
    grid-template-columns : repeat(2, 1fr);
    gap : 2rem;
    div {
      margin : 0;
    }
  }
`
