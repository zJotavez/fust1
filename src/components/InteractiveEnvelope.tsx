import { useEffect, useRef } from "react";
import { RotateCcw, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { LocaleContent } from "../data/welcome-content";
import { LetterState } from "../types";
import HorizontalLoop from "./HorizontalLoop";

interface InteractiveEnvelopeProps {
  content: LocaleContent;
  onReadComplete: () => void;
  letterState: LetterState;
  setLetterState: (state: LetterState) => void;
  currentLang: "pt" | "en" | "es";
}

export default function InteractiveEnvelope({
  content,
  onReadComplete,
  letterState,
  setLetterState,
  currentLang,
}: InteractiveEnvelopeProps) {
  const envelopeRef = useRef<HTMLDivElement>(null);

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        if (letterState === "closed") {
          e.preventDefault();
          handleOpenSequence();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [letterState]);

  const handleOpenSequence = () => {
    if (letterState !== "closed") return;

    setLetterState("focus");

    setTimeout(() => {
      setLetterState("opened");
      onReadComplete();
    }, 600);
  };

  const resetSequence = () => {
    setLetterState("closed");
  };

  // Localized envelope loop text helpers
  const getTopLoopTexts = () => {
    if (currentLang === "en") return ["WELCOME TO FUST UNIVERSITY", "YOUR ACADEMIC JOURNEY BEGINS HERE", "EXCELLENCE • FAITH • SCIENCE"];
    if (currentLang === "es") return ["BIENVENIDO A LA UNIVERSIDAD FUST", "SU VIAJE ACADÉMICO COMIENZA AQUÍ", "EXCELENCIA • FE • CIENCIA"];
    return ["BEM-VINDO À FUST UNIVERSITY", "SUA JORNADA ACADÊMICA COMEÇA AQUI", "EXCELÊNCIA • FÉ • CIÊNCIA"];
  };

  const getBottomLoopTexts = () => {
    if (currentLang === "en") return ["FLORIDA UNIVERSITY OF SCIENCE AND THEOLOGY", "GLOBAL EDUCATION WITHOUT BORDERS", "SHAPING FUTURE LEADERS"];
    if (currentLang === "es") return ["FLORIDA UNIVERSITY OF SCIENCE AND THEOLOGY", "EDUCACIÓN GLOBAL SIN FRONTERAS", "FORMANDO LÍDERES DEL MAÑANA"];
    return ["FLORIDA UNIVERSITY OF SCIENCE AND THEOLOGY", "EDUCAÇÃO GLOBAL SEM FRONTEIRAS", "FORMANDO LÍDERES DO AMANHÃ"];
  };

  const getSaveLetterLabel = () => {
    if (currentLang === "en") return "Close Letter";
    if (currentLang === "es") return "Cerrar Carta";
    return "Fechar Carta";
  };

  return (
    <section
      id="envelope-ceremony"
      className="relative w-full bg-black overflow-hidden border-b border-fust-gold/15"
    >
      {/* Top infinite marquee loop (Strong Burgundy backdrop) */}
      <HorizontalLoop texts={getTopLoopTexts()} variant="burgundy" />

      {/* Main content wrapper - Reduced spacing (py-12 sm:py-16) with black background */}
      <div className="relative py-12 sm:py-16 px-6 flex flex-col items-center justify-center z-10 w-full min-h-[380px] bg-black">
        
        {/* Background mesh grid */}
        <div className="absolute inset-0 bg-academic-grid opacity-[0.08] z-0 pointer-events-none" />

        {/* Background Dim / Overlay when envelope is active */}
        <AnimatePresence>
          {letterState !== "closed" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.95 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-fust-deep z-20 pointer-events-none transition-all duration-500"
            />
          )}
        </AnimatePresence>

        {/* Helper Instructions overlay when closed */}
        {letterState === "closed" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-4 z-30 text-center pointer-events-none select-none"
          >
            <span className="text-[9px] tracking-[0.25em] text-fust-gold font-mono font-bold uppercase animate-pulse">
              {content.envelope.clickToOpen}
            </span>
          </motion.div>
        )}

        {/* Closed Envelope view (floating envelope over dark black background) */}
        <div className="relative z-30 w-full max-w-[440px] flex items-center justify-center mt-6">
          <div
            onClick={handleOpenSequence}
            className={`relative w-full aspect-[440/290] cursor-pointer overflow-hidden rounded-xl border border-fust-gold/20 shadow-[0_20px_50px_rgba(0,0,0,0.85)] hover:-translate-y-4 hover:scale-[1.03] hover:shadow-[0_35px_65px_rgba(0,0,0,0.98)] transition-all duration-500 ease-in-out ${
              letterState === "closed"
                ? ""
                : "opacity-0 scale-95"
            }`}
            tabIndex={0}
            aria-label="Welcome envelope, click to open"
          >
            <img 
              src="/envelope-bg.png" 
              alt="FUST Welcome Envelope Seal" 
              className="w-full h-full object-cover select-none"
            />
            {/* Subtle vintage hover tint */}
            <div className="absolute inset-0 bg-black/[0.04] hover:bg-black/0 transition-colors duration-300" />
          </div>
        </div>
      </div>

      {/* FULL-SCREEN IMMERSIVE READING MODAL (magical transition) */}
      <AnimatePresence>
        {letterState === "opened" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-fust-deep/92 backdrop-blur-md flex items-center justify-center p-4 md:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.94, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.94, y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 90 }}
              className="relative w-full max-w-3xl bg-[#FCFAF7] rounded-xl shadow-2xl border border-fust-gold/30 p-6 sm:p-12 text-fust-blue flex flex-col justify-between overflow-y-auto max-h-[90vh]"
            >
              {/* Top-Right Absolute Close "X" Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  resetSequence();
                }}
                className="absolute top-4 right-4 p-2 rounded-full border border-fust-gold/25 hover:border-fust-gold text-fust-blue hover:bg-fust-gold/5 transition-all duration-300 z-50 cursor-pointer"
                aria-label="Close letter"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Subtle paper layout lines background */}
              <div className="absolute inset-0 bg-[radial-gradient(#B8934E_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

              {/* Premium Official Letterhead */}
              <div className="text-center space-y-3 relative pb-5 border-b border-fust-gold/25 select-none pr-8">
                <div className="w-14 h-14 rounded-full border border-fust-gold/30 flex items-center justify-center bg-white mx-auto overflow-hidden p-0.5">
                  <img src="/logo-crest.png" alt="FUST Crest" className="w-full h-full object-contain" />
                </div>
                <div className="flex justify-between items-end text-[9px] font-mono tracking-widest text-fust-gold uppercase font-bold w-full px-2">
                  <span>FUST UNIVERSITY</span>
                  <span>2026</span>
                </div>
                <h4 className="text-[10px] tracking-[0.25em] font-semibold text-fust-blue font-sans uppercase block text-center">
                  FLORIDA UNIVERSITY OF SCIENCE AND THEOLOGY
                </h4>
                <div className="text-[8px] text-fust-slate tracking-[0.1em] font-mono uppercase font-semibold">
                  Office of Admissions • Florida, USA
                </div>
              </div>

              {/* Letter Main Content Body */}
              <div className="my-8 space-y-4 text-xs sm:text-sm font-sans font-light leading-relaxed max-w-xl mx-auto text-fust-slate">
                {/* Salutation */}
                <p className="font-serif text-sm sm:text-base font-semibold text-fust-blue mb-4">
                  {content.letter.salutationDefault}
                </p>

                {/* Standard Paragraphs */}
                {content.letter.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-justify">{p}</p>
                ))}

                {/* Deep Welcome Highlight */}
                <p className="font-serif text-base sm:text-lg font-bold text-fust-gold text-center pt-4">
                  {content.letter.welcomePhrase}
                </p>
              </div>

              {/* Bottom Close Button wrapper */}
              <div className="mt-4 pt-5 border-t border-fust-gold/20 flex justify-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    resetSequence();
                  }}
                  className="flex items-center space-x-2 px-5 py-2 rounded-full border border-fust-gold/45 hover:border-fust-gold text-[9px] uppercase tracking-wider font-bold text-fust-gold hover:bg-fust-gold/5 transition-all duration-300 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>{getSaveLetterLabel()}</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom infinite marquee loop (Strong Blue backdrop) */}
      <HorizontalLoop texts={getBottomLoopTexts()} variant="blue" />
    </section>
  );
}
