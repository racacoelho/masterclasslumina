export const OpportunitySection = () => {
  const steps = [
    'diagnosticar',
    'escolher a base',
    'desenhar o mapa',
    'construir a arquitetura',
    'aplicar',
    'fundir',
  ];

  return (
    <section id="sistema" className="lumina-section bg-background">
      <div className="lumina-container-wide">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24 lg:items-end lumina-reveal">
          <div>
            <p className="lumina-eyebrow">O Sistema</p>
            <h2 className="lumina-h2 mt-7 lowercase max-w-[11ch]">uma metodologia antes da aplicação.</h2>
          </div>
          <p className="lumina-body max-w-[46rem] lg:pb-2">
            O resultado começa antes da primeira mecha. A Formação Profissional Dermasilk™ ensina a analisar cada
            cliente, definir a base adequada e construir um projeto de harmonização capilar com intenção, precisão e
            acabamento.
          </p>
        </div>

        <ol className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 lumina-reveal">
          {steps.map((step, index) => (
            <li
              key={step}
              className="relative pt-8 pb-8 lg:pb-0 lg:pr-7 border-t border-border lg:min-h-[14rem]"
            >
              <span className="lumina-label block">{String(index + 1).padStart(2, '0')}</span>
              <span className="mt-8 md:mt-14 block font-serif text-[1.35rem] md:text-[1.5rem] lg:text-[1.65rem] leading-[1.25] lowercase text-foreground">
                {step}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
