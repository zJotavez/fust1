import { CheckCircle2, ArrowUpRight, BookOpen, Calendar, Mail } from "lucide-react";
import { motion } from "motion/react";
import { LocaleContent } from "../data/welcome-content";

interface FirstStepsProps {
  content: LocaleContent;
}

export default function FirstSteps({ content }: FirstStepsProps) {
  // Map icons to index
  const stepIcons = [
    <BookOpen className="w-4 h-4 text-fust-gold" />,
    <Calendar className="w-4 h-4 text-fust-gold" />,
    <Mail className="w-4 h-4 text-fust-gold" />,
  ];

  return (
    <section id="first-steps" className="relative py-28 sm:py-36 bg-fust-deep overflow-hidden">
      {/* Background Video Player */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover filter brightness-[0.4] saturate-[0.7]"
        >
          <source src="/Videos/Video 2.mp4" type="video/mp4" />
        </video>
        
        {/* Dark overlay for maximum readability of glassmorphic cards */}
        <div className="absolute inset-0 bg-gradient-to-b from-fust-deep/95 via-fust-deep/80 to-fust-deep z-10" />
        
        {/* Blueprint grid overlay */}
        <div className="absolute inset-0 bg-academic-grid opacity-[0.1] z-15" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-20">
        {/* Section Header */}
        <div className="text-center mb-24 space-y-3">
          <span className="text-[10px] tracking-[0.25em] text-fust-gold font-mono font-bold block uppercase">
            NEXT STEPS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
            {content.steps.title}
          </h2>
          <p className="text-sm sm:text-base text-white/70 max-w-md mx-auto font-light leading-relaxed">
            {content.steps.subtitle}
          </p>
          <div className="w-16 h-[1px] bg-fust-gold/40 mx-auto mt-6" />
        </div>

        {/* Timeline Path (Modern, clean, glassmorphic cards) */}
        <div className="relative border-l border-fust-gold/25 ml-5 sm:ml-7 space-y-12">
          {content.steps.items.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative pl-10 sm:pl-14 group"
            >
              {/* Bullet node on timeline (minimalist square node) */}
              <div className="absolute left-[-21px] top-1.5 w-10 h-10 border border-fust-gold/30 bg-fust-deep flex items-center justify-center z-10 shadow-lg group-hover:border-fust-gold transition-all duration-500 select-none">
                <span className="group-hover:hidden transition-opacity duration-300">{stepIcons[index]}</span>
                <CheckCircle2 className="w-4 h-4 text-fust-gold-light hidden group-hover:block transition-all duration-300" />
              </div>

              {/* Glassmorphic Card panel */}
              <div className="bg-white/[0.04] backdrop-blur-md border border-white/10 p-6 sm:p-8 shadow-2xl hover:bg-white/[0.08] hover:border-fust-gold/40 transition-all duration-500 rounded-lg space-y-3">
                <span className="font-mono text-[9px] tracking-widest text-fust-gold font-bold block">
                  {step.number} • ACTIONABLE GUIDE
                </span>

                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white leading-tight tracking-tight group-hover:text-fust-gold-light transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed max-w-2xl">
                  {step.description}
                </p>

                {/* Elegant action button link */}
                <div className="pt-3">
                  <a
                    href={step.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-[10px] font-bold uppercase tracking-wider text-fust-gold-light border-b border-fust-gold/35 hover:border-white pb-1 transition-all duration-300 cursor-pointer"
                  >
                    <span>{step.buttonText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 text-fust-gold" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
