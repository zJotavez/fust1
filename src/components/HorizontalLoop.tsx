interface HorizontalLoopProps {
  texts: string[];
  variant?: "blue" | "burgundy" | "cream";
}

export default function HorizontalLoop({ texts, variant = "blue" }: HorizontalLoopProps) {
  const contentString = texts.join("   •   ") + "   •   ";

  const getVariantStyles = () => {
    switch (variant) {
      case "burgundy":
        return "bg-fust-burgundy text-fust-gold-light border-y border-fust-gold/20";
      case "cream":
        return "bg-[#FAF9F5] text-fust-blue border-y border-fust-gold/25";
      case "blue":
      default:
        return "bg-fust-blue text-fust-gold-light border-y border-fust-gold/20";
    }
  };

  return (
    <div className={`w-full overflow-hidden py-3 select-none pointer-events-none relative z-10 ${getVariantStyles()}`}>
      <div className="flex w-max animate-marquee uppercase tracking-[0.25em] text-[10px] font-mono whitespace-nowrap">
        {/* Render multiple copies to ensure seamless loop without gaps */}
        <span className="pr-4">{contentString}</span>
        <span className="pr-4">{contentString}</span>
        <span className="pr-4">{contentString}</span>
        <span className="pr-4">{contentString}</span>
      </div>
    </div>
  );
}
