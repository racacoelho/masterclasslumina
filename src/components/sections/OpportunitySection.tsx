export const OpportunitySection = () => {
  const steps = [
    "Entender a cliente",
    "Escolher a base",
    "Escolher a coleção",
    "Escolher a cor",
    "Aplicar",
  ];

  return (
    <section id="sistema" className="lumina-section-dark">
      <div className="lumina-container">
        <div className="max-w-4xl mx-auto text-center">
          <p className="lumina-eyebrow text-background/60">O Sistema Dermasilk™</p>
          <h2 className="lumina-heading-xl text-background mb-6">A sequência de cada atendimento.</h2>
          <div className="lumina-gold-line-center mb-12"></div>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border border-background/20">
            {steps.map((step, index) => (
              <li key={step} className="p-6 lg:p-8 border-b sm:border-b-0 sm:border-r border-background/20 last:border-0 text-left">
                <span className="block text-accent font-serif text-2xl mb-4">{String(index + 1).padStart(2, '0')}</span>
                <span className="text-background/80 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
