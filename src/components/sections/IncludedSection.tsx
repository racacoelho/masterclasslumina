export const IncludedSection = () => {
  const items = [
    'Cinco módulos gravados',
    'Acesso vitalício às aulas',
    'Certificado digital',
    'Suporte por WhatsApp',
    'Garantia de 30 dias',
  ];

  return (
    <section className="lumina-section bg-background">
      <div className="lumina-container">
        <div className="max-w-2xl mb-14 md:mb-20">
          <p className="lumina-eyebrow">O que vem junto</p>
          <h2 className="lumina-heading-xl">Tudo o que está incluído.</h2>
        </div>

        <ul className="border-t border-border">
          {items.map((item, index) => (
            <li key={item} className="flex items-baseline gap-6 md:gap-10 py-6 md:py-7 border-b border-border">
              <span className="lumina-label text-accent/80">{String(index + 1).padStart(2, '0')}</span>
              <span className="text-lg md:text-xl text-foreground font-light">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
