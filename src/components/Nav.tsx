import { useState } from "react";
import { usePathfinding } from "../hooks/usePathfinding";
import { useTile } from "../hooks/useTile";
import { MAZES } from "../utils/constants";
import { resetGrid } from "../utils/resetGrid";
import { MazeType } from "../utils/types";
import { Select } from "./Select";

export function Nav() {

    const {maze, setMaze, grid} = usePathfinding();
    const {startTile, endTile} = useTile();
    const [isDisabled, setIsDisabled] = useState(false);
    
    const handleGenerateMaze = (maze: MazeType) => {
        if(maze === "NONE"){
            setMaze(maze);
            resetGrid({grid, startTile, endTile});
            return;
        }

        setMaze(maze);
        setIsDisabled(true);

        // Run maze algorithm

    }

    return (
        <div className="flex items-center justify-center min-h-[4.5rem] border shadow-gray-600 sm:px-5 px-0">
            <div className="flex items-center justify-center w-full sm:w-[52rem] border">
                <h1 className="border lg:flex w-[40%] text-2xl pl-1 text-white font-mono ">
                    Algorithm Visualizer
                </h1>
                <div className="flex sm:items-end items-center justify-start sm:justify-between sm:flex-row flex-col sm:space-y-0 space-y-3 sm:py-0 py-4 sm:space-x-4">
                    <Select
                        label="Maze"
                        value={maze}
                        options={MAZES}
                        onChange={(e) => {
                            handleGenerateMaze(e.target.value as MazeType);
                        }}
                        isDisabled={false}
                    />
                </div>
            </div>
        </div>
    );
}