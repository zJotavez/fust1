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
      id: "academic-knowledge",
      title: {
        pt: "Conhecimento Acadêmico",
        en: "Academic Knowledge",
        es: "Conocimiento Académico",
      },
      desc: {
        pt: "A base intelectual da FUST une rigor científico e reflexão teológica para formar líderes preparados para o amanhã.",
        en: "The intellectual foundation of FUST combines scientific rigor and theological reflection to shape leaders prepared for tomorrow.",
        es: "La base intelectual de FUST une el rigor científico y la reflexión teológica formar líderes preparados para el mañana.",
      },
      gridClass: "col-span-2 md:col-span-6 row-span-2",
      cardClass: "text-white border-l-4 border-fust-gold p-4 sm:p-6 md:p-10 justify-between",
      bgImage: "/card-excellence.png",
    },
    {
      id: "critical-thinking",
      title: {
        pt: "Pensamento Crítico",
        en: "Critical Thinking",
        es: "Pensamiento Crítico",
      },
      desc: {
        pt: "Questionar, analisar e compreender profundamente as dinâmicas e os grandes desafios do mundo contemporâneo.",
        en: "Question, analyze, and deeply understand the dynamics and great challenges of the contemporary world.",
        es: "Cuestionar, analizar y comprender profundamente la dinámica y los grandes desafíos del mundo contemporáneo.",
      },
      gridClass: "col-span-2 md:col-span-6 row-span-1",
      cardClass: "text-white border border-white/10 p-4 sm:p-6 hover:border-fust-gold transition-all justify-between",
      bgImage: "/card-education.png",
    },
    {
      id: "research",
      title: {
        pt: "Pesquisa",
        en: "Research",
        es: "Investigación",
      },
      desc: {
        pt: "A busca ativa por respostas científicas e éticas que promovam o avanço social.",
        en: "The active search for scientific and ethical answers that promote social progress.",
        es: "La búsqueda activa de respuestas científicas y éticas que promuevan el avance social.",
      },
      gridClass: "col-span-1 md:col-span-3 row-span-1",
      cardClass: "text-white border border-white/10 p-4 sm:p-6 hover:border-fust-gold transition-all justify-between",
      bgImage: "/card-library.png",
    },
    {
      id: "purpose",
      title: {
        pt: "Propósito",
        en: "Purpose",
        es: "Propósito",
      },
      desc: {
        pt: "Unir a excelência do saber ao chamado existencial de transformação.",
        en: "Uniting the excellence of knowledge with the existential calling of transformation.",
        es: "Unir la excelencia del saber al llamado existencial de transformación.",
      },
      gridClass: "col-span-1 md:col-span-3 row-span-1",
      cardClass: "text-white border border-white/10 p-4 sm:p-6 hover:border-fust-gold transition-all justify-between",
      bgImage: "/card-routine.png",
    },
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
      gridClass: "col-span-2 md:col-span-6 row-span-2",
      cardClass: "text-white border border-fust-gold/40 p-4 sm:p-6 md:p-10 justify-between cursor-pointer",
      bgVideo: "/tutorial.mp4",
    },
    {
      id: "growth",
      title: {
        pt: "Crescimento Intelectual",
        en: "Intellectual Growth",
        es: "Crecimiento Intelectual",
      },
      desc: {
        pt: "Expandir horizontes de compreensão teórica e prática a cada etapa do processo acadêmico.",
        en: "Expanding horizons of theoretical and practical understanding at every stage of the academic process.",
        es: "Expandir horizontes de comprensión teórica y práctica en cada etapa del proceso académico.",
      },
      gridClass: "col-span-1 md:col-span-3 row-span-1",
      cardClass: "bg-fust-blue text-white border border-fust-gold/30 p-4 sm:p-6 hover:bg-fust-blue/90 transition-all justify-between shadow-md",
    },
    {
      id: "human-dev",
      title: {
        pt: "Desenvolvimento Humano",
        en: "Human Development",
        es: "Desarrollo Humano",
      },
      desc: {
        pt: "Formar não apenas profissionais de excelência, mas cidadãos globais conscientes e compassivos.",
        en: "Shaping not just excellent professionals, but conscious and compassionate global citizens.",
        es: "Formar no solo profesionales excelentes, sino ciudadanos globales conscientes y compasivos.",
      },
      gridClass: "col-span-1 md:col-span-3 row-span-1",
      cardClass: "text-white border border-white/10 p-4 sm:p-6 hover:border-fust-gold transition-all justify-between",
      bgImage: "/card-graduates.png",
    },
    {
      id: "social-impact",
      title: {
        pt: "Impacto Social",
        en: "Social Impact",
        es: "Impacto Social",
      },
      desc: {
        pt: "Levar o conhecimento gerado nos campus para fazer a diferença real no mundo.",
        en: "Taking the knowledge generated on campuses to make a real difference in the world.",
        es: "Levar el conhecimento gerado no campus para marcar uma diferença real no mundo.",
      },
      gridClass: "col-span-2 md:col-span-6 row-span-1",
      cardClass: "bg-fust-burgundy text-fust-gold-light border border-fust-gold/30 p-4 sm:p-6 hover:bg-fust-burgundy/90 transition-all justify-between shadow-md",
    },
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
