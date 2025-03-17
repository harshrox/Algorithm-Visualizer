import { SPEEDS, TILE_STYLE } from "./constants";
import { destroyRowCol } from "./destroyRowCol";
import { GridType, SpeedSelectType, SpeedType } from "./types";

export const destroyWall = async (
    grid: GridType,
    row: number,
    col: number,
    isRight: number,
    speed: SpeedType
) => {
     
    if(isRight && grid[row][col + 1]){
        await destroyRowCol(row, col + 1, grid, speed)
    }
    else if(grid[row + 1]){
        await destroyRowCol(row + 1, col, grid, speed);
    }
    else{
        await destroyRowCol(row, col, grid, speed);
    }
}