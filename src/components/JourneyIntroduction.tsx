import { motion } from "motion/react";
import { LocaleContent } from "../data/welcome-content";

interface JourneyIntroductionProps {
  content: LocaleContent;
}

export default function JourneyIntroduction({ content }: JourneyIntroductionProps) {
  // Stagger variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Localized quote helper
  const getQuoteText = () => {
    if (content.journey.chapter.includes("BEGIN")) {
      return "Knowledge transforms what we know. Education transforms who we are.";
    } else if (content.journey.chapter.includes("COMIENZO")) {
      return "El conocimiento transforma lo que sabemos. La educación transforma quiénes somos.";
    }
    return "O conhecimento transforma aquilo que sabemos. A educação transforma quem somos.";
  };

  return (
    <section className="relative py-28 sm:py-36 bg-fust-cream overflow-hidden border-b border-fust-gold/15">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Text & Impact Quote (With giant watermark text "FUST" behind it) */}
        <div className="lg:col-span-7 relative flex flex-col justify-center space-y-8 min-h-[400px]">
          {/* Giant, elegant background watermark "FUST" (discreto, opacidade muito baixa, atrás do texto) */}
          <div className="absolute left-[-5%] top-[5%] text-[180px] sm:text-[280px] md:text-[340px] font-serif font-extrabold text-fust-blue/[0.04] select-none pointer-events-none z-0 leading-none">
            FUST
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-6 relative z-10"
          >
            {/* Title & Eyebrow (Removed step numbers/chapters) */}
            <div className="space-y-3">
              <span className="text-xs tracking-[0.2em] text-fust-burgundy block font-bold uppercase font-sans">
                {content.journey.eyebrow}
              </span>
              <motion.h2
                variants={itemVariants}
                className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-fust-blue leading-[1.15]"
              >
                {content.journey.title}
              </motion.h2>
            </div>

            {/* Paragraph 1 */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-fust-slate font-light leading-relaxed max-w-xl"
            >
              {content.journey.paragraph1}
            </motion.p>

            {/* Premium Burgundy Quote Block (Impact Quote with solid Burgundy card style) */}
            <motion.div
              variants={itemVariants}
              className="py-6 px-6 border-l-4 border-fust-gold bg-fust-burgundy text-white max-w-xl space-y-2 my-8 shadow-md rounded-r-md"
            >
              <blockquote className="font-serif text-xl sm:text-2xl text-white italic leading-snug">
                “{getQuoteText()}”
              </blockquote>
            </motion.div>

            {/* Paragraph 2 */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-fust-slate/85 font-light leading-relaxed max-w-xl"
            >
              {content.journey.paragraph2}
            </motion.p>
          </motion.div>
        </div>

        {/* Right Column: Editorial Framed Image & Structured Badges */}
        <div className="lg:col-span-5 flex flex-col space-y-8 items-center lg:items-end relative z-10">
          {/* Framed Image */}
          <div className="relative w-full max-w-[340px]">
            {/* Double border container */}
            <div className="absolute -inset-2 border border-fust-gold/20 -z-10 translate-x-1.5 translate-y-1.5" />
            <div className="relative aspect-[4/5] border border-fust-gold/30 bg-white overflow-hidden shadow-xl">
              <img
                src="/home-map.png"
                alt="Academic research and workspace"
                className="w-full h-full object-cover filter brightness-[0.98] contrast-101 select-none"
              />
              <div className="absolute inset-0 bg-fust-blue/5 mix-blend-multiply pointer-events-none" />
            </div>
          </div>

          {/* Academic Pillars Metadata List (Burgundy and gold branding accents) */}
          <div className="w-full max-w-[340px] space-y-4 pt-2">
            <span className="text-[9px] font-mono tracking-widest text-fust-burgundy uppercase font-bold block mb-1">
              ACADEMIC MISSION
            </span>
            <div className="h-[1px] bg-fust-gold/30 w-full" />
            <div className="grid grid-cols-2 gap-4">
              {content.journey.words.map((word, idx) => (
                <div key={word} className="flex items-center space-x-2.5">
                  <span className="font-mono text-[10px] text-fust-burgundy font-bold">
                    0{idx + 1}
                  </span>
                  <span className="font-sans text-xs text-fust-blue tracking-wide uppercase font-semibold">
                    {word}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
