export default function TimelineCard({ item }) {
  if (!item) return null;

  return (
    <div className="absoloute flex align-center justify-center w-80 z-[9999] ">
      <div className="bg-black/90 backdrop-blur-md text-white rounded-2xl p-4 shadow-xl transition-all duration-300">
        <h3 className="text-lg font-bold">{item.title}</h3>
        <p className="text-sm opacity-70">{item.subtitle}</p>

        <p className="mt-2 text-sm leading-relaxed">
          {item.description}
        </p>

        <button className="mt-3 text-xs underline opacity-70">
          View more
        </button>
      </div>
    </div>
  );
}