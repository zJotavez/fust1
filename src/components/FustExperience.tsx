import { motion } from "motion/react";
import { LocaleContent } from "../data/welcome-content";
import HorizontalLoop from "./HorizontalLoop";

interface FustExperienceProps {
  content: LocaleContent;
}

export default function FustExperience({ content }: FustExperienceProps) {
  // Localized marquee texts helpers
  const getTopMarqueeTexts = () => {
    if (content.experience.chapter.includes("DISCOVER")) {
      return ["Knowledge", "Purpose", "Transformation", "FUST University"];
    } else if (content.experience.chapter.includes("DESCUBRIMIENTO")) {
      return ["Conocimiento", "Propósito", "Transformación", "FUST University"];
    }
    return ["Conhecimento", "Propósito", "Transformação", "FUST University"];
  };

  const getBottomMarqueeTexts = () => {
    if (content.experience.chapter.includes("DISCOVER")) {
      return ["Education without borders", "Science", "Faith", "Wisdom"];
    } else if (content.experience.chapter.includes("DESCUBRIMIENTO")) {
      return ["Educación sin fronteras", "Ciencia", "Fe", "Sabiduría"];
    }
    return ["Educação sem fronteiras", "Ciência", "Fé", "Sabedoria"];
  };

  // We can vary the styles of the cards to create a premium asymmetric layout with high contrast
  const getCardStyles = (index: number) => {
    switch (index) {
      case 0: // Highlighted Card (Deep FUST Blue background, Burgundy border accent)
        return "bg-fust-blue text-white border-t-4 border-fust-burgundy shadow-xl lg:-translate-y-4";
      case 1: // Secondary Card (White background, thin gold border)
        return "bg-white text-fust-blue border border-fust-gold/25 shadow-md hover:border-fust-burgundy";
      case 2: // Neutral Card (Soft cream background, thin gold border)
        return "bg-[#FAF9F5] text-fust-blue border border-fust-gold/20 shadow-sm hover:border-fust-burgundy";
      default:
        return "bg-white text-fust-blue border border-fust-gold/20";
    }
  };

  const getPillarLabelColor = (index: number) => {
    return index === 0 ? "text-fust-gold" : "text-fust-burgundy";
  };

  const getDescriptionColor = (index: number) => {
    return index === 0 ? "text-white/80" : "text-fust-slate";
  };

  const getLineColor = (index: number) => {
    return index === 0 ? "bg-fust-gold" : "bg-fust-burgundy/50";
  };

  return (
    <section className="relative w-full bg-fust-cream overflow-hidden border-b border-fust-gold/15">
      {/* Background dots pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-50 pointer-events-none" />

      {/* Top infinite marquee loop banner (Burgundy Pop!) */}
      <HorizontalLoop texts={getTopMarqueeTexts()} variant="burgundy" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 py-20 sm:py-24">
        {/* Editorial Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-xs tracking-[0.2em] text-fust-burgundy block font-bold uppercase font-sans">
            {content.experience.eyebrow}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-fust-blue leading-tight">
            {content.experience.title}
          </h2>
          <div className="w-20 h-[1.5px] bg-fust-burgundy/60 mx-auto mt-4" />
        </div>

        {/* Pillars Grid - Asymmetric Layout with varying visual weights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-6">
          {content.experience.pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: index * 0.2, ease: "easeOut" }}
              className={`p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 ease-in-out ${getCardStyles(index)} min-h-[380px]`}
            >
              <div className="space-y-6">
                {/* Pillar Roman Numeral Indicator */}
                <span className={`font-serif text-5xl font-light block select-none tracking-wider ${getPillarLabelColor(index)}`}>
                  {pillar.number}
                </span>

                {/* Pillar Title */}
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight leading-snug">
                  {pillar.title}
                </h3>

                {/* Dynamic Divider Line */}
                <div className={`w-8 h-[1.5px] group-hover:w-16 transition-all duration-500 ${getLineColor(index)}`} />

                {/* Pillar Description */}
                <p className={`text-sm sm:text-base font-light leading-relaxed ${getDescriptionColor(index)}`}>
                  {pillar.description}
                </p>
              </div>

              {/* Decorative detail indicator */}
              <div className="mt-8 flex items-center space-x-2 select-none opacity-60">
                <span className={`text-[9px] tracking-[0.2em] font-mono font-bold uppercase ${index === 0 ? "text-fust-gold-light" : "text-fust-slate"}`}>
                  FUST MISSION
                </span>
                <span className={`w-6 h-[1px] ${index === 0 ? "bg-fust-gold" : "bg-fust-gold/40"}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom infinite marquee loop banner (Blue Pop!) */}
      <HorizontalLoop texts={getBottomMarqueeTexts()} variant="blue" />
    </section>
  );
}
