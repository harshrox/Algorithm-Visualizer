import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PathfindingProvider } from './contexts/PathfindingContext'
import { TileProvider } from './contexts/TileContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <PathfindingProvider>
      <TileProvider>
        <div className='font-mono'>
          Hello World
        </div>
      </TileProvider>
    </PathfindingProvider>
  )
}

export default App
