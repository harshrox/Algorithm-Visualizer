import { MutableRefObject, useState } from "react";
import { usePathfinding } from "../hooks/usePathfinding";
import { useTile } from "../hooks/useTile";
import { EXTENDED_SLEEP_TIME, MAZES, PATHFINDING_ALGORITHMS, SLEEP_TIME, SPEEDS } from "../utils/constants";
import { resetGrid } from "../utils/resetGrid";
import { AlgorithmType, MazeType, SpeedType } from "../utils/types";
import { Select } from "./Select";
import { runMazeAlgorithm } from "../utils/runMazeAlgorithm";
import { useSpeed } from "../hooks/useSpeed";
import { PlayButton } from "./PlayButton";
import { runPathfindingAlgorithm } from "../utils/runPathfindingAlgorithm";
import { animatePath } from "../utils/animatePath";

export function Nav({isVisualizationRunningRef}: {isVisualizationRunningRef: MutableRefObject<boolean>}) {

    const {maze, setMaze, grid, setGrid, isGraphVisualized, setIsGraphVisualized, algorithm, setAlgorithm} = usePathfinding();
    const {startTile, endTile} = useTile();
    const [isDisabled, setIsDisabled] = useState(false);
    const {speed, setSpeed} = useSpeed();
    
    const handleGenerateMaze = (maze: MazeType) => {
        if(maze === "NONE"){
            setMaze(maze);
            resetGrid({grid, startTile, endTile});
            return;
        }

        setMaze(maze);
        setIsDisabled(true);

        // Run maze algorithm
        runMazeAlgorithm({
            maze, grid, startTile, endTile, setIsDisabled, speed
        });
        
        const newGrid = grid.slice();
        setGrid(newGrid);
        setIsGraphVisualized(false);
    }

    const handleRunVisualizer = () => {
        if(isGraphVisualized){
            setIsGraphVisualized(false);
            setMaze("NONE");
            resetGrid({grid, startTile, endTile});
            return;
        }

        const {traversedTiles, path} = runPathfindingAlgorithm({
            algorithm,
            grid,
            startTile,
            endTile
        });

        animatePath(traversedTiles, path, startTile, endTile, speed);
        setIsDisabled(true);
        isVisualizationRunningRef.current = true;
        setTimeout(() => {
            const newGrid = grid.slice();
            setGrid(newGrid);
            setIsGraphVisualized(true);
            setIsDisabled(false);
            isVisualizationRunningRef.current = false;
          }, 
          (traversedTiles.length * SLEEP_TIME + path.length * EXTENDED_SLEEP_TIME) * 
          (speed === 0.5 ? 0.8 : speed === 1 ? 1.3 : 2.2) + 100 // 100ms safety buffer
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-[4.5rem] shadow-gray-600 sm:px-5 px-0 gap-10">
            <h1 className="flex w-[100%] justify-center text-3xl md:text-5xl underline text-white font-mono mt-10">
                Algorithm Visualizer
            </h1>
            <div className="flex items-center justify-center w-full sm:w-[52rem]">    
                <div className="flex sm:items-end items-center justify-start sm:justify-between sm:flex-row flex-col sm:space-y-0 space-y-3 sm:py-0 py-4 sm:space-x-4">
                    <Select
                        label="Maze"
                        value={maze}
                        options={MAZES}
                        onChange={(e) => {
                            handleGenerateMaze(e.target.value as MazeType);
                        }}
                        isDisabled={isDisabled}
                    />
                    <Select
                        label="Graph"
                        value={algorithm}
                        options={PATHFINDING_ALGORITHMS}
                        onChange={(e) => {
                            setAlgorithm(e.target.value as AlgorithmType);
                        }}
                        isDisabled={isDisabled}
                    />
                    <Select
                        label="Speed"
                        value={speed}
                        options={SPEEDS}
                        onChange={(e) => {
                            setSpeed(Number(e.target.value) as SpeedType);
                        }}
                        isDisabled={isDisabled}
                    />
                    <PlayButton
                        isDisabled={isDisabled}
                        isGraphVisualized={isGraphVisualized}
                        handleRunVisualizer={handleRunVisualizer}
                    />
                </div>
            </div>
        </div>
    );
}