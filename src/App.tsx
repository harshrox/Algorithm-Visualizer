import { useRef} from 'react'
import './App.css'
import { PathfindingProvider } from './contexts/PathfindingContext'
import { TileProvider } from './contexts/TileContext'
import { SpeedProvider } from './contexts/SpeedContext'
import { Grid } from './components/Grid'
import { Nav } from './components/Nav'
import { Info } from './components/Info'

function App() {
  const isVisualizationRunningRef = useRef(false);

  return (
    <PathfindingProvider>
      <TileProvider>
        <SpeedProvider>
          <div className="bg-slate-900 min-h-screen w-screen flex flex-col">
            <Nav isVisualizationRunningRef={isVisualizationRunningRef} />
            
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
              <div className="w-1/2 md:w-[300px] h-auto bg-transparent text-gray-600 p-4 mt-4 md:mt-5 md:mr-4 italic hidden md:block cursor-default select-none">
                Click and drag to add or remove walls.
              </div>
              {/* Grid stays centered */}
              <Grid isVisualizationRunningRef={isVisualizationRunningRef} />

              <div className="w-1/2 md:w-[300px] h-auto bg-gray-800 text-white p-4 mt-4 md:mt-5 md:ml-4 rounded-lg shadow-lg">
                <Info/>
              </div>
            </div>
          </div>
        </SpeedProvider>
      </TileProvider>
    </PathfindingProvider>
  );
}

export default App
