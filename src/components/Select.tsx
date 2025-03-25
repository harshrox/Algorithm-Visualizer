import { ChangeEvent } from "react";
import { SpeedType } from "../utils/types";

export function Select({
    value, 
    onChange, 
    options,
    label,
    isDisabled
}: {
    value: string | number | SpeedType;
    onChange: (value: ChangeEvent<HTMLSelectElement>) => void;
    options: {value: string | number | SpeedType; name: string}[];
    label: string;
    isDisabled: boolean;
}) {
    return (
        <div className="flex flex-col items-start gap-2 w-full">
            <label className="text-sm font-mono text-gray-300 ml-1 tracking-wide" htmlFor={label}>
                {label}
            </label>

            <select
                disabled={isDisabled}
                id={label}
                className="w-full py-3 pl-2 rounded-xl bg-gray-900 text-gray-200 font-mono border border-gray-700 
                           shadow-md transition-all duration-300 ease-in-out 
                           hover:border-blue-400 hover:shadow-lg hover:bg-gray-800 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 
                           disabled:opacity-50 disabled:cursor-not-allowed"
                value={value}
                onChange={onChange}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value} className="bg-gray-900 text-gray-200">
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
};
