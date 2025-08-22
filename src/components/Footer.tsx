import { Instagram, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="lumina-bg-black py-16 lg:py-20 xl:py-24">
      <div className="lumina-container-desktop">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="lumina-desktop-spacing">
            <img 
              src="/lovable-uploads/38d359c6-1f95-4b23-b783-9abc8b373cb2.png"
              alt="Lumina Beauty Hair Logo"
              className="h-16 lg:h-20 xl:h-24 mx-auto"
            />
          </div>

          {/* Contact info */}
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12 xl:gap-16 lumina-desktop-spacing">
            <a 
              href="https://www.instagram.com/luminabeautyhair?igsh=MWs4ZDN6cGExaTJiNg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors text-lg lg:text-xl"
            >
              <Instagram className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-accent" />
              <span>@luminabeautyhair</span>
            </a>
            <div className="flex items-center gap-3 text-gray-300 text-lg lg:text-xl">
              <Mail className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-accent" />
              <span>luminabeuatyhair@gmail.com</span>
            </div>
            <a 
              href="https://wa.me/luminabeautyhair"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors text-lg lg:text-xl"
            >
              <Phone className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-accent" />
              <span>Fale conosco no WhatsApp</span>
            </a>
          </div>

          {/* Legal links */}
          <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-8 xl:gap-12 lumina-desktop-spacing text-sm lg:text-base text-gray-400">
            <a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-accent transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-accent transition-colors">Política de Reembolso</a>
          </div>

          {/* Security badges */}
          <div className="flex items-center gap-4 lg:gap-6 xl:gap-8 lumina-desktop-spacing">
            <div className="bg-green-600 text-white px-3 py-1 lg:px-4 lg:py-2 rounded text-xs lg:text-sm font-bold">
              🔒 SITE SEGURO
            </div>
            <div className="bg-blue-600 text-white px-3 py-1 lg:px-4 lg:py-2 rounded text-xs lg:text-sm font-bold">
              SSL CERTIFICADO
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm lg:text-base">
            <p className="mb-2">
              © 2025 Lumina Beauty Hair. Todos os direitos reservados.
            </p>
            <p className="text-xs lg:text-sm">
              CNPJ: 51.160.891/0001-84 | Referência em mega hair desde 2012
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};