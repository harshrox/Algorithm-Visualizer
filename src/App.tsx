import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PathfindingProvider } from './contexts/PathfindingContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <PathfindingProvider>
      <div className='font-mono'>
        Hello World
      </div>
    </PathfindingProvider>
  )
}

export default App
