import  ReactDOM  from "react-dom/client";
import React from 'react'
import './style.css'

const App = () => {
  console.log('jai bhavani jai shivaji');
  return (
    <div>
      <h1>webpack completed successfully</h1>
      <p>hi vedant create hindavi swaraj</p>
    </div>
  )
}

export default App

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<App />)