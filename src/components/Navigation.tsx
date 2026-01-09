import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Tecnologia', href: '#tecnologia' },
  { label: 'Conteúdo', href: '#conteudo' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Oferta', href: '#oferta' },
  { label: 'FAQ', href: '#faq' },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`lumina-nav transition-all duration-300 ${isScrolled ? 'py-3' : 'py-4 md:py-6'}`}>
        <div className="lumina-container flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" onClick={() => handleLinkClick('#hero')}>
            <img 
              src="/lumina-logo.png" 
              alt="Lumina Beauty Hair" 
              width="120"
              height="40"
              className="h-8 md:h-10 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="lumina-nav-link"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 text-foreground"
            aria-label="Abrir menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lumina-mobile-menu">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 p-2 text-foreground"
            aria-label="Fechar menu"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="lumina-mobile-link"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
