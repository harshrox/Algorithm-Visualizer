import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PathfindingProvider } from './contexts/PathfindingContext'
import { TileProvider } from './contexts/TileContext'
import { SpeedProvider } from './contexts/SpeedContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <PathfindingProvider>
      <TileProvider>
        <SpeedProvider>
          <div className='font-mono'>
            Hello World
          </div>
        </SpeedProvider>
      </TileProvider>
    </PathfindingProvider>
  )
}

export default App
