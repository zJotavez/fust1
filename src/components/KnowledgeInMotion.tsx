import { motion } from "motion/react";
import React, { useState, useRef } from "react";
import { Volume2, VolumeX, Play } from "lucide-react";

interface KnowledgeInMotionProps {
  currentLang: "pt" | "en" | "es";
}

interface PuzzleItem {
  id: string;
  title: Record<string, string>;
  desc: Record<string, string>;
  gridClass: string;
  cardClass: string;
  bgImage?: string;
  bgVideo?: string;
}

export default function KnowledgeInMotion({ currentLang }: KnowledgeInMotionProps) {
  const lang = currentLang || "pt";

  const [playingVideos, setPlayingVideos] = useState<Record<string, boolean>>({});
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const handleVideoClick = (id: string, e?: React.MouseEvent) => {
    const isCurrentlyPlaying = playingVideos[id] ?? false;
    // If it's already playing, native controls handle clicks
    if (isCurrentlyPlaying) return;

    const videoEl = videoRefs.current[id];
    if (videoEl) {
      setPlayingVideos(prev => ({ ...prev, [id]: true }));
      videoEl.controls = true;
      videoEl.muted = false;
      videoEl.currentTime = 0;
      videoEl.play();
    }
  };

  const puzzleItems: PuzzleItem[] = [
    {
      id: "portal-tutorial",
      title: {
        pt: "Portal do Aluno",
        en: "Student Portal",
        es: "Portal del Estudiante",
      },
      desc: {
        pt: "Tutorial de acesso ao ambiente acadêmico.",
        en: "Access tutorial to the academic environment.",
        es: "Tutorial de acceso al entorno académico.",
      },
      gridClass: "col-span-2 md:col-span-12 row-span-2 md:row-span-2",
      cardClass: "text-white border border-fust-gold/40 p-4 sm:p-6 md:p-10 justify-between cursor-pointer",
      bgVideo: "/tutorial.mp4",
    }
  ];

  const sectionTitle = {
    pt: "O CONHECIMENTO NA FUST",
    en: "KNOWLEDGE AT FUST",
    es: "EL CONOCIMIENTO EN FUST",
  };

  return (
    <section className="relative w-full py-20 sm:py-28 bg-fust-deep overflow-hidden">
      {/* Background Video Player (Video 2 loop) */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover filter brightness-[0.75] saturate-[1.25]"
        >
          <source src="/Videos/Video 2.mp4" type="video/mp4" />
        </video>
        
        {/* Colorful gradient overlay to ensure card/text legibility with blue branding tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-fust-deep/75 via-fust-blue/20 to-fust-deep/85 z-10" />
        
        {/* Blueprint grid overlay */}
        <div className="absolute inset-0 bg-academic-grid opacity-[0.12] z-15" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20 space-y-3">
          <span className="text-[10px] tracking-[0.35em] text-fust-gold-light font-mono font-bold uppercase block">
            {sectionTitle[lang]}
          </span>
          <div className="w-12 h-[1px] bg-fust-gold/40 mx-auto mt-2" />
        </div>

        {/* Puzzle/Quebra-Cabeça Grid of Blocks */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-4 auto-rows-[140px] md:auto-rows-[200px]">
          {puzzleItems.map((item, idx) => {
            const isVideo = !!item.bgVideo;
            const isPlaying = playingVideos[item.id] ?? false;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
                className={`${item.gridClass} group flex relative`}
                onClick={(e) => isVideo && handleVideoClick(item.id, e)}
              >
                {/* Inner card panel */}
                <div className={`w-full flex flex-col h-full transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl relative overflow-hidden rounded-lg ${item.cardClass}`}>
                  
                  {/* Photo Background */}
                  {item.bgImage && (
                    <>
                      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
                        <img 
                          src={item.bgImage} 
                          alt="" 
                          className="w-full h-full object-cover filter brightness-[0.6] saturate-[1.3] group-hover:scale-105 transition-transform duration-700 ease-out" 
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-fust-deep/95 via-fust-deep/20 to-transparent z-5 pointer-events-none" />
                    </>
                  )}

                  {/* Video Background / Player */}
                  {item.bgVideo && (
                    <>
                      <div className={`absolute inset-0 select-none overflow-hidden bg-black ${isPlaying ? 'z-30' : 'z-0'}`}>
                        <video
                          ref={(el) => (videoRefs.current[item.id] = el)}
                          src={item.bgVideo}
                          playsInline
                          className={`w-full h-full ${isPlaying ? 'object-contain' : 'object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out'}`}
                          onEnded={() => setPlayingVideos(prev => ({ ...prev, [item.id]: false }))}
                        />
                      </div>
                      
                      {!isPlaying && (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-t from-fust-deep/90 via-fust-deep/10 to-transparent z-5 pointer-events-none" />
                          {/* Play button overlay */}
                          <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors z-10 cursor-pointer">
                            <div className="flex flex-col items-center bg-fust-gold text-fust-deep px-6 py-3 rounded-full shadow-xl transform group-hover:scale-110 transition-transform">
                              <Play className="w-5 h-5 mb-1 text-fust-deep" fill="currentColor" />
                              <span className="text-[10px] font-bold tracking-wider uppercase">Assistir Tutorial</span>
                            </div>
                          </div>
                        </>
                      )}
                    </>
                  )}

                  {/* Card Content (Hide if video is playing) */}
                  <div className={`space-y-2 sm:space-y-4 relative z-20 pointer-events-none transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
                    <span className="text-[7px] sm:text-[8px] font-mono tracking-widest text-fust-gold font-bold uppercase opacity-85 block">
                      {item.id.replace("-", " ")}
                    </span>
                    
                    <h3 className="font-serif text-xs sm:text-lg md:text-2xl font-bold tracking-tight leading-tight">
                      {item.title[lang]}
                    </h3>
                  </div>

                  <p className={`text-[9px] sm:text-xs md:text-sm font-sans font-light leading-relaxed opacity-95 mt-1 sm:mt-4 relative z-20 pointer-events-none line-clamp-4 md:line-clamp-none transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
                    {item.desc[lang]}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
