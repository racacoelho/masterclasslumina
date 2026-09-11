export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-28 lg:py-20">
      <div className="lumina-container-wide">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          <img
            src="/lovable-uploads/38d359c6-1f95-4b23-b783-9abc8b373cb2.png"
            alt="Lumina Beauty Hair"
            className="h-7 opacity-80"
          />

          <nav className="flex flex-col sm:flex-row sm:flex-wrap gap-5 sm:gap-10">
            <a
              href="https://luminabeautyhair.com"
              target="_blank"
              rel="noopener noreferrer"
              className="lumina-nav-link"
            >
              Sistema Dermasilk™
            </a>
            <a
              href="https://www.instagram.com/luminabeautyhair?igsh=MWs4ZDN6cGExaTJiNg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="lumina-nav-link"
            >
              @luminabeautyhair
            </a>
            <a href="mailto:contato@luminabeautyhair.com" className="lumina-nav-link">
              contato@luminabeautyhair.com
            </a>
            <a
              href="https://wa.me/556298570375"
              target="_blank"
              rel="noopener noreferrer"
              className="lumina-nav-link"
            >
              Fale conosco
            </a>
          </nav>
        </div>

        <div className="mt-14 pt-7 border-t border-border">
          <p className="lumina-label">© 2026 Lumina Beauty Hair · Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};
