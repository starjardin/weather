import React from 'react'
import ReactDOM from 'react-dom'

import { ContextProvider } from './useReducer'
import App from "./App"

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.querySelector("#root")
)