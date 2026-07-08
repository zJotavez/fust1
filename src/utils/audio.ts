// Audio controller for FUST welcome page
// Plays the uploaded background audio loop at a low volume

let audio: HTMLAudioElement | null = null;

export function startAmbientAudio() {
  try {
    if (!audio) {
      audio = new Audio("/suspense-audio.mp3");
      audio.loop = true;
      audio.volume = 0.07; // Very low volume for gentle background presence
    }
    
    // Play with promise check to handle browser autoplay policies
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.warn("Autoplay prevented or audio blocked by browser settings:", error);
      });
    }
  } catch (err) {
    console.warn("Failed to initialize background audio:", err);
  }
}

export function stopAmbientAudio() {
  if (audio) {
    try {
      audio.pause();
    } catch (_) {}
  }
}
