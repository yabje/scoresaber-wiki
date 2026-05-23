import Image from "next/image";

export function BrandTitle() {
  return (
    <span className="brand-title">
      <Image src="/scoresaber.svg" width={24} height={24} alt="" priority />
      <span className="brand-word">ScoreSaber</span>
      <span className="brand-suffix">Wiki</span>
    </span>
  );
}
