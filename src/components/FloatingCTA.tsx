import { useState, useEffect } from 'react';

const CHECKOUT_URL = 'https://pay.kiwify.com.br/hK6DKTn';

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const hero = document.querySelector('#hero');
      const offer = document.querySelector('#oferta');
      if (!hero) return;

      const heroBottom = hero.getBoundingClientRect().bottom;
      const pastHero = heroBottom < 0;

      let insideOffer = false;
      if (offer) {
        const rect = offer.getBoundingClientRect();
        insideOffer = rect.top < window.innerHeight && rect.bottom > 0;
      }

      setIsVisible(pastHero && !insideOffer);
    };

    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div
      className={`lumina-floating-cta transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex items-center justify-between gap-4 px-5 py-3">
        <div className="leading-tight">
          <p className="font-serif text-xl text-background">R$247</p>
          <p className="text-[10px] tracking-[0.14em] uppercase text-background/50">3x de R$82</p>
        </div>
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="lumina-btn-light !px-6 !py-3 !text-[10px]"
        >
          Quero a formação
        </a>
      </div>
    </div>
  );
};
