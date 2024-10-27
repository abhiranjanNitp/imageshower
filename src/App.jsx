import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import photourl from './images/myphoto.jpg'
import Card from './Card'
import Card2 from './Card2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1></h1>
      <Card2 />
    </div>


  )
}

export default App
