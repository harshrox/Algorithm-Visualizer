import { MouseEventHandler } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { GrPowerReset } from "react-icons/gr";

export function PlayButton({
    handleRunVisualizer,
    isDisabled,
    isGraphVisualized
}: {
    handleRunVisualizer: MouseEventHandler<HTMLButtonElement>;
    isDisabled: boolean;
    isGraphVisualized: boolean;
}) {
    return (
        <button
            disabled={isDisabled}
            onClick={handleRunVisualizer}
            className="disabled:pointer-events-none disabled:opacity-50 transition ease-in rounded-full p-2.5 shadow-md bg-blue-500 hover:bg-blue-600 border-none active:ring-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-30"
        >
            {isGraphVisualized ? <GrPowerReset className="w-5 h-5"/> : <BsFillPlayFill className="w-5 h-5"/>}

        </button>
    );

}