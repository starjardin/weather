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
  
  .search {
    border : none;
    margin-left : 1rem;
    display : none;
  }

  input:focus {
    outline  : none;
    border : #ccc 1px solid;
  }

  input:focus ~ .search {
    display : inline-block;
  }

  @media screen and (min-width : 720px) {
    display : flex;
  }
`
export default MainStyles;