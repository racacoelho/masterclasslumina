import { useEffect, useRef, useState } from 'react';
import heroVideo from '@/assets/hero-video-new.mp4';
import heroPoster from '@/assets/hero-poster.jpg';

const CHECKOUT_URL = 'https://pay.kiwify.com.br/hK6DKTn';

export const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [allowVideo, setAllowVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    const slow = !!conn && (conn.saveData === true || ['slow-2g', '2g', '3g'].includes(conn.effectiveType ?? ''));
    if (!reduceMotion && !slow) setAllowVideo(true);
  }, []);

  useEffect(() => {
    if (allowVideo) videoRef.current?.play().catch(() => undefined);
  }, [allowVideo]);

  const handleSecondaryClick = () => {
    document.querySelector('#conteudo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center overflow-hidden bg-foreground">
      {/* Vídeo de fundo em tela cheia */}
      <div className="absolute inset-0">
        <img
          src={heroPoster}
          alt="Mãos de profissional posicionando uma mecha de fita adesiva junto à raiz"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {allowVideo && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={heroPoster}
            onCanPlay={() => setVideoReady(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${videoReady ? 'opacity-100' : 'opacity-0'}`}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/60 pointer-events-none" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 lumina-container-wide w-full pt-32 pb-20 md:pt-36 md:pb-24">
        <div className="max-w-2xl animate-fade-in">
          <p className="lumina-eyebrow text-white/80">Formação Profissional Dermasilk™</p>

          <h1 className="lumina-heading-display text-white mb-8">
            Aplicar é só uma parte.
          </h1>

          <div className="lumina-gold-line mb-8"></div>

          <p className="lumina-body-lg text-white/85 mb-10">
            O Sistema Dermasilk™ começa antes da aplicação. A formação ensina a entender a cliente e escolher base, coleção e cor com critério.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="lumina-btn-light"
            >
              Quero a formação
            </a>
            <button onClick={handleSecondaryClick} className="lumina-link-quiet text-left text-white/80 hover:text-white">
              ver o conteúdo ↓
            </button>
          </div>

          <p className="mt-6 text-sm text-white/70 font-light">
            R$247, 3x de R$82 sem juros.
          </p>
        </div>
      </div>
    </section>
  );
};
