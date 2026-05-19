export default function SkillsModal() {

  return (

    <div className="bg-black/70 backdrop-blur-md rounded-3xl p-8 w-[500px]">

      <h2 className="text-white text-4xl font-bold mb-6">
        Skills
      </h2>

      <div className="space-y-4">

        <div>
          <p className="text-white mb-1">React</p>

          <div className="h-4 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full w-[90%] bg-green-400 rounded-full" />
          </div>
        </div>

      </div>

    </div>

  );

}