import heroBackground from '@/assets/hero-background.jpg';
import heroVideo from '@/assets/hero-video.mp4';
import { useEffect, useState } from 'react';

interface HeroSectionProps {
  timeLeft: {
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export const HeroSection = ({ timeLeft }: HeroSectionProps) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleCTAClick = () => {
    window.open('https://pay.kiwify.com.br/hK6DKTn', '_blank');
  };

  const handleSecondaryClick = () => {
    const element = document.querySelector('#conteudo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const showVideo = !prefersReducedMotion && !videoFailed;

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video or fallback image */}
      <div className="absolute inset-0 z-0">
        {showVideo ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={heroBackground}
            onError={() => setVideoFailed(true)}
            aria-label="Vídeo de fundo mostrando aplicação profissional de mega hair"
            className="lumina-hero-video"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        ) : (
          <img 
            src={heroBackground}
            alt="Luxurious beauty salon background"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Elegant overlay gradient */}
      <div className="lumina-hero-overlay"></div>

      {/* Content */}
      <div className="relative z-10 lumina-container text-center text-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Eyebrow */}
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-white/70 mb-6">
            Masterclass
          </p>

          {/* Main headline */}
          <h1 className="lumina-heading-display text-white mb-8">
            Master Class Lumina
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            A técnica de fita adesiva ultrafina que torna sua aplicação 
            <span className="text-white font-medium"> invisível</span>, 
            <span className="text-white font-medium"> rápida</span> e 
            <span className="text-white font-medium"> premium</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={handleCTAClick}
              className="w-full sm:w-auto px-10 py-4 bg-white text-foreground font-medium text-sm uppercase tracking-[0.1em] transition-all duration-300 hover:bg-white/90"
            >
              Quero garantir agora
            </button>
            
            <button 
              onClick={handleSecondaryClick}
              className="w-full sm:w-auto px-10 py-4 border border-white/40 text-white font-medium text-sm uppercase tracking-[0.1em] transition-all duration-300 hover:bg-white/10"
            >
              Ver o conteúdo
            </button>
          </div>

          {/* Timer - Elegant */}
          <div className="inline-flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-[0.2em] text-white/50">
              Oferta especial expira em
            </span>
            <div className="flex items-center gap-2 text-white/90">
              <span className="text-2xl md:text-3xl font-medium tabular-nums">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-white/50">:</span>
              <span className="text-2xl md:text-3xl font-medium tabular-nums">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-white/50">:</span>
              <span className="text-2xl md:text-3xl font-medium tabular-nums">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
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
