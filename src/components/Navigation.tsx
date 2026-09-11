import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Conteúdo', href: '#conteudo' },
  { label: 'Para quem é', href: '#para-quem' },
  { label: 'FAQ', href: '#faq' },
];

const CHECKOUT_URL = 'https://pay.kiwify.com.br/hK6DKTn';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`lumina-nav transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5 md:py-7'}`}>
        <div className="lumina-container flex items-center justify-between">
          <a href="#hero" onClick={(e) => { e.preventDefault(); handleLinkClick('#hero'); }}>
            <img
              src="/lovable-uploads/38d359c6-1f95-4b23-b783-9abc8b373cb2.png"
              alt="Lumina Beauty Hair"
              className="h-7 md:h-9"
            />
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button key={link.href} onClick={() => handleLinkClick(link.href)} className="lumina-nav-link">
                {link.label}
              </button>
            ))}
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="lumina-btn-primary !px-7 !py-3"
            >
              Quero a formação
            </a>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="lumina-btn-primary !px-5 !py-2.5 !text-[10px]"
            >
              Quero a formação
            </a>
            <button onClick={() => setIsOpen(true)} className="p-1 text-foreground" aria-label="Abrir menu">
              <Menu className="w-5 h-5" strokeWidth={1.25} />
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="lumina-mobile-menu">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 p-2 text-foreground"
            aria-label="Fechar menu"
          >
            <X className="w-7 h-7" strokeWidth={1.25} />
          </button>

          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <button key={link.href} onClick={() => handleLinkClick(link.href)} className="lumina-mobile-link">
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
