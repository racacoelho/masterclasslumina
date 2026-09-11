export const ProblemSection = () => {
  return (
    <section className="lumina-section bg-background">
      <div className="lumina-container">
        {/* Abertura editorial centrada, no ritmo do site principal */}
        <div className="max-w-3xl mx-auto text-center lumina-reveal">
          <p className="lumina-eyebrow">O problema</p>
          <h2 className="lumina-h2 mt-7 lowercase">uma base só não responde a toda cliente.</h2>
        </div>
      </div>

      <div className="lumina-container-wide mt-16 md:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-[56fr_44fr] gap-12 lg:gap-24 items-center">
          <div className="lumina-reveal">
            <img
              src="/lovable-uploads/988b757e-69cf-4e51-9d68-d356c8c9c014.png"
              alt="Detalhe de raiz com mechas de fita adesiva posicionadas"
              width="1200"
              height="1500"
              loading="lazy"
              decoding="async"
              className="lumina-media h-[64vh] lg:h-[86vh]"
            />
          </div>

          <div className="lumina-reveal">
            <p className="text-foreground/85 text-[1.0625rem] md:text-xl lg:text-[1.35rem] leading-[1.8] font-light lumina-measure">
              Duas clientes pedem a mesma coisa na mesma semana. Uma tem pouco cabelo na lateral e precisa que aquilo
              fique coberto. A outra prende o cabelo pra cima o dia inteiro e não aceita sentir marcação. As duas pedem
              fita. As duas não precisam da mesma fita. E quando a profissional tem uma base só, ela não escolhe. Ela
              adapta.
            </p>

            <div className="mt-14 border-t border-border">
              <div className="py-7 border-b border-border flex items-baseline justify-between gap-8">
                <span className="lumina-label">Decisão 01</span>
                <span className="font-serif text-2xl md:text-3xl lowercase text-foreground">cobertura</span>
              </div>
              <div className="py-7 flex items-baseline justify-between gap-8">
                <span className="lumina-label">Decisão 02</span>
                <span className="font-serif text-2xl md:text-3xl lowercase text-foreground">marcação</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
