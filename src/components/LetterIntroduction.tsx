import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { LocaleContent } from "../data/welcome-content";
import HorizontalLoop from "./HorizontalLoop";

interface LetterIntroductionProps {
  content: LocaleContent;
  onFocusEnvelope: () => void;
  currentLang: "pt" | "en" | "es";
}

export default function LetterIntroduction({
  content,
  onFocusEnvelope,
  currentLang,
}: LetterIntroductionProps) {
  const getAnticipationLoopTexts = () => {
    if (currentLang === "en") return ["WELCOME TO FUST UNIVERSITY", "YOUR ADMISSIONS STATUS IS READY", "EXCELLENCE • SCIENCE • THEOLOGY"];
    if (currentLang === "es") return ["BIENVENIDO A LA UNIVERSIDAD FUST", "SU ESTADO DE ADMISIÓN ESTÁ LISTO", "EXCELENCIA • CIENCIA • TEOLOGÍA"];
    return ["BEM-VINDO À FUST UNIVERSITY", "SEU STATUS DE ADMISSÃO ESTÁ PRONTO", "EXCELÊNCIA • CIÊNCIA • TEOLOGIA"];
  };

  return (
    <section className="relative w-full bg-white overflow-hidden border-b border-fust-gold/15">
      {/* Top loop marquee banner (Blue style) */}
      <HorizontalLoop texts={getAnticipationLoopTexts()} variant="blue" />
      {/* Background Image backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <img
          src="/letter-intro-bg.jpg"
          alt=""
          className="w-full h-full object-cover filter brightness-[0.98] contrast-101"
        />
        {/* Subtle white vignette to blend content area */}
        <div className="absolute inset-0 bg-white/45 backdrop-blur-[0.5px]" />
      </div>

      {/* Delicate alignment axis line */}
      <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-fust-gold/15 pointer-events-none select-none z-1" />

      <div className="max-w-2xl mx-auto px-6 py-16 sm:py-20 relative z-10 space-y-8">
        {/* Step Marker (No stage numbers) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center space-y-2"
        >
          <span className="text-xs tracking-[0.2em] text-fust-burgundy block font-bold uppercase">
            {content.preparation.eyebrow}
          </span>
          <div className="w-10 h-[1.5px] bg-fust-gold/30 mt-3" />
        </motion.div>

        {/* Serif title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-fust-blue tracking-tight leading-tight max-w-xl mx-auto"
        >
          {content.preparation.title}
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base text-fust-slate font-light max-w-md mx-auto leading-relaxed"
        >
          {content.preparation.subtitle}
        </motion.p>

        {/* Scroll helper */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          onClick={onFocusEnvelope}
          className="pt-6 flex flex-col items-center space-y-3 cursor-pointer group"
        >
          <span className="text-[10px] tracking-[0.25em] text-fust-gold font-bold uppercase group-hover:text-fust-blue transition-colors duration-300">
            {content.preparation.instruction}
          </span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-8 h-8 rounded-full border border-fust-gold/25 flex items-center justify-center group-hover:border-fust-gold group-hover:bg-fust-gold/5 transition-colors duration-300"
          >
            <ChevronDown className="w-3.5 h-3.5 text-fust-gold" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
