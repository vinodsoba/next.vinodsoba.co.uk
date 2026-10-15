import { 
    getBeautyBopOverview,
    getBeautyBopProducts,
    getBeautyBopPurchaseEvents,
    getBeautyBopProductEvents,
} from "@/lib/googleAnalytics";

export async function GET() {
    
    const { activeUsers, sessions, orders, revenue, keyEvents, checkouts } = await getBeautyBopOverview("today", "today", "yesterday", "yesterday");

    await getBeautyBopProducts(
         "2026-10-01",
        "today"
    );

    const productEvents = await getBeautyBopProductEvents(
        "2026-10-01",
        "today"
    );

    console.log("About to test product events");


    await getBeautyBopPurchaseEvents();

    

    return Response.json({
        success: true,
        activeUsers,
        sessions,
        orders,
        revenue,
        keyEvents,
        checkouts,
    });

    
}