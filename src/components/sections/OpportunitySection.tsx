export const OpportunitySection = () => {
  const steps = [
    'Entender a cliente',
    'Escolher a base',
    'Escolher a coleção',
    'Escolher a cor',
    'Aplicar',
  ];

  return (
    <section id="sistema" className="lumina-section bg-background">
      <div className="lumina-container-wide">
        <div className="max-w-2xl mb-16 md:mb-24">
          <p className="lumina-eyebrow">O Sistema Dermasilk™</p>
          <h2 className="lumina-heading-xl">A sequência de cada atendimento.</h2>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-5 border-t border-border">
          {steps.map((step, index) => (
            <li
              key={step}
              className="py-8 md:py-12 md:px-6 first:md:pl-0 last:md:pr-0 border-b md:border-b-0 md:border-r border-border last:border-0"
            >
              <span className="lumina-index-number block mb-6">{String(index + 1).padStart(2, '0')}</span>
              <span className="lumina-gold-line block mb-6"></span>
              <span className="block text-base md:text-lg text-foreground font-light leading-snug">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
