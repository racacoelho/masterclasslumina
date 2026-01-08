import { useState, useEffect } from 'react';

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const heroSection = document.querySelector('#hero');
      const footer = document.querySelector('footer');
      
      if (!heroSection || !footer) return;

      const heroHeight = heroSection.getBoundingClientRect().height;
      const footerTop = footer.offsetTop;
      const currentScroll = window.pageYOffset;

      // Show after hero, hide before footer
      if (currentScroll > heroHeight && currentScroll < footerTop - 200) {
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
      className={`lumina-floating-cta transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <button 
        onClick={handleCTAClick}
        className="lumina-floating-btn"
      >
        Quero garantir agora
      </button>
    </div>
  );
};
