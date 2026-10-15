
const currencyFormatter = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
});

type Product = {
    name: string,
    views: number,
    orders: number,
    revenue: number,
}

type TopProductsProps = {
    products: Product[];
    range: string;
};

export default function TopProducts(
{products, range} : TopProductsProps
){

    const rangeLabels: Record<string, string> = {
        today: "today",
        yesterday: "yesterday",
        "7days": "over the last 7 days",
        "28days": "over the last 28 days",
    };

    const rangeLabel = rangeLabels[range]?? "for selected period";

    return (
        <div className="rounded-xl border border-gray-800 bg-[#111C24] p-6 my-6">

            <h2 className="text-xl font-semibold text-white">
                Top Products
            </h2>

            <p className="mt-1 text-sm text-gray-400">
                Best performing products {rangeLabel}
            </p>

            <div className="grid grid-cols-4 gap-4 border-b border-gray-800 pb-3 text-sm mt-6 text-gray-400">
                <p>Product</p>
                <p>Views</p>
                <p>Orders</p>
                <p>Revenue</p>
            </div>

            <div>
                {products.map((item, index) => {
                        return (
                        <div 
                        className="grid grid-cols-4 flex flex-row items-center justify-between space-y-4 gap-6"
                        key={index}>
                            <div>{item.name}</div>
                            <div>{item.views}</div>
                            <div>{item.orders}</div>
                            <div>{currencyFormatter.format(item.revenue)}</div>
                        </div>
                            
                        ) 
                    }
                )}
            </div>

        </div>
    );
}