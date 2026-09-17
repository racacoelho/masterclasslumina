import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { trackCheckout } from '@/lib/tracking';

const navLinks = [
  { label: 'Formação', href: '#sistema' },
  { label: 'Conteúdo', href: '#conteudo' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Dúvidas', href: '#faq' },
];

const CHECKOUT_URL = 'https://pay.kiwify.com.br/hK6DKTn';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md border-b border-border py-3.5'
            : 'bg-transparent border-b border-transparent py-6'
        }`}
      >
        <div className="lumina-container-wide flex items-center justify-between gap-8">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#hero');
            }}
            className="shrink-0"
          >
            <img
              src="/lovable-uploads/38d359c6-1f95-4b23-b783-9abc8b373cb2.png"
              alt="Lumina Beauty Hair"
              className={`h-6 md:h-7 transition-all duration-500 ${isScrolled ? '' : 'brightness-0 invert'}`}
            />
          </a>

          <div className="hidden lg:flex items-center gap-8 xl:gap-11">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`lumina-nav-link ${isScrolled ? '' : 'text-background/65 hover:text-background'}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${isScrolled ? 'lumina-btn-outline' : 'lumina-btn-outline-light'} !px-7 !py-3`}
              onClick={trackCheckout}
            >
              quero me capacitar
            </a>
          </div>

          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className={isScrolled ? 'text-foreground' : 'text-background'}
              aria-label="Abrir menu"
            >
              <Menu className="w-5 h-5" strokeWidth={1.25} />
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center gap-9">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-7 text-foreground"
            aria-label="Fechar menu"
          >
            <X className="w-6 h-6" strokeWidth={1.25} />
          </button>

          {navLinks.map((link) => (
            <button key={link.href} onClick={() => handleLinkClick(link.href)} className="lumina-mobile-link">
              {link.label}
            </button>
          ))}
          <a href="https://luminabeautyhair.com/dermasilk" target="_blank" rel="noopener noreferrer" className="lumina-nav-link mt-4">
            Sistema Dermasilk™ ↗
          </a>
          <a href="https://luminabeautyhair.com/cores" target="_blank" rel="noopener noreferrer" className="lumina-nav-link">
            Catálogo de Cores ↗
          </a>
        </div>
      )}
    </>
  );
};
