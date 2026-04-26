import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">

      {/* ICON */}
      <Image
        src="/images/vinod-white-feet-logo.png" // your file
        alt="Vinod Soba logo"
        width={28}
        height={28}
        className="object-contain"
        priority
      />

      {/* TEXT */}
      <span className="text-white text-4xl font-medium tracking-wide font-[var(--font-manrope)] font-medium tracking-[0.06em]">
        Vinod Soba
      </span>

    </div>
  );
}