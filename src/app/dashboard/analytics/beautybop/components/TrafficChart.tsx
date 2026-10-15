"use client";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer

} from "recharts";


const trafficData = [
    { day: "Mon", sessions: 32 },
    { day: "Tue", sessions: 38 },
    { day: "Wed", sessions: 35 },
    { day: "Thu", sessions: 47 },
    { day: "Fri", sessions: 52 },
    { day: "Sat", sessions: 44 },
    { day: "Sun", sessions: 61 },
];

type rangeSelected = {
    range: string
}

export default function TrafficData({
    range
} : rangeSelected){


    const rangeLabels: Record<string, string> = {
        today: "today",
        yesterday: "yesterday",
        "7days": "over the last 7 days",
        "28days": "over the last 28 days",
    };

    const rangeLabel = rangeLabels[range]?? "for selected period";

    return (
        <div className="rounded-xl border border-gray-800 bg-[#111C24] p-6 my-6">
            <h2 className="text-lg font-semibold text-white">
                Traffic Overview
            </h2>

            <p className="mt-1 text-sm text-gray-400">
                Sessions {rangeLabel}
            </p>

            <div className="mt-6 h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart 
                    data={trafficData}
                     margin={{
                        top: 10,
                        right: 20,
                        left: 0,
                        bottom: 0
                    }}
                    >

                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day"/>

                         <YAxis />
                        <Tooltip />
                        <Line 
                        type="monotone"
                        dataKey="sessions" 
                        strokeWidth={2}
                        activeDot={{ r: 2 }}
                        />

                    </LineChart>

                </ResponsiveContainer>
            </div>

        </div>
    )
}