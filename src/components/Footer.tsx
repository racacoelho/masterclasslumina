import { Instagram, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-background py-20 lg:py-24 xl:py-28">
      <div className="lumina-container-desktop">
        <div className="flex flex-col items-center text-center space-y-8 lg:space-y-10">
          {/* Logo */}
          <img 
            src="/lumina-logo.png"
            alt="Lumina Beauty Hair Logo"
            width="144"
            height="48"
            className="h-10 lg:h-12 w-auto mx-auto opacity-90"
          />

          {/* Contact info */}
          <div className="flex flex-col md:flex-row items-center gap-5 md:gap-8 lg:gap-12">
            <a 
              href="https://www.instagram.com/luminabeautyhair?igsh=MWs4ZDN6cGExaTJiNg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground/60 hover:text-foreground/90 transition-colors text-sm tracking-wide"
            >
              <Instagram className="w-4 h-4 stroke-[1.25]" />
              <span>@luminabeautyhair</span>
            </a>
            <a 
              href="mailto:contato@luminabeautyhair.com"
              className="flex items-center gap-2 text-foreground/60 hover:text-foreground/90 transition-colors text-sm tracking-wide"
            >
              <Mail className="w-4 h-4 stroke-[1.25]" />
              <span>contato@luminabeautyhair.com</span>
            </a>
            <a 
              href="https://wa.me/556298570375"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground/60 hover:text-foreground/90 transition-colors text-sm tracking-wide"
            >
              <Phone className="w-4 h-4 stroke-[1.25]" />
              <span>Fale conosco</span>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-foreground/40 tracking-wide">
            © 2025 Lumina Beauty Hair · Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};
