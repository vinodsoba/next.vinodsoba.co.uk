import AcquisitionCard from "./components/AcquisitionCard";
import DateRangeSelector from "./components/DateRangeSelector";
import EcommerceFunnel from "./components/EcommerceFunnel";
import ProductEngagement from "./components/ProductEngagement";
import StatCard from "./components/StatCard";
import TopProducts from "./components/TopProducts";
import TrafficData from "./components/TrafficChart";
import { 
    getBeautyBopOverview,
    getBeautyBopProductEvents,
    getBeautyBopProducts
} from "@/lib/googleAnalytics";


type BeautyBopAnalyticsProps = {
    searchParams: Promise<{ 
        range?: string;
    }>
};


export default async function BeautyBopAnalytics({
    searchParams
} : BeautyBopAnalyticsProps ){

    const { range } = await searchParams;

    const selectedRange = range ?? "today";

    let startDate = "today";
    let endDate = "today"; 


    let comparisonStartDate = "yesterday";
    let comparisonEndDate = "yesterday";

    if (selectedRange === "yesterday"){
        startDate = "yesterday";
        endDate = "yesterday";

        comparisonStartDate = "2daysAgo";
        comparisonEndDate = "2daysAgo";
    }

    if (selectedRange === "7days"){
        startDate = "6daysAgo";
        endDate = "today";

        comparisonStartDate = "13daysAgo";
        comparisonEndDate = "7daysAgo";
    }

    if (selectedRange === "28days") {
        startDate = "27daysAgo";
        endDate = "today";

        comparisonStartDate = "55daysAgo";
        comparisonEndDate = "28daysAgo";
    }

    const { 
        activeUsers, 
        activeUsersChange,
        sessions, 
        sessionsChange,
        orders, 
        ordersChange,
        revenue, 
        revenueChange,
        keyEvents, 
        checkouts,
    } = await getBeautyBopOverview(startDate, endDate, comparisonStartDate, comparisonEndDate);

    const products = await getBeautyBopProducts(
        startDate,
        endDate,
    );

    const productEvents = await getBeautyBopProductEvents(
        startDate,
        endDate,
    );

    console.log("Dashboard products", products);

    

    const formattedActiveUsers = Number(activeUsers ?? 0).toLocaleString("en-GB");

    const formattedSessions = Number(sessions ?? 0).toLocaleString("en-GB");

    const formattedOrders = Number(orders ?? 0).toLocaleString("en-GB");

    const formattedRevenue = Number(revenue ?? 0).toLocaleString("en-GB", {
        style: "currency",
        currency: 'GBP'
    });

    const formattedKeyEvents = Number(keyEvents ?? 0).toLocaleString("en-GB");

    const formattedCheckouts = Number(checkouts ?? 0).toLocaleString("en-GB");

    return (
        <section className="text-white">
            <div className="p-8 w-full max-w-[1600px] mx-auto">
                <div className="flex items-start justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-white">
                            BeautyBop Analytics
                        </h1>

                        <p className="text-gray-400 mt-2">
                            Ecommerce and Performance Analytics
                        </p>
                    </div>

                    <DateRangeSelector selectedRange={selectedRange}/>
                </div>  

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">

                    <StatCard
                        title="Active Users"
                        value={formattedActiveUsers}
                        change={`${activeUsersChange > 0 ? "+" : ""}${activeUsersChange}%`}
                        changeValue={activeUsersChange}
                    />

                    <StatCard
                        title="Sessions"
                        value={formattedSessions}
                        change={`${sessionsChange > 0 ? "+" : ""}${sessionsChange}%`}                        changeValue={sessionsChange}
                    />

                    <StatCard
                        title="Orders"
                        value={formattedOrders}
                        change={`${ordersChange > 0 ? "+" : ""}${ordersChange}%`}
                        changeValue={ordersChange}
                    />

                    <StatCard
                        title="Revenue"
                        value={formattedRevenue}
                        change={`${revenueChange > 0 ? "+" : ""}${revenueChange}%`}
                        changeValue={revenueChange}
                    />

                    <StatCard
                        title="Checkouts"
                        value={formattedCheckouts}
                        change=""
                        changeValue={8}
                    />


                </div>

                <TrafficData range={selectedRange} />

                <EcommerceFunnel />

                <AcquisitionCard />

                <TopProducts 
                products={products}
                range={selectedRange}
                />

                <ProductEngagement 
                productEvents={productEvents} 
                range={selectedRange}
                />
                
            </div>
            
        </section>
    );
}