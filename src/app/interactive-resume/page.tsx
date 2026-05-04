"use client";

import Player from "@/components/player/Player";
import GameInstructions from "@/components/gameinstructions/GameInstructions";
import EducationCheckpoint from "@/components/educationcheckpoint/EducationCheckpoint";
import TimelineCard from "@/components/timelinecard/TimelineCard"
import { useState, useRef, useEffect } from "react";


type Platform = {
  x: number;
  y: number;
  width: number;
  height: number;
};


const platforms: Platform[] = [
   { x: 1400, y: 180, width: 260, height: 32, },
   { x: 1400, y: 180, width: 260, height: 32, },
];


type TimelineItem = {
  x: number;
  title: string;
  subtitle: string;
  description: string;
};

export default function ResumeGamePage() {

  const [cameraY, setCameraY] = useState(0);
  const worldRef = useRef<HTMLDivElement | null>(null);

  const [activeTimeline, setActiveTimeline] = useState<TimelineItem | null>(null);
  const controlsRef = useRef(new Set());
  const [skyProgress, setSkyProgress] = useState(0);
  const [hasDropped, setHasDropped] = useState(false);
  
  const START_OFFSET = 300; 
  const cameraXRef = useRef(Math.max(0, 10 - START_OFFSET));

  useEffect(() => {
    let raf: number;

    const render = () => {
      if (worldRef.current) {
        worldRef.current.style.transform = `
          translate(${-cameraXRef.current}px, ${cameraY}px)
        `;
      }

      raf = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(raf);
  }, [cameraY]);

  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      {/* MOVING WORLD / BACKGROUND */}
      <div 
      ref={worldRef} className="absolute left-0 inset-0 will-change-transform">
        {/* Night gradient background */}
        <div 
        className="absolute inset-0 w-[3000px]"
        style={{
    background: `linear-gradient(
      to bottom,
      rgba(${0 + skyProgress * 110}, ${0 + skyProgress * 198}, ${0 + skyProgress * 255}, 1),
      rgba(${6 + skyProgress * 174}, ${34 + skyProgress * 200}, ${58 + skyProgress * 255}, 1),
      rgba(${13 + skyProgress * 240}, ${32 + skyProgress * 223}, ${109 + skyProgress * 236}, 1)
    )`,
    transition: "background 0.2s linear",
  }}
        />

        {/* Stars */}
        <div
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: "url('/images/bg-stars.png')",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Fog */}
        <div
          className="absolute z-10 opacity-60"
          style={{
            left: 100,
            bottom: 80,
            width: 600,
            height: 300,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundImage: "url('/images/fog2.png')",
          }}
        />

        {activeTimeline && (
        <div
          className="absolute z-10 "
          style={{
            left: activeTimeline.x,
            bottom: 280,
            transform: "translateX(-50%)",
            opacity: 0.9,
            filter: "blur(0.5px)"
          }}
        >
          <TimelineCard item={activeTimeline} />
        </div>
        )}

        <div
        className="absolute bottom-16 left-0 w-[1000px] h-[300px] z-0 pointer-events-none"
        style={{
          transform: `translateX(-${cameraXRef.current * 0.4}px)`, // parallax
        }}
      >
        {/* shard */}
        <div
        className="absolute"
        style={{
          left: 1200,
          bottom: 0,
          width: 120,
          height: 300,
          clipPath: "polygon(50% 0%, 60% 100%, 40% 100%)",
          background: "linear-gradient(to top, #0f172a, #1e293b)",
          boxShadow: "0 0 40px rgba(148,163,184,0.15)",
        }}
      />

      

      {/* Guerkin */}
      <div
        className="absolute bg-slate-900"
        style={{
          left: 1400,
          bottom: 0,
          width: 100,
          height: 220,
          borderRadius: "50% 50% 45% 45% / 60% 60% 40% 40%",
          opacity: 0.6,
        }}
        />
        <div className="absolute" style={{ left: 990, bottom: 37 }}>
  
        {/* ROTATING WRAPPER */}
        <div
          style={{
            width: 160,
            height: 160,
            animation: "spin 20s linear infinite",
          }}
        >
          {/* wheel */}
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              border: "3px solid rgba(59, 65, 75, 0.7)", // brighter
            }}
          />
        </div>

        {/* support leg (static) */}
        <div
          style={{
            position: "absolute",
            bottom: -20,
            left: "50%",
            width: 4,
            height: 80,
            background: "#364762",
            transform: "translateX(-50%) rotate(15deg)",
            transformOrigin: "bottom",
          }}
        />
      </div>
      </div>

      {/* Skyline */}
        <div
          className="absolute z-0 opacity-60"
          style={{
            left: 0,
            bottom: 105,
            width: 5000,
            height: 260,
            background:
              "linear-gradient(to top, rgba(15,23,42,0.95), rgba(30,41,59,0.65))",
            clipPath:
              "polygon(0% 100%, 0% 55%, 5% 55%, 5% 35%, 9% 35%, 9% 60%, 15% 60%, 15% 40%, 20% 40%, 20% 65%, 28% 65%, 28% 30%, 34% 30%, 34% 58%, 42% 58%, 42% 45%, 50% 45%, 50% 62%, 58% 62%, 58% 38%, 65% 38%, 65% 68%, 72% 68%, 72% 48%, 80% 48%, 80% 64%, 88% 64%, 88% 42%, 94% 42%, 94% 60%, 100% 60%, 100% 100%)",
          }}
        />

        {/* Moon */}
        <div
          className="absolute z-0 rounded-full bg-yellow-100 shadow-[0_0_60px_rgba(254,249,195,0.7)]"
          style={{
            left: 100,
            bottom: 230,
            width: 100,
            height: 100,
          }}
        />

        {/* Big Ben */}
        <div
          className="absolute z-0 opacity-30 bg-cover bg-center"
          style={{
            left: 170,
            bottom: 0, // ✅ anchor to ground
            width: 277,   // adjust to taste
            height: 417,  // scaled version of 711
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center bottom",
            backgroundImage: "url('/images/big-ben.png')",
          }}
        />

        {/* Lampost */}
        <div
          className="absolute z-0"
          style={{
            backgroundImage: "url('/images/lampost.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: 340,
            height: 800,
            transform: "scale(0.5)",
            transformOrigin: "bottom left",
            bottom: 100,
            left: 600,
          }}
        />

        <EducationCheckpoint />

        {/* Platforms */}
        {platforms.map((platform, index) => (
          <div
            key={index}
            className="absolute z-20"
            style={{
              left: platform.x,
              bottom: platform.y,
              width: platform.width,
              height: platform.height,
            }}
          >
            <div className="h-full w-full rounded-xl border-t border-[#b78a4a] bg-gradient-to-t from-[#4a2f12] to-[#8b5e2c] shadow-2xl" />
            <div className="mx-auto h-4 w-[90%] rounded-b-xl bg-[#3b2410]" />
          </div>
        ))}

        {/* Zig-zag  0 level */}
        <div
          className="absolute bottom-16 left-0 z-30 h-10 w-[3000px]"
          style={{
            backgroundImage: "url('/sprites/zig-zag.png')",
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 40px",
          }}
        />

        {/* Ground */}
        <div className="absolute bottom-0 h-16 w-[3000px] bg-gradient-to-t from-[#5a3e1b] to-[#7a5a2e]" />
      </div>

      <GameInstructions />
      
  
      
      <Player
        sprite="/sprites/vinny-slides.png"
        cameraXRef={cameraXRef}
        setCameraY={setCameraY}
        platforms={platforms as any}
        setActiveTimeline={setActiveTimeline}
        controlsRef={controlsRef}
        setSkyProgress={setSkyProgress}
        setHasDropped={setHasDropped}
      />
      console.log("ACTIVE TIMELINE:", activeTimeline);
       {/* MOBILE CONTROLS (ADD HERE) */}
      <div 
      style={{ paddingBottom: "env(safe-area-inset-bottom)"}}
      className="fixed bottom-[0px] left-0 w-full flex justify-between px-6 z-50">

        {/* LEFT */}
        <button
          onPointerDown={() => {
            controlsRef.current.add("left");
          }}
          onPointerUp={() => {
            controlsRef.current.delete("left");
          }}
          onPointerLeave={() => {
            controlsRef.current.delete("left");
          }}
          style={{ touchAction: "none" }}
          className="bg-white/20 text-white w-16 h-16 rounded-full"
        >
          ◀
        </button>

        {/* RIGHT */}
        <button
          onPointerDown={() => {
            controlsRef.current.add("right");
            console.log("ADD:", controlsRef.current);
          }}
          onPointerUp={() => {
            controlsRef.current.delete("right");
          }}
          onPointerLeave={() => {
            controlsRef.current.delete("right");
          }}
          style={{ touchAction: "none" }}
          className="z-50 border border-red-500 bg-white/20 text-white w-16 h-16 rounded-full"
        >
          ▶
        </button>

        {/* JUMP */}
        <button
          onPointerDown={() => {
            controlsRef.current.add("jump");
          }}
          onPointerUp={() => {
            controlsRef.current.delete("jump");
          }}
          onPointerLeave={() => {
            controlsRef.current.delete("jump");
          }}
          style={{ touchAction: "none" }}
          className="bg-blue-500/40 text-white w-16 h-16 rounded-full"
        >
          ⬆
        </button>

      </div>

      
    </main>

    
  );
}