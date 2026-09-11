import { useEffect, useRef, useState } from 'react';
import heroVideo from '@/assets/hero-video-new.mp4';
import heroFirstFrame from '@/assets/hero-first-frame.jpg';

const CHECKOUT_URL = 'https://pay.kiwify.com.br/hK6DKTn';

export const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [staticOnly, setStaticOnly] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    const slow = !!conn && (conn.saveData === true || ['slow-2g', '2g'].includes(conn.effectiveType ?? ''));
    if (reduceMotion || slow) {
      setStaticOnly(true);
      return;
    }
    videoRef.current?.play().catch(() => undefined);
  }, []);

  const scrollToContent = () => {
    document.querySelector('#conteudo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative lumina-dark overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] lg:min-h-screen">
        {/* Texto */}
        <div className="order-1 flex items-center px-7 pt-32 pb-12 md:px-12 lg:pl-16 lg:pr-20 xl:pl-24 lg:py-32">
          <div className="w-full max-w-[34rem] animate-fade-in">
            <p className="lumina-eyebrow text-background/55">Formação Profissional Dermasilk™</p>

            <h1 className="lumina-display text-background mt-7 mb-8 lowercase">
              aplicar é só uma parte.
            </h1>

            <p className="lumina-lead text-background/70 max-w-[30rem]">
              O Sistema Dermasilk™ começa antes da aplicação. A formação ensina a entender a cliente e escolher base,
              coleção e cor com critério.
            </p>

            <div className="mt-11 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="lumina-btn-light">
                Quero a formação
              </a>
              <button onClick={scrollToContent} className="lumina-link-quiet text-left text-background/55 hover:text-background">
                ver o conteúdo ↓
              </button>
            </div>

            <div className="mt-10 pt-6 border-t border-background/15 flex items-baseline gap-4">
              <span className="font-serif text-2xl md:text-[1.75rem] text-background leading-none">R$247</span>
              <span className="text-[11px] tracking-[0.18em] uppercase text-background/50">3x de R$82 sem juros</span>
            </div>
          </div>
        </div>

        {/* Vídeo */}
        <div className="order-2 relative min-h-[62vh] sm:min-h-[70vh] lg:min-h-screen">
          {staticOnly ? (
            <img
              src={heroFirstFrame}
              alt="Aplicação de mecha de fita adesiva junto à raiz"
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster={heroFirstFrame}
              aria-label="Aplicação de mecha de fita adesiva junto à raiz"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/20 to-transparent lg:w-1/3 pointer-events-none" />
          <div className="absolute inset-0 bg-foreground/15 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
