import { getUntraversedNeighbors } from "../../../utils/getUntraversedNeighbors";
import { isEqual } from "../../../utils/helpers";
import { GridType, TileType } from "../../../utils/types";
import { PriorityQueue } from "../../../utils/PriorityQueue"; 

export const dijkstra = (
    grid: GridType,
    startTile: TileType,
    endTile: TileType
) => {
    const traversedTiles: TileType[] = [];
    const base = grid[startTile.row][startTile.col];
    base.distance = 0;
    base.isTraversed = true;

    const pq = new PriorityQueue<TileType>();
    pq.enqueue(base, 0);

    while(!pq.isEmpty()){
        const tile = pq.dequeue()!;
        if(tile.isWall){
            continue;
        }
        if(tile.distance === Infinity){
            break
        }

        tile.isTraversed = true;
        traversedTiles.push(tile);

        if(isEqual(tile, endTile)){
            break;
        }

        const neighbors = getUntraversedNeighbors(grid, tile);
        for(let i = 0; i < neighbors.length; i++){
            const neighbor = neighbors[i];
            const newDistance = tile.distance + 1; 

            if(newDistance < neighbor.distance){
                neighbor.distance = newDistance;
                neighbor.parent = tile;
                pq.enqueue(neighbor, newDistance);
            }
        }
    }


    const path: TileType[] = [];
    let tile: TileType | null = grid[endTile.row][endTile.col];
    while (tile !== null) {
        tile.isPath = true;
        path.unshift(tile);
        tile = tile.parent;
    }

    return { traversedTiles, path };
};
