import { twMerge } from "tailwind-merge";
import { usePathfinding } from "../hooks/usePathfinding";
import { MAX_COLS, MAX_ROWS } from "../utils/constants";
import { Tile } from "./Tile";

export function Grid(){
    const {grid} = usePathfinding();

    return (
        <div 
            className={twMerge(
                // Basic structure
                "flex flex-col items-center justify-center border-gray-600",
                // Grid height
                `lg:min-h-[${MAX_ROWS * 17}px] md:min-h-[${MAX_ROWS * 15}px] sm:min-h-[${MAX_ROWS * 8}px] min-h-[${MAX_ROWS * 7}px]`,
                // Grid width
                `lg:w-[${MAX_COLS * 17}px] md:w-[${MAX_COLS * 15}px] sm:w-[${MAX_COLS * 8}px] w-[${MAX_COLS * 7}px]`
            )}
        >
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="flex">
                    {row.map((tile, tileIndex) => {
                        const {isStart, isEnd, isPath, isTraversed, isWall} = tile;
                        return (
                            <Tile
                                key={tileIndex}
                                row={tile.row}
                                col={tile.col}
                                isEnd={isEnd}
                                isStart={isStart}
                                isPath={isPath}
                                isTraversed={isTraversed}
                                isWall={isWall}
                            />
                        );
                    })}
                </div>
            ))}
        </div>
    );
}