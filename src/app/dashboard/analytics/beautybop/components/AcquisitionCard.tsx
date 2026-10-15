const acquisitionData = [
    { id: 1, channel: 'Direct', percentage: 31},
    { id: 2, channel: 'Organic Search', percentage: 46},
    { id: 3, channel: 'Email', percentage: 15},
    { id: 4, channel: 'Social', percentage: 8},
]

export default function AcquisitionCard(){

    return (
        <div className="rounded-xl border border-gray-400 bg-[#111C24] p-6">

            <div>
                <h2 className="text-xl font-semibold text-white">
                    Acquisition Data
                </h2>
                <p className="text-sm text-gray-400 mt-1">
                    Breakdown of the traffic data
                </p>

                <div className="mt-6 space-y-4">
                    {acquisitionData.map((item) => {

                        return (
                            <div 
                            key={item.id}
                            >
                                <div 
                                className="flex items-center justify-between"
                                >
                                    <p>{item.channel}</p>
                                    <p>{item.percentage}%</p>
                                </div>

                                <div className="mt-3 h-2 w-full rounded-full bg-gray-800">
                                    <div
                                    className="h-2 rounded-full bg-blue-500"
                                    style={{ width: `${item.percentage}%` }}
                                    ></div>
                                </div>
                            </div>
                        )
                    })
                    }

                </div>
            </div>

        </div>
    )

}