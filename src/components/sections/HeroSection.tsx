import { useEffect, useRef } from 'react';
import heroVideoMobile from '@/assets/hero-video-mobile.mp4';
import heroFirstFrame from '@/assets/hero-first-frame.jpg';

const CHECKOUT_URL = 'https://pay.kiwify.com.br/hK6DKTn';

export const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const video = videoRef.current;
    if (!video) return;
    if (reduceMotion) {
      video.pause();
      return;
    }

    // iOS Safari exige muted/playsInline definidos no elemento antes do play()
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    const tryPlay = () => {
      const p = video.play();
      if (p && typeof p.catch === 'function') p.catch(() => undefined);
    };

    video.load();
    tryPlay();
    video.addEventListener('loadedmetadata', tryPlay);
    video.addEventListener('loadeddata', tryPlay);
    video.addEventListener('canplay', tryPlay);
    document.addEventListener('visibilitychange', tryPlay);
    // Fallback: primeira interação do usuário (Modo de Baixo Consumo no iPhone)
    const onInteract = () => tryPlay();
    document.addEventListener('touchstart', onInteract, { passive: true, once: true });
    document.addEventListener('click', onInteract, { once: true });

    return () => {
      video.removeEventListener('loadedmetadata', tryPlay);
      video.removeEventListener('loadeddata', tryPlay);
      video.removeEventListener('canplay', tryPlay);
      document.removeEventListener('visibilitychange', tryPlay);
      document.removeEventListener('touchstart', onInteract);
      document.removeEventListener('click', onInteract);
    };
  }, []);

  const scrollToContent = () => {
    document.querySelector('#conteudo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-foreground min-h-[92svh] lg:min-h-[94vh] flex items-end lg:items-center"
    >
      {/* Vídeo full-bleed */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroFirstFrame}
          aria-label="Aplicação de mecha de fita adesiva junto à raiz"
          className="absolute inset-0 w-full h-full object-cover object-[68%_center] lg:object-[60%_center]"
        >
          <source src={heroVideoMobile} type='video/mp4; codecs="avc1.42E01F"' />
        </video>

        {/* Escurecimento — base uniforme + reforço atrás do texto */}
        <div className="absolute inset-0 bg-foreground/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/35 to-foreground/45 lg:bg-gradient-to-r lg:from-foreground/85 lg:via-foreground/45 lg:to-foreground/10 pointer-events-none" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 w-full lumina-container pt-32 pb-16 md:pb-20 lg:py-32">
        <div className="max-w-[36rem] animate-fade-in">
          <p className="lumina-eyebrow text-background/70">Formação Profissional Dermasilk™</p>

          <h1 className="lumina-display text-background mt-6 lowercase">
            aplicar é só
            <br />
            uma parte.
          </h1>

          <p className="lumina-lead text-background/75 mt-7 max-w-[30rem]">
            O Sistema Dermasilk™ começa antes da aplicação. A formação ensina a entender a cliente e escolher base,
            coleção e cor com critério.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="lumina-btn-light">
              Quero a formação
            </a>
            <button
              onClick={scrollToContent}
              className="lumina-link-quiet text-left text-background/65 hover:text-background"
            >
              ver o conteúdo ↓
            </button>
          </div>

          <div className="mt-9 pt-6 border-t border-background/20 flex items-baseline gap-4">
            <span className="font-serif text-2xl md:text-[1.75rem] text-background leading-none">R$247</span>
            <span className="text-[11px] tracking-[0.18em] uppercase text-background/60">3x de R$82 sem juros</span>
          </div>
        </div>
      </div>
    </section>
  );
};
