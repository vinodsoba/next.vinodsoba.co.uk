const funnelData = [
    { id: 1, label: "Product Views", value: 128 },
    { id: 2, label: "Add to cart", value: 18 },
    { id: 3, label: "Checkout", value: 7 },
    { id: 4, label: "Purchases", value: 3 },
]



export default function EcommerceFunnel(){

   const totalViews = funnelData[0].value;


    return (
        <div className="rounded-xl border border-gray-800 bg-[111C24] p-6">

            <div>
                <h2 className="text-xl font-semibold text-white">
                    Ecommerce Funnel
                </h2>

                <p className="mt-1 text-sm text-gray-400">
                    Customer Journey over the last 7 days
                </p>

                <div className="space-y-4 mt-6 flex item-center justify-between">
                   {funnelData.map((item, index) => {
                    
                    const percentage = (item.value / totalViews) * 100;


                    const previousValue =
                        index === 0
                            ? item.value
                            : funnelData[index - 1].value;

                    const stageConversion =
                        (item.value / previousValue) * 100;

                        return (
                            <div key={item.id}>
                                <p>
                                {item.label}: {item.value}
                                </p>
                                <p>
                                    {percentage.toFixed(1)}%
                                </p>
                                <div className="mt-3 h-2 w-full rounded-full bg-gray-800">
                                    <div
                                    className="h-2 rounded-full bg-blue-500"
                                    style={{ width: `${percentage}%` }}
                                    ></div>
                                </div>
                                {index > 0 && (
                                    <p className="mt-2 text-xs text-gray-500">
                                        {stageConversion.toFixed(1)}% from previous stage
                                    </p>
                                )}
                            </div>
                        );

                    })}
                
                </div>
            </div>

        </div>
    )
}