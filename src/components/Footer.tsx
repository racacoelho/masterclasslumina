import { Instagram, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-16 lg:py-20 xl:py-24">
      <div className="lumina-container-desktop">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-10 lg:mb-12">
            <img 
              src="/lovable-uploads/38d359c6-1f95-4b23-b783-9abc8b373cb2.png"
              alt="Lumina Beauty Hair Logo"
              className="h-12 lg:h-14 xl:h-16 mx-auto"
            />
          </div>

          {/* Contact info */}
          <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-10 xl:gap-14 mb-10 lg:mb-12">
            <a 
              href="https://www.instagram.com/luminabeautyhair?igsh=MWs4ZDN6cGExaTJiNg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-muted-foreground hover:text-foreground transition-colors text-sm lg:text-base tracking-wide"
            >
              <Instagram className="w-4 h-4 lg:w-[18px] lg:h-[18px] stroke-[1.5]" />
              <span>@luminabeautyhair</span>
            </a>
            <a 
              href="mailto:contato@luminabeautyhair.com"
              className="flex items-center gap-2.5 text-muted-foreground hover:text-foreground transition-colors text-sm lg:text-base tracking-wide"
            >
              <Mail className="w-4 h-4 lg:w-[18px] lg:h-[18px] stroke-[1.5]" />
              <span>contato@luminabeautyhair.com</span>
            </a>
            <a 
              href="https://wa.me/luminabeautyhair"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-muted-foreground hover:text-foreground transition-colors text-sm lg:text-base tracking-wide"
            >
              <Phone className="w-4 h-4 lg:w-[18px] lg:h-[18px] stroke-[1.5]" />
              <span>Fale conosco</span>
            </a>
          </div>

          {/* Legal links */}
          <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-8 xl:gap-10 mb-10 lg:mb-12 text-xs lg:text-sm text-muted-foreground tracking-wide">
            <a href="#" className="hover:text-foreground transition-colors">Política de Privacidade</a>
            <span className="hidden md:inline text-border">·</span>
            <a href="#" className="hover:text-foreground transition-colors">Termos de Uso</a>
            <span className="hidden md:inline text-border">·</span>
            <a href="#" className="hover:text-foreground transition-colors">Política de Reembolso</a>
          </div>

          {/* Security badges - refined minimal style */}
          <div className="flex items-center gap-4 lg:gap-6 mb-10 lg:mb-12">
            <div className="border border-border text-muted-foreground px-3 py-1.5 lg:px-4 lg:py-2 rounded text-[10px] lg:text-xs tracking-widest uppercase">
              Site Seguro
            </div>
            <div className="border border-border text-muted-foreground px-3 py-1.5 lg:px-4 lg:py-2 rounded text-[10px] lg:text-xs tracking-widest uppercase">
              SSL Certificado
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-muted-foreground">
            <p className="text-xs lg:text-sm tracking-wide mb-1.5">
              © 2025 Lumina Beauty Hair. Todos os direitos reservados.
            </p>
            <p className="text-[10px] lg:text-xs tracking-wide opacity-70">
              CNPJ: 51.160.891/0001-84 · Referência em mega hair desde 2012
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};