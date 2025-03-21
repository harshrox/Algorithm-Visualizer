import { getUntraversedNeighbors } from "../../../utils/getUntraversedNeighbors";
import { isEqual } from "../../../utils/helpers";
import { GridType, TileType } from "../../../utils/types";
import { PriorityQueue } from "../../../utils/PriorityQueue"; 
import { heuristic } from "../../../utils/heuristic";

export const a_star = (
    grid: GridType,
    startTile: TileType,
    endTile: TileType
) => {
    const traversedTiles: TileType[] = [];

    // Use Maps to store g, h, and f values for each tile
    const gMap = new Map<TileType, number>(); // g(n) - Cost from start
    const hMap = new Map<TileType, number>(); // h(n) - Heuristic
    const fMap = new Map<TileType, number>(); // f(n) = g(n) + h(n)

    const base = grid[startTile.row][startTile.col];
    base.distance = 0; // This acts as g(n)
    gMap.set(base, 0);
    hMap.set(base, heuristic(base, endTile));
    fMap.set(base, gMap.get(base)! + hMap.get(base)!);
    base.isTraversed = true;

    const pq = new PriorityQueue<TileType>();
    pq.enqueue(base, fMap.get(base)!);

    while (!pq.isEmpty()) {
        const tile = pq.dequeue()!;
        if (tile.isWall) {
            continue;
        }
        if (fMap.get(tile) === Infinity) {
            break;
        }

        tile.isTraversed = true;
        traversedTiles.push(tile);

        if (isEqual(tile, endTile)) {
            break;
        }

        const neighbors = getUntraversedNeighbors(grid, tile);
        for (let i = 0; i < neighbors.length; i++) {
            const neighbor = neighbors[i];
            const newG = (gMap.get(tile) ?? Infinity) + 1; // Assuming uniform movement cost

            if (newG < (gMap.get(neighbor) ?? Infinity)) {
                gMap.set(neighbor, newG);
                hMap.set(neighbor, heuristic(neighbor, endTile));
                fMap.set(neighbor, gMap.get(neighbor)! + hMap.get(neighbor)!);
                neighbor.parent = tile;
                pq.enqueue(neighbor, fMap.get(neighbor)!);
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
