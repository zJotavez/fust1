import { motion } from "motion/react";
import { LocaleContent } from "../data/welcome-content";

interface FinalManifestoProps {
  content: LocaleContent;
}

export default function FinalManifesto({ content }: FinalManifestoProps) {
  return (
    <section className="relative h-screen min-h-[580px] flex flex-col justify-center items-center text-center overflow-hidden bg-fust-deep text-fust-cream px-6">
      {/* Concentric Celestial/Scientific Orbit Lines */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none select-none flex items-center justify-center">
        <div className="absolute w-[320px] h-[320px] rounded-full border border-fust-gold/15" />
        <div className="absolute w-[560px] h-[560px] rounded-full border border-fust-gold/10" />
        <div className="absolute w-[800px] h-[800px] rounded-full border border-fust-gold/[0.04]" />
        
        {/* Fine crosshair axis */}
        <div className="absolute w-[1px] h-[900px] bg-fust-gold/[0.03]" />
        <div className="absolute h-[1px] w-[900px] bg-fust-gold/[0.03]" />
      </div>

      <div className="max-w-3xl mx-auto space-y-10 relative z-10">
        {/* Official FUST Crest Logo Stamp (replacing chapter numbers) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center space-y-4"
        >
          <div className="w-16 h-16 rounded-full border border-fust-gold/30 bg-white flex items-center justify-center shadow-lg p-0.5 overflow-hidden select-none">
            <img src="/logo-crest.png" alt="FUST Crest Stamp" className="w-full h-full object-contain" />
          </div>
          <div className="w-12 h-[1px] bg-fust-gold/40" />
        </motion.div>

        {/* Central Manifesto Header */}
        <div className="space-y-4">
          <div className="overflow-hidden py-1">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-tight max-w-2xl mx-auto"
            >
              {content.manifesto.title}
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.85 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xs sm:text-sm text-fust-gold-light font-mono tracking-widest uppercase font-bold"
          >
            {content.manifesto.subtitle}
          </motion.p>
        </div>

        {/* Fine line divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-16 h-[1.5px] bg-fust-gold mx-auto"
        />

        {/* Welcoming resolution */}
        <div className="space-y-2">
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-fust-gold text-glow"
          >
            {content.manifesto.welcomePhrase}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-[10px] sm:text-xs tracking-[0.25em] font-mono uppercase font-semibold text-white/80"
          >
            {content.manifesto.university}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
