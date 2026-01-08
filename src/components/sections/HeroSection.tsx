import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import heroBackground from '@/assets/hero-background.jpg';
import heroVideo from '@/assets/hero-video.mp4';
import { SecurityInfo } from '../SecurityInfo';
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

  const showVideo = !prefersReducedMotion && !videoFailed;

  return (
    <section className="relative min-h-screen lumina-hero-bg flex items-center justify-center overflow-hidden">
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
            className="w-full h-full object-cover"
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

      {/* Dark overlay with gradient for luxury look */}
      <div className="absolute inset-0 z-10 bg-black/40 md:bg-black/35"></div>
      
      {/* Top gradient for better text readability */}
      <div className="absolute inset-x-0 top-0 h-48 z-10 bg-gradient-to-b from-black/60 to-transparent"></div>
      
      {/* Bottom gradient for depth */}
      <div className="absolute inset-x-0 bottom-0 h-48 z-10 bg-gradient-to-t from-black/70 to-transparent"></div>

      <div className="relative z-20 lumina-container-desktop text-center">
        <div className="max-w-6xl mx-auto">
          {/* Logo */}
          <div className="lumina-desktop-spacing">
            <img 
              src="/lovable-uploads/38d359c6-1f95-4b23-b783-9abc8b373cb2.png" 
              alt="Lumina Beauty Hair Logo" 
              className="h-12 md:h-16 lg:h-20 xl:h-24 mx-auto lumina-mobile-image"
            />
          </div>

          {/* Badge */}
          <Badge className="lumina-badge lumina-desktop-spacing text-xs md:text-sm lg:text-base px-4 py-2 lg:px-6 lg:py-3">
            ⭐ Referência desde 2012 | +200 profissionais
          </Badge>

          {/* Main headline */}
          <h1 className="lumina-heading-xl lumina-desktop-spacing font-serif">
            Pare de perder clientes por causa de 
            <span className="lumina-text-gold"> fita adesiva amadora</span>
          </h1>

          {/* Subtitle */}
          <p className="lumina-text-xl mb-8 lg:mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Descubra como cabeleireiros comuns estão faturando até 
            <span className="lumina-text-gold font-bold"> 42% mais</span> usando a única técnica de mega hair que 
            <span className="lumina-text-gold font-bold"> vende sozinha</span>
          </p>

          {/* Before/After Images */}
          <div className="flex flex-col md:flex-row gap-6 lg:gap-8 xl:gap-12 justify-center items-center lumina-desktop-spacing-lg max-w-4xl mx-auto">
            <div className="text-center lumina-desktop-spacing">
              <img 
                src="/lovable-uploads/6ac15d75-8b08-4546-bd49-0ed661ff1186.png" 
                alt="Transformação antes e depois com técnica Lumina" 
                className="lumina-desktop-hero-images shadow-2xl w-full"
              />
              <p className="text-sm lg:text-base text-gray-400 mt-2 lg:mt-4">Antes → Depois</p>
            </div>
            <div className="text-center lumina-desktop-spacing">
              <img 
                src="/lovable-uploads/988b757e-69cf-4e51-9d68-d356c8c9c014.png" 
                alt="Técnica profissional de mega hair Lumina" 
                className="lumina-desktop-hero-images shadow-2xl w-full"
              />
              <p className="text-sm lg:text-base text-gray-400 mt-2 lg:mt-4">Técnica Profissional</p>
            </div>
          </div>

          {/* Timer */}
          <div className="flex justify-center lumina-desktop-spacing">
            <div className="bg-red-600 text-white px-4 py-2 lg:px-6 lg:py-4 xl:px-8 xl:py-5 rounded-lg">
              <div className="text-xs lg:text-sm font-medium mb-1">OFERTA EXPIRA EM:</div>
              <div className="font-mono text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
                {String(timeLeft.hours).padStart(2, '0')}:
                {String(timeLeft.minutes).padStart(2, '0')}:
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="lumina-desktop-spacing">
            <div className="text-lg lg:text-xl xl:text-2xl text-gray-400 line-through mb-1 lg:mb-2">De R$ 497</div>
            <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold lumina-text-gold mb-1 lg:mb-2">
              R$ 247
            </div>
            <div className="text-base lg:text-lg xl:text-xl text-gray-300">HOJE APENAS</div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button 
              onClick={handleCTAClick}
              variant="lumina-premium"
              size="xl"
              className="lumina-btn-premium mb-4 animate-pulse-subtle text-base lg:text-lg xl:text-xl"
            >
              QUERO GARANTIR AGORA
            </Button>
            
            <SecurityInfo />
          </div>
        </div>
      </div>
    </section>
  );
};
