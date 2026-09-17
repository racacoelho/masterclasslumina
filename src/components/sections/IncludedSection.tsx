export const IncludedSection = () => {
  const items = [
    'Cinco módulos gravados',
    'Acesso vitalício às aulas',
    'Certificado digital',
    'Suporte por WhatsApp',
    'Garantia de 30 dias',
  ];

  return (
    <section className="lumina-section-tight bg-background">
      <div className="lumina-container">
        <div className="grid grid-cols-1 lg:grid-cols-[34fr_66fr] gap-10 lg:gap-24">
          <div className="lumina-reveal">
            <p className="lumina-eyebrow">A formação</p>
            <h2 className="lumina-h2 mt-6 lowercase">o que você recebe.</h2>
          </div>

          <ul className="border-t border-border lumina-reveal">
            {items.map((item, index) => (
              <li
                key={item}
                className="flex items-baseline gap-6 md:gap-12 py-6 md:py-7 border-b border-border"
              >
                <span className="lumina-label">{String(index + 1).padStart(2, '0')}</span>
                <span className="text-[1.0625rem] md:text-[1.25rem] text-foreground font-light">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
