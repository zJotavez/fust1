import { Volume2, VolumeX } from "lucide-react";
import { LocaleContent } from "../data/welcome-content";

interface HeaderProps {
  currentLang: "pt" | "en" | "es";
  onChangeLang: (lang: "pt" | "en" | "es") => void;
  content: LocaleContent;
  isAudioOn: boolean;
  onToggleAudio: () => void;
}

export default function Header({
  currentLang,
  onChangeLang,
  content,
  isAudioOn,
  onToggleAudio,
}: HeaderProps) {
  return (
    // Transparent wrapper spanning full-width, events pass through to content behind it
    <header className="fixed top-0 left-0 w-full z-40 p-6 flex items-center justify-between pointer-events-none select-none">
      {/* Left side: Crest Logo ONLY (no white container, no borders, events active) */}
      <div className="pointer-events-auto flex items-center">
        <img
          src="/logo-crest.png"
          alt="FUST Crest Logo"
          className="w-14 h-14 object-contain filter drop-shadow-md hover:scale-[1.02] transition-transform duration-300"
        />
      </div>

      {/* Right side: Language and Audio floats (events active) */}
      <div className="flex items-center space-x-3 pointer-events-auto">
        {/* Audio controls */}
        <button
          onClick={onToggleAudio}
          className="flex items-center justify-center p-2.5 rounded-full bg-fust-deep/75 backdrop-blur-md border border-fust-gold/25 hover:border-fust-gold text-fust-gold-light hover:bg-fust-deep/90 transition-all duration-300 shadow-md"
          title={content.envelope.audioToggle}
        >
          {isAudioOn ? (
            <Volume2 className="w-4 h-4 text-fust-gold animate-pulse" />
          ) : (
            <VolumeX className="w-4 h-4 text-white/50" />
          )}
        </button>

        {/* Language controls capsule */}
        <div className="flex items-center space-x-1 bg-fust-deep/75 backdrop-blur-md p-1 rounded-full border border-fust-gold/25 shadow-md">
          {(["pt", "en", "es"] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => onChangeLang(lang)}
              className={`px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase transition-all duration-300 ${
                currentLang === lang
                  ? "bg-fust-gold text-fust-deep shadow-sm"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
