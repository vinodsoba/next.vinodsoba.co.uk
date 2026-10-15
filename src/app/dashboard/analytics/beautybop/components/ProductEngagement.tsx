import { string } from "yup";

type productEvent = {
    name: string,
    views: number,
    addToCarts: number,
    purchases: number
}

type ProductEngagementProps = {
    productEvents: productEvent[];
    range: string
}

export default function ProductEngagement({
productEvents, range
} : ProductEngagementProps ){

    const rangeLabels: Record<string, string> = {
        today: "today",
        yesterday: "yesterday",
        "7days": "over the last 7 days",
        "28days": "over the last 28 days"
    };

    const rangeLabel = rangeLabels[range]?? "for selected period";

    return (
        <div className="rounded-xl border border-gray-800 bg-[#111C24] p-6 my-6">
            <h2 className="text-xl font-semibold text-white">
                Ecommerce Funnel
            </h2>

            <p className="mt-1 text-sm text-gray-400">
                Best performing products {rangeLabel}
            </p>
             <div className="grid grid-cols-4 gap-4 border-b border-gray-800 pb-3 text-sm mt-6 text-gray-400">
                <p>Product Name</p>
                <p>Views</p>
                <p>Add to Cart</p>
                <p>Purchase</p>
            </div>
            {productEvents.map((item, index) =>  (
                <div 
                key={index} 
                 className="grid grid-cols-4 items-center justify-between space-y-4 gap-6 py-4 border-b border-slate-800"
                >
                    <div>{item.name}</div>
                    <div>{item.views}</div>
                    <div>{item.addToCarts}</div>
                    <div>{item.purchases}</div>
                   
                </div>
                
            ))

            }
        </div>
    )

}