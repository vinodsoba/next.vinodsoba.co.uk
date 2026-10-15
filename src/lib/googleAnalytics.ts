import { BetaAnalyticsDataClient } from "@google-analytics/data";

const propertyId = process.env.GA4_PROPERTY_ID;

const analyticsDataClient = new BetaAnalyticsDataClient({
    credentials: {
        client_email: process.env.GA4_CLIENT_EMAIL,
        private_key: process.env.GA4_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
});

export async function getBeautyBopOverview(
    startDate: string,
    endDate: string,
    comparisonStartDate: string,
    comparisonEndDate: string
) {

    const [response] = await analyticsDataClient.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [
            {
                startDate,
                endDate,
                name: "current",
            },
            {
                startDate: comparisonStartDate,
                endDate: comparisonEndDate,
                name: "comparison",
            },
        ],
        metrics: [
            {
                name: "activeUsers",
            },
            {
                name: "sessions",
            },
            {
                name: "ecommercePurchases",
            },
            {
                name: "purchaseRevenue",
            },
            {
                name: "keyEvents",
            }
        ],
    });

    function calculatePercentageChange(
        current: string | null |undefined,
        previous: string | null | undefined,
    ){
        const currentValue = Number(current ?? 0);
        const previousValue = Number(previous?? 0);

        if (previousValue === 0){
            return 0;
        }

        return Math.round(
        ((currentValue - previousValue) / previousValue) * 100);

    }

     const currentRow = response.rows?.find(
    (row) => row.dimensionValues?.[0]?.value === "current"
    );

    const comparisonRow = response.rows?.find(
        (row) => row.dimensionValues?.[0]?.value === "comparison"
    );


    const [checkoutResponse] = await analyticsDataClient.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [
            {
                startDate,
                endDate,
                name: "current",
            },
            {
                startDate: comparisonStartDate,
                endDate: comparisonEndDate,
                name: "comparison",
            }
    
        ],
        metrics: [
            {
                name: "eventCount"
            }
        ],
        dimensions: [
            {
                name: "eventName"
            }

        ],
        dimensionFilter: {
            filter: {
                fieldName: "eventName",
                stringFilter: {
                    value: "begin_checkout",
                    matchType: "EXACT" 
                }
            }
        }

    })

    // active users
    const activeUsers = currentRow?.metricValues?.[0]?.value;
    const comparisonActiveUsers =
    comparisonRow?.metricValues?.[0]?.value;
    const activeUsersChange = calculatePercentageChange(
        activeUsers,
        comparisonActiveUsers,
    );

    // sessions
    const sessions = currentRow?.metricValues?.[1]?.value;
    const comparisonSessions = comparisonRow?.metricValues?.[1]?.value;
    const sessionsChange = calculatePercentageChange(
        sessions,
        comparisonSessions,
    );

    // orders 
    const orders = currentRow?.metricValues?.[2]?.value;
    const comparisonOrders = comparisonRow?.metricValues?.[2]?.value;
    const ordersChange = calculatePercentageChange(
        orders,
        comparisonOrders
    );

    // revenue
    const revenue = currentRow?.metricValues?.[3]?.value;
    const comparisonRevenue = comparisonRow?.metricValues?.[3]?.value;
    const revenueChange = calculatePercentageChange(
        revenue,
        comparisonRevenue
    );

   
    const keyEvents = response.rows?.[0]?.metricValues?.[4]?.value;

    const checkouts =
    checkoutResponse.rows?.[0]?.metricValues?.[0]?.value;


    return {
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
    };

    

}

export async function getBeautyBopProducts(
    startDate: string,
    endDate: string
){
    const [response] = await analyticsDataClient.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [
            {
                startDate,
                endDate,
            },
        ],
        dimensions: [
            {
                name: "itemName"
            }
        ],
        metrics: [
            {
                name: "itemsViewed",
            },
            {
                name: "itemsPurchased",
            },
            {
                name: "itemRevenue",
            }
        ]

    });

    const products = response.rows?.map((row) => {

        const name = row.dimensionValues?.[0]?.value ?? "Unknown product";

        const views = Number(row.metricValues?.[0]?.value ?? 0);

        const orders = Number(row.metricValues?.[1]?.value ?? 0);

        const revenue = Number(row.metricValues?.[2]?.value ?? 0);

        return {
            name,
            views,
            orders,
            revenue
        }
        

    });

    return products ?? [];

}


export async function getBeautyBopPurchaseEvents() {
    const [response] = await analyticsDataClient.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [
            {
                startDate: "2026-10-05",
                endDate: "today",
            }
        ],
        dimensions: [
            {
                name: "date",
            },
            {
                name: "transactionId",
            },
        ],
        metrics: [
            {
                name: "eventCount",
            },
            {
                name: "purchaseRevenue",
            }
        ],
        dimensionFilter: {
            filter: {
                fieldName: "eventName",
                stringFilter: {
                    value: "purchase",
                    matchType: "EXACT",
                }
            }
            
        }

    });

    console.log(
    "GA4 purchase event rows:",
    JSON.stringify(response.rows, null, 2)
);
}

export async function getBeautyBopProductEvents(
    startDate: string,
    endDate: string

){

    const [response] = await analyticsDataClient.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [
            {
            startDate,
            endDate,
            }
        ],
        dimensions: [
            {
                name: "itemName",
            }
        ],
        metrics: [
            {
                name: "itemsViewed",
            },
            {
                name: "itemsAddedToCart"
            }, 
            {
                name: "itemsPurchased",
            },
        ]
        
    });

    console.log("===== PRODUCT EVENTS START =====");

    console.log(
        JSON.stringify(response.rows, null, 2)
    );

    console.log("===== PRODUCT EVENTS END =====");

    const productEvents = response.rows?.map((row) => {

        const name =
        row.dimensionValues?.[0]?.value ?? "Unknown product";

        const views =
        Number(row.metricValues?.[0]?.value ?? 0);

        const addToCarts = 
        Number(row.metricValues?.[1]?.value ?? 0);

        const purchases = 
        Number(row.metricValues?.[2]?.value ?? 0);

        return {
        name,
        views,
        addToCarts,
        purchases
        }

    });

    console.log(
        "Clean product events:",
        productEvents
    );
     
    return productEvents ?? [];
    

}