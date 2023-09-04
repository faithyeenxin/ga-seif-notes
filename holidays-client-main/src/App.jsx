import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// connect backend and frontend localhost (deployment), 
// connect backend(cyclic) and frontend(vercel) (production)
const SERVER = import.meta.env.VITE_SERVER; 

fetch(SERVER)
  .then((response) => response.json())
  .then((data) => console.log(data));


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1> Hello</h1>
    </div>
  )
}

export default App
