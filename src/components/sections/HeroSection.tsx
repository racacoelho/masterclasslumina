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
    <section id="hero" className="relative bg-background pt-28 md:pt-32">
      <div className="lumina-container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-[47fr_53fr] items-center gap-10 lg:gap-20 py-10 md:py-16 lg:py-24">
          {/* Texto */}
          <div className="animate-fade-in">
            <p className="lumina-eyebrow">Formação Profissional Dermasilk™</p>

            <h1 className="lumina-heading-display mb-8">
              Aplicar é só uma parte.
            </h1>

            <div className="lumina-gold-line mb-8"></div>

            <p className="lumina-body-lg max-w-xl mb-10">
              O Sistema Dermasilk™ começa antes da aplicação. A formação ensina a entender a cliente e escolher base, coleção e cor com critério.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="lumina-btn-primary"
              >
                Quero a formação
              </a>
              <button onClick={handleSecondaryClick} className="lumina-link-quiet text-left">
                ver o conteúdo ↓
              </button>
            </div>

            <p className="mt-6 text-sm text-muted-foreground font-light">
              R$247, 3x de R$82 sem juros.
            </p>
          </div>

          {/* Fotografia */}
          <div className="relative">
            <img
              src="/lovable-uploads/1a5a0209-b36a-4d90-beda-4f87adaf67d0.png"
              alt="Mãos de profissional posicionando uma mecha de fita adesiva junto à raiz"
              width="876"
              height="1038"
              decoding="async"
              className="w-full h-[52vh] sm:h-[60vh] lg:h-[78vh] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
