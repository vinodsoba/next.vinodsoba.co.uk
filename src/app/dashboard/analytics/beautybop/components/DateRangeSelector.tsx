"use client";

import { useRouter } from "next/navigation";
import React from "react";

type DateRangeSelectorProps = {
    selectedRange: string;
};



export default function DateRangeSelector({
    selectedRange,
} : DateRangeSelectorProps){

    const router = useRouter();

    const handleRangeChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const newRange = event.target.value;

        router.push(`?range=${newRange}`);
    };

    return (
         <select value={selectedRange} onChange={handleRangeChange}>
            <option className="text-black" value="today">Today</option>
            <option className="text-black" value="yesterday">Yesterday</option>
            <option className="text-black" value="7days">Last 7 days</option>
            <option className="text-black" value="28days">Last 28 days</option>
        </select>
    )
}