import styled from 'styled-components'

const MainStyles = styled.div`
  gap : 0rem;
  .search-feild {
    background-color : #1E213A;
    flex-basis : 35%;
    min-height : 100vh;
    .search {
      background-color : #3C47E9;
      border : none;
      margin-left : 1rem;
      color : #E7E7EB;
    }
  }
  .weather {
    flex-basis : 65%;
    background-color : #100E1D;
    div {
      // margin-left : 1rem;
    }
  }

  .close {
    background-color : #1E213A;
    color : #E7E7EB;
    text-align : end;
    border : none;
    cursor : pointer;
    display : block;
    padding : 2rem;
  }
  
  .weather-state {
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    color: #A09FB1;
  }
  
  .location {
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    margin : 0;
    padding : 2rem 0;
  }

  .date {
    padding-inline : 0.2rem;
    color: #E7E7EB;
  }

  [name="search"] {
    border: 1px solid #E7E7EB;
    box-sizing: border-box;
  }

  [name="search"], .search { 
    padding : 0.5rem 1rem;
    background-color : #1E213A;
    color : #616475;
  }
  
  
  [name="search"]:focus {
    outline  : none;
    border: 1px solid #E7E7EB;
    box-sizing: border-box;
  }

  #search-for-places {
    margin : 2rem 0.5rem;
    background-color : #6E707A;
    color : #E7E7EB;
    padding : 0.5rem;
  }

  .todays-weather {
    .weather-today {
      text-align : center;
      img {
        max-width : 202px;
        max-height : 234px
      }
      .heat {
        font-style: normal;
        font-weight: 500;
        font-size: 100px;
        line-height: 100px;
        color: #E7E7EB;
      }
      .deg {
        font-weight: 500;
        font-size: 60px;
        line-height: 169px;
      }
    }
  }

  @media screen and (min-width : 720px) {
    display : flex;
    .todays-weather {
      position : fixed;
      min-height : 100vh;
      max-height : 100vh;
      height : 100vh;
      top : 0;
      bottom : 0;
      margin-right : 1rem;
    }
  }
`
export default MainStyles;