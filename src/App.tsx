import { useState } from 'react'
import './App.css'
import { PathfindingProvider } from './contexts/PathfindingContext'
import { TileProvider } from './contexts/TileContext'
import { SpeedProvider } from './contexts/SpeedContext'
import { Grid } from './components/Grid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <PathfindingProvider>
      <TileProvider>
        <SpeedProvider>
          <div className='bg-slate-900 h-screen w-screen flex flex-col'>
            <Grid/>
          </div>
        </SpeedProvider>
      </TileProvider>
    </PathfindingProvider>
  )
}

export default App
