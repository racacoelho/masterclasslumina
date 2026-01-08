import heroVideo from '@/assets/hero-video-new.mp4';
import { useState } from 'react';

interface HeroSectionProps {
  timeLeft: {
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export const HeroSection = ({ timeLeft }: HeroSectionProps) => {
  const [isVideoReady, setIsVideoReady] = useState(false);

  const handleCTAClick = () => {
    window.open('https://pay.kiwify.com.br/hK6DKTn', '_blank');
  };

  const handleSecondaryClick = () => {
    const element = document.querySelector('#conteudo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-foreground">
      {/* Background video - iOS compatible, solid bg fallback, fade-in on ready */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        controls={false}
        onCanPlay={() => setIsVideoReady(true)}
        onLoadedData={() => setIsVideoReady(true)}
        aria-hidden="true"
        tabIndex={-1}
        className={`absolute inset-0 z-0 h-full w-full object-cover transition-opacity duration-700 ${
          isVideoReady ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundColor: 'hsl(0 0% 7%)' }}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Elegant overlay gradient */}
      <div className="lumina-hero-overlay"></div>

      {/* Content */}
      <div className="relative z-10 lumina-container text-center text-white pt-32 pb-24">
        <div className="max-w-3xl mx-auto">
          {/* Eyebrow */}
          <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-8">
            Masterclass
          </p>

          {/* Main headline */}
          <h1 className="lumina-heading-display text-white mb-6">
            Master Class Lumina
          </h1>

          {/* Subtitle - simplified */}
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-14 leading-relaxed font-light">
            Domine o método Dermasilk™ e aplique em 40 minutos com resultado invisível.
          </p>

          {/* Single Primary CTA */}
          <div className="flex flex-col items-center gap-6">
            <button 
              onClick={handleCTAClick}
              className="px-12 py-4 bg-white text-foreground font-medium text-sm uppercase tracking-[0.15em] transition-all duration-300 hover:bg-white/90"
            >
              Garantir minha vaga
            </button>
            
            {/* Subtle secondary link */}
            <button 
              onClick={handleSecondaryClick}
              className="text-white/50 text-sm tracking-wide hover:text-white/80 transition-colors"
            >
              Ver o conteúdo
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0"></div>
      </div>
    </section>
  );
};
