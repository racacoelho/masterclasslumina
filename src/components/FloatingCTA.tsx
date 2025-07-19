import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const heroSection = document.querySelector('section'); // Primeira seção (Hero)
      const footer = document.querySelector('footer'); // Rodapé
      
      if (!heroSection || !footer) return;

      const heroHeight = heroSection.offsetHeight;
      const footerTop = footer.offsetTop;
      const currentScroll = window.pageYOffset;

      // Aparece após sair da Hero Section e desaparece antes do Footer
      if (currentScroll > heroHeight && currentScroll < footerTop - 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleCTAClick = () => {
    window.open('https://pay.kiwify.com.br/hK6DKTn', '_blank');
  };

  return (
    <div 
      className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-[9999] w-[90%] max-w-[400px] transition-all duration-300 ${
        isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <Button 
        onClick={handleCTAClick}
        className="w-full h-14 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-lg rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:bg-white/20 hover:border-white/30 hover:shadow-[0_12px_40px_rgba(255,255,255,0.1)] transition-all duration-300"
      >
        QUERO GARANTIR AGORA
      </Button>
    </div>
  );
};