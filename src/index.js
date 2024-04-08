import  ReactDOM  from "react-dom/client";
import React from 'react'

const App = () => {
  return (
    <div>
      <h1>webpack completed successfully</h1>
    </div>
  )
}

export default App

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<App />)