import styled from 'styled-components'

export const WeatherInFiveDaysStyles = styled.div`
  display : flex;
  gap : 1rem;
  flex-wrap : wrap;
  text-align : center;
  max-width : 650px;
  margin : auto;

  div {
    background-color : #1E213A;
    padding : 1rem;
    cursor : pointer;
    max-width : 120px;
  }

  img  {
    max-width : 56px;
    max-height : 62px;
  }

  .max-temp {
    text-align : left;
    padding-right : 0.5rem;
  }

  .min-temp {
    text-align : right;
    padding-left : 0.5rem;
  }

  @media screen and (min-width : 720px) {
    justify-content : space-between;
  }
`
export const HilightsStyles = styled.div`
  margin : 1rem;
  max-width : 650px;
  margin : auto;

  .number {
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 75px;
    color: #E7E7EB;
    span {
      font-weight: normal;
      font-size: 44px;
    }
  }

  .headlines {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #E7E7EB; 
  }

  div {
    background-color : #1E213A;
    padding : 1rem;
    margin : 1rem;
    text-align : center;
    max-width : 328px;
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
