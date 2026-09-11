export const OpportunitySection = () => {
  const steps = [
    'entender a cliente',
    'escolher a base',
    'escolher a coleção',
    'escolher a cor',
    'aplicar',
  ];

  return (
    <section id="sistema" className="lumina-section bg-background">
      <div className="lumina-container-wide">
        <div className="max-w-3xl mx-auto text-center lumina-reveal">
          <p className="lumina-eyebrow">O Sistema Dermasilk™</p>
          <h2 className="lumina-h2 mt-7 lowercase">a sequência de cada atendimento.</h2>
        </div>

        <ol className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-5 lumina-reveal">
          {steps.map((step, index) => (
            <li
              key={step}
              className="relative pt-8 pb-8 md:pb-0 md:pr-8 border-t border-border md:min-h-[15rem]"
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
