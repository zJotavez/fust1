import { ArrowRight, ChevronDown, Volume2, VolumeX } from "lucide-react";
import { motion } from "motion/react";
import { useState, useRef } from "react";
import { LocaleContent } from "../data/welcome-content";

interface WelcomeHeroProps {
  content: LocaleContent;
  onNextSection: () => void;
}

export default function WelcomeHero({ content, onNextSection }: WelcomeHeroProps) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      const nextMuted = !isMuted;
      setIsMuted(nextMuted);
      videoRef.current.muted = nextMuted;
      if (!nextMuted) {
        // Restart video from beginning when unmuted to hear the full message
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    }
  };

  return (
    <section className="relative w-full min-h-screen pt-28 pb-20 flex items-center overflow-hidden bg-fust-deep">
      {/* Background Video Player */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover filter brightness-[0.7] saturate-[0.8]"
        >
          <source src="/Videos/Video 1.mp4" type="video/mp4" />
        </video>
        
        {/* Left-side dark gradient overlay for text readability */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[65%] bg-gradient-to-r from-fust-deep via-fust-deep/90 to-transparent z-10" />
        
        {/* Right-side subtle vignette to blend the video */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-fust-deep/50 z-10" />
        
        {/* Editorial Blueprint Grid (overlayed on top of video) */}
        <div className="absolute inset-0 bg-academic-grid opacity-[0.15] z-15" />
      </div>

      {/* Decorative coordinate lines (Science/Theology/Theology alignment) */}
      <div className="absolute inset-0 z-15 pointer-events-none select-none">
        {/* Horizontal axis grid line */}
        <div className="absolute top-[35%] left-0 w-full h-[1px] bg-fust-gold/15" />
        {/* Vertical alignment line */}
        <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-fust-gold/15" />
        <div className="absolute left-[58%] top-0 bottom-0 w-[1px] bg-fust-gold/15 hidden lg:block" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side: Dark-overlay text block (light typography for extreme contrast) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          {/* Eyebrow / Institution Tag */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start space-y-1.5"
          >
            <span className="text-[10px] sm:text-[11px] tracking-[0.35em] text-fust-gold font-bold uppercase block font-mono text-glow">
              {content.hero.eyebrow}
            </span>
            <div className="w-16 h-[1.5px] bg-fust-gold/60" />
          </motion.div>

          {/* Editorial serif title (White for absolute readability over dark background overlay) */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.15] font-semibold tracking-tight max-w-2xl"
          >
            {content.hero.title}
          </motion.h1>

          {/* Descriptive intro */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-base sm:text-lg text-white/80 max-w-xl font-light leading-relaxed"
          >
            {content.hero.subtitle}
          </motion.p>

          {/* Action Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-4"
          >
            <a
              href="https://educacional.usecerbrum.net/inicio.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-fust-gold text-fust-deep font-bold tracking-wider text-[10px] uppercase hover:bg-fust-gold-light transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 flex items-center space-x-3 overflow-hidden cursor-pointer"
            >
              {/* Subtle shimmer effect */}
              <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
              <span>{content.hero.button}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300 text-fust-deep" />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Campus Image Floating Over Video */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="relative max-w-sm w-full"
          >
            {/* Elegant double-line offset border */}
            <div className="absolute -inset-3 border border-fust-gold/30 -z-10 translate-x-1.5 translate-y-1.5" />
            
            {/* Video frame */}
            <div 
              className="relative aspect-[3/4] border border-fust-gold/45 bg-fust-deep overflow-hidden shadow-2xl cursor-pointer group"
              onClick={handleVideoClick}
            >
              <video
                ref={videoRef}
                src="/pr-nilson.mp4"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay button to indicate click-to-listen */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                {isMuted ? (
                  <div className="flex flex-col items-center bg-black/60 text-white px-4 py-2 rounded-full backdrop-blur-md shadow-lg transform group-hover:scale-110 transition-transform">
                    <VolumeX className="w-5 h-5 mb-1 text-fust-gold" />
                    <span className="text-[10px] font-bold tracking-wider uppercase">Clique para ouvir</span>
                  </div>
                ) : (
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center bg-black/60 text-white px-4 py-2 rounded-full backdrop-blur-md shadow-lg">
                    <Volume2 className="w-5 h-5 mb-1 text-fust-gold" />
                    <span className="text-[10px] font-bold tracking-wider uppercase">Mutar</span>
                  </div>
                )}
              </div>
            </div>
            
            {/* Architectural caption */}
            <div className="mt-3 flex justify-between items-center text-[9px] font-mono text-fust-gold-light/85 tracking-widest uppercase">
              <span>FUST Campus</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating scroll indicator */}
      <div className="absolute bottom-6 left-0 w-full flex justify-center z-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col items-center space-y-1.5 cursor-pointer"
          onClick={onNextSection}
        >
          <span className="text-[9px] tracking-[0.2em] text-white/60 font-mono uppercase font-semibold">
            {content.hero.scrollIndicator}
          </span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-3.5 h-3.5 text-fust-gold" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
