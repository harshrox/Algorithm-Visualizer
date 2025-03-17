import { SPEEDS, TILE_STYLE } from "./constants";
import { sleep } from "./helpers";
import { GridType, SpeedType } from "./types";

export const destroyRowCol = async (
    row: number,
    col: number,
    grid: GridType,
    speed: SpeedType
) => {
    grid[row][col].isWall = false;
    document.getElementById(`${row}-${col}`)!.className = TILE_STYLE;
    await sleep(20 * SPEEDS.find((s) => s.value === speed)!.value - 5);
}