import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1 className='text-4xl text-center'>Coffee house client</h1>
      <button className="btn btn-accent">Accent</button>
      
    </>
  )
}

export default App
