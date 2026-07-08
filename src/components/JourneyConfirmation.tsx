import { RotateCcw, Compass } from "lucide-react";
import { motion } from "motion/react";
import { LocaleContent } from "../data/welcome-content";

interface JourneyConfirmationProps {
  content: LocaleContent;
  onReopenLetter: () => void;
  onNextSteps: () => void;
  show: boolean;
}

export default function JourneyConfirmation({
  content,
  onReopenLetter,
  onNextSteps,
  show,
}: JourneyConfirmationProps) {
  if (!show) return null;

  return (
    <section className="relative py-28 bg-fust-cream overflow-hidden border-b border-fust-gold/15 text-center flex flex-col items-center">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-fust-gold/5 via-transparent to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-xl mx-auto px-6 space-y-6 relative z-10"
      >
        {/* Compass node (editorial detail) with Burgundy border */}
        <div className="w-10 h-10 border border-fust-burgundy/30 bg-[#FAF9F5] flex items-center justify-center mx-auto text-fust-burgundy select-none shadow-sm">
          <Compass className="w-5 h-5" />
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-fust-blue leading-tight">
          {content.postLetter.title}
        </h2>

        <p className="text-base text-fust-slate font-light max-w-md mx-auto leading-relaxed">
          {content.postLetter.subtitle}
        </p>

        {/* Buttons (Burgundy color accent) */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Proceed button (Burgundy background!) */}
          <button
            onClick={onNextSteps}
            className="w-full sm:w-auto px-8 py-4 bg-fust-burgundy text-fust-cream hover:bg-fust-burgundy/95 transition-all duration-300 font-bold tracking-wider text-[10px] uppercase shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center cursor-pointer border border-fust-burgundy"
          >
            <span>{content.postLetter.btnContinue}</span>
          </button>

          {/* Re-open letter button */}
          <button
            onClick={onReopenLetter}
            className="w-full sm:w-auto px-6 py-4 border border-fust-gold/30 hover:border-fust-gold hover:bg-fust-gold/5 text-fust-blue transition-all duration-300 text-[10px] font-bold tracking-wider uppercase flex items-center justify-center space-x-2 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-fust-gold" />
            <span>{content.postLetter.btnReopen}</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
}
