import { getUntraversedNeighbors } from "../../../utils/getUntraversedNeighbors";
import { isEqual } from "../../../utils/helpers";
import { isInStack } from "../../../utils/isInStack";
import { GridType, TileType } from "../../../utils/types";

export const dfs = (grid: GridType, startTile: TileType, endTile: TileType) => {
    const traversedTiles = [];
    const base = grid[startTile.row][startTile.col];
    base.distance = 0;
    base.isTraversed = true;
    const unTraversedTiles = [base];

    while(unTraversedTiles.length > 0){
        const currTile = unTraversedTiles.pop();
        if(currTile){
            if(currTile.isWall){
                continue;
            }
            if(currTile.distance === Infinity){
                break;
            }
            currTile.isTraversed = true;
            traversedTiles.push(currTile);
            
            if(isEqual(currTile, endTile)){
                break;
            }

            const neighbors = getUntraversedNeighbors(grid, currTile);
            for(let i=0;i<neighbors.length;i++){
                if(!isInStack(neighbors[i], unTraversedTiles)){
                    neighbors[i].distance = currTile.distance + 1;
                    neighbors[i].parent = currTile;
                    unTraversedTiles.push(neighbors[i]);
                }
            }
        }
    }

    const path: TileType[] = [];
    let tile: TileType | null = grid[endTile.row][endTile.col];
    while(tile !== null){
        tile.isPath = true;
        path.unshift(tile);
        tile = tile.parent;
    }

    return {traversedTiles, path};
}