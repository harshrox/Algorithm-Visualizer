import { TRAVERSED_TILE_STYLE, TILE_STYLE, PATH_TILE_STYLE, WALL_TILE_STYLE, START_TILE_STYLE, END_TILE_STYLE } from "../utils/constants";

export function Info() {
    return (
        <>
            <h2 className="text-lg font-mono border-b border-gray-600">Tile Legend</h2>
            <div className="mt-4 space-y-3 font-mono">
                <div className="flex items-center">
                    <div className={`${TRAVERSED_TILE_STYLE} w-6 h-6 rounded-sm mr-2`}></div>
                    <span>Traversed Tile</span>
                </div>
                <div className="flex items-center">
                    <div className={`${TILE_STYLE} w-6 h-6 border border-gray-500 rounded-sm mr-2`}></div>
                    <span>Empty Tile</span>
                </div>
                <div className="flex items-center">
                    <div className={`${PATH_TILE_STYLE} w-6 h-6 rounded-sm mr-2`}></div>
                    <span>Path Tile</span>
                </div>
                <div className="flex items-center">
                    <div className={`${WALL_TILE_STYLE} w-6 h-6 rounded-sm mr-2`}></div>
                    <span>Wall Tile</span>
                </div>
                <div className="flex items-center">
                    <div className={`${START_TILE_STYLE} w-6 h-6 rounded-sm mr-2`}></div>
                    <span>Start Tile</span>
                </div>
                <div className="flex items-center">
                    <div className={`${END_TILE_STYLE} w-6 h-6 rounded-sm mr-2`}></div>
                    <span>End Tile</span>
                </div>
            </div>
        </>
    );
}