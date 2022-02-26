import React from 'react'
import ReactDOM from 'react-dom'

import './main.scss'
import Landing from 'pages/Landing/Landing'

const App = () => {
  return (
    <div>
      <p>Site is in under construction.</p>
      <Landing />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
