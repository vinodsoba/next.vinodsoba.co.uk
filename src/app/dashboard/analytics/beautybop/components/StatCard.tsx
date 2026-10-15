type StatCardProps = {
    title: string;
    value: string;
    change: string;
    changeValue: number;

};

export default function StatCard({
    title,
    value,
    change,
    changeValue,
} : StatCardProps) {

    const changeColor = 
    changeValue > 0 
    ? "text-green-400"
    : changeValue < 0
    ? "text-red-400"
    : "text-gray-400";

     return (
        <div className="rounded-xl border border-gray-800 bg-[#111C24] p-5">

            <p className="text-sm text-gray-400">
                {title}
            </p>

            <p className="mt-2 text-2xl font-semibold text-white">
                {value}
            </p>

            <p className={`mt-2 text-sm ${changeColor}`}>
                {change}
            </p>

        </div>
    );

}