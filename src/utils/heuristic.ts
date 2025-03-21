import { TileType } from "./types";

// Manhattan Distance heuristic
export const heuristic = (a: TileType, b: TileType): number => {
    return Math.abs(a.row - b.row) + Math.abs(a.col - b.col);
};
