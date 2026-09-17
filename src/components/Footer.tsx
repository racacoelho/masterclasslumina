export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-28 lg:py-20">
      <div className="lumina-container-wide">
        <div className="flex flex-col items-center gap-12">
          <img
            src="/lovable-uploads/38d359c6-1f95-4b23-b783-9abc8b373cb2.png"
            alt="Lumina Beauty Hair"
            className="h-auto w-[220px] max-w-[70vw] object-contain opacity-80"
          />

          <nav className="flex flex-col items-center text-center sm:flex-row sm:flex-wrap sm:justify-center gap-5 sm:gap-10">
            <a
              href="https://luminabeautyhair.com/dermasilk"
              target="_blank"
              rel="noopener noreferrer"
              className="lumina-nav-link"
            >
              conheça o Sistema Dermasilk™
            </a>
            <a href="https://luminabeautyhair.com/cores" target="_blank" rel="noopener noreferrer" className="lumina-nav-link">
              Catálogo de Cores
            </a>
            <a href="https://luminabeautyhair.com" target="_blank" rel="noopener noreferrer" className="lumina-nav-link">
              site principal
            </a>
            <a
              href="https://www.instagram.com/luminabeautyhair?igsh=MWs4ZDN6cGExaTJiNg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="lumina-nav-link"
            >
              Dermasilk™
            </a>
            <a href="mailto:contato@luminabeautyhair.com" className="lumina-nav-link">
              contato@luminabeautyhair.com
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="lumina-nav-link"
            >
              Fale conosco
            </a>
          </nav>
        </div>

        <div className="mt-14 pt-7 border-t border-border text-center">
          <p className="lumina-label">© 2026 Lumina Beauty Hair · Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};
