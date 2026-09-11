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

          <div className="hidden lg:flex items-center gap-12">
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
            >
              Quero a formação
            </a>
          </div>

          <div className="flex items-center gap-4 lg:hidden">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${isScrolled ? 'lumina-btn-outline' : 'lumina-btn-outline-light'} !px-5 !py-2.5 !text-[9.5px]`}
            >
              Quero a formação
            </a>
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
        </div>
      )}
    </>
  );
};
