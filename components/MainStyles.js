import styled from 'styled-components'

const MainStyles = styled.div`
  gap : 0rem;
  .search-feild {
    background-color : #1E213A;
    flex-basis : 35%;
    min-height : 100vh;
    label {
      display : block;
    }
  }
  .weather {
    flex-basis : 65%;
    background-color : #100E1D;
  }

  input, .search { 
    padding : 0.5rem 1rem;
    border-radius : 5px;
  }
  
  input:focus {
    outline  : none;
    border : #ccc 1px solid;
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
        line-height: 169px;
        color: #E7E7EB;
      }
    }
  }

  @media screen and (min-width : 720px) {
    display : flex;
    .search-feild {
      // position : fixed;
      // top : 0;
      // bottom : 0;
    }
  }
`
export default MainStyles;