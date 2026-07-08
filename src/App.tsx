import { useEffect, useState } from "react";
import Header from "./components/Header";
import WelcomeHero from "./components/WelcomeHero";
import JourneyIntroduction from "./components/JourneyIntroduction";
import KnowledgeInMotion from "./components/KnowledgeInMotion";
import LetterIntroduction from "./components/LetterIntroduction";
import InteractiveEnvelope from "./components/InteractiveEnvelope";
import FinalManifesto from "./components/FinalManifesto";
import MinimalFooter from "./components/MinimalFooter";
import { locales } from "./data/welcome-content";
import { LetterState, StudentWelcomeData } from "./types";
import { startAmbientAudio, stopAmbientAudio } from "./utils/audio";

export default function App() {
  const [currentLang, setCurrentLang] = useState<"pt" | "en" | "es">("pt");
  const [isAudioOn, setIsAudioOn] = useState(false);
  const [letterState, setLetterState] = useState<LetterState>("closed");
  const [hasReadLetter, setHasReadLetter] = useState(false);
  const [studentData, setStudentData] = useState<StudentWelcomeData>({
    name: "",
    program: "",
    level: "",
    language: "pt",
  });

  // Extract student details from URL parameters for automatic personalization
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const name = params.get("student") || params.get("name") || "";
      const program = params.get("program") || params.get("course") || params.get("curso") || "";
      const level = params.get("level") || "";
      const langParam = params.get("lang") || params.get("language") || params.get("idioma") || "";

      // Safe cast language
      let language: "pt" | "en" | "es" = "pt";
      if (langParam === "en" || langParam === "es") {
        language = langParam;
        setCurrentLang(langParam);
      }

      setStudentData({
        name,
        program,
        level,
        language,
      });
    } catch (e) {
      console.warn("Could not extract student welcome details from URL query:", e);
    }
  }, []);

  // Sync ambient sound synthesizer with state
  useEffect(() => {
    if (isAudioOn) {
      startAmbientAudio();
    } else {
      stopAmbientAudio();
    }
    return () => {
      stopAmbientAudio();
    };
  }, [isAudioOn]);

  const handleToggleAudio = () => {
    setIsAudioOn((prev) => !prev);
  };

  const handleLanguageChange = (lang: "pt" | "en" | "es") => {
    setCurrentLang(lang);
    setStudentData((prev) => ({ ...prev, language: lang }));
  };

  const scrollSmoothTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleLetterReadCompleted = () => {
    setHasReadLetter(true);
  };

  const handleReopenLetter = () => {
    setLetterState("closed");
    setHasReadLetter(false);
    // Smooth scroll back to envelope
    scrollSmoothTo("envelope-ceremony");
  };

  const content = locales[currentLang];

  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-fust-gold selection:text-fust-blue">
      {/* Floating Global Header Controls */}
      <Header
        currentLang={currentLang}
        onChangeLang={handleLanguageChange}
        content={content}
        isAudioOn={isAudioOn}
        onToggleAudio={handleToggleAudio}
      />

      {/* Main Narrative Sections Flow */}
      <main className="flex-grow">
        {/* 1. Hero Entrance */}
        <WelcomeHero
          content={content}
          onNextSection={() => scrollSmoothTo("introduction")}
        />

        {/* 2. Asymmetric Journey Introduction */}
        <div id="introduction">
          <JourneyIntroduction content={content} />
        </div>

        {/* 3. Pre-Letter Anticipation Ceremony (Climax placed earlier in flow) */}
        <LetterIntroduction
          content={content}
          onFocusEnvelope={() => scrollSmoothTo("envelope-ceremony")}
          currentLang={currentLang}
        />

        {/* 4. Central interactive 3D Envelope and Immersive Formal Letter */}
        <InteractiveEnvelope
          content={content}
          onReadComplete={handleLetterReadCompleted}
          letterState={letterState}
          setLetterState={setLetterState}
          currentLang={currentLang}
        />

        {/* 5. Pause: Knowledge puzzle blocks */}
        <div id="knowledge-puzzle">
          <KnowledgeInMotion currentLang={currentLang} />
        </div>

        {/* 7. Theatrical Outro */}
        <FinalManifesto content={content} />
      </main>

      {/* 9. Minimal Editorial Footer */}
      <MinimalFooter content={content} />
    </div>
  );
}
