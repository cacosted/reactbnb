import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './containers/App'
import { GlobalStyle } from './styles/GlobalStyle'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
)
