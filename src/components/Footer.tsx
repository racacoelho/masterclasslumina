import { Instagram, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="lumina-bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/38d359c6-1f95-4b23-b783-9abc8b373cb2.png"
              alt="Lumina Beauty Hair Logo"
              className="h-16 mx-auto"
            />
          </div>

          {/* Contact info */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <a 
              href="https://www.instagram.com/luminabeautyhair?igsh=MWs4ZDN6cGExaTJiNg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors"
            >
              <Instagram className="w-5 h-5 text-accent" />
              <span>@luminabeautyhair</span>
            </a>
            <div className="flex items-center gap-3 text-gray-300">
              <Mail className="w-5 h-5 text-accent" />
              <span>luminabeuatyhair@gmail.com</span>
            </div>
            <a 
              href="https://wa.me/luminabeautyhair"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors"
            >
              <Phone className="w-5 h-5 text-accent" />
              <span>Fale conosco no WhatsApp</span>
            </a>
          </div>

          {/* Legal links */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8 text-sm text-gray-400">
            <a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-accent transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-accent transition-colors">Política de Reembolso</a>
          </div>

          {/* Security badges */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-green-600 text-white px-3 py-1 rounded text-xs font-bold">
              🔒 SITE SEGURO
            </div>
            <div className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-bold">
              SSL CERTIFICADO
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm">
            <p className="mb-2">
              © 2025 Lumina Beauty Hair. Todos os direitos reservados.
            </p>
            <p className="text-xs">
              CNPJ: 51.160.891/0001-84 | Referência em mega hair desde 2012
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};