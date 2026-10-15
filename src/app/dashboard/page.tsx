import TopNav from "./components/TopNav";

export default function DashboardPage() {
    return (
        <section className="text-white px-[32px]">
            <TopNav />
            <div className="py-[56px]">
                 <span className="text-[#8CEEEE] text-[25px]">Welcome to</span>
                    <h1 className="text-[40px]">Developer <span className="text-[#2B77F2]">Lab</span></h1>
                    <p className="text-[17px] text-[#374151] md:w-[473px]">A workplace for personal projects, experiments, tutorials and ecommerce tools. Build, learn and explore</p>
            </div>
        </section>
    );
}

