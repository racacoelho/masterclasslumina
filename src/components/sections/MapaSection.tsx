export const MapaSection = () => {
  const groups = [
    'Cinco mapas de aplicação e arquitetura por objetivo e densidade.',
    'Sequência visual de aplicação, matriz de correção e solução de problemas.',
    'Cuidados Dermasilk™ para orientar a cliente.',
    'Checklist de projeto e ficha de diagnóstico profissional em duas páginas.',
  ];

  return (
    <section className="lumina-section-tight bg-secondary">
      <div className="lumina-container">
        <div className="grid grid-cols-1 lg:grid-cols-[38fr_62fr] gap-10 lg:gap-24">
          <div className="lumina-reveal">
            <p className="lumina-eyebrow">Ferramenta profissional complementar</p>
            <h2 className="lumina-h2 mt-6">Mapa Dermasilk™</h2>
            <p className="lumina-lead mt-5 max-w-[32ch]">
              Guia profissional de diagnóstico, arquitetura e aplicação.
            </p>
            <p className="lumina-body mt-6 max-w-[42ch]">
              Uma ferramenta de consulta para transformar o aprendizado da Masterclass em um projeto de
              aplicação organizado, do diagnóstico ao acompanhamento.
            </p>
            <div className="mt-9">
              <span className="lumina-gold-line" aria-hidden="true" />
              <p className="mt-4 text-[0.95rem] font-light text-foreground/65">
                39 páginas · Guia digital ilustrado
              </p>
            </div>
          </div>

          <div className="lumina-reveal">
            <ul className="border-t border-border">
              {groups.map((group, index) => (
                <li
                  key={group}
                  className="flex items-baseline gap-6 md:gap-10 py-6 md:py-7 border-b border-border"
                >
                  <span className="lumina-label">{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-[1.0625rem] md:text-[1.25rem] text-foreground font-light">{group}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 max-w-[54ch] text-[0.95rem] leading-[1.85] font-light text-foreground/70">
              Produto digital complementar, vendido separadamente. A compra da Masterclass não inclui este guia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
