export const ProblemSection = () => {
  return (
    <section className="lumina-section bg-background">
      <div className="lumina-container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-[52fr_48fr] gap-12 lg:gap-20 items-center">
          {/* Texto editorial */}
          <div>
            <p className="lumina-eyebrow">O problema</p>

            <h2 className="lumina-heading-xl mb-10 max-w-xl">
              Uma base só não responde a <span className="lumina-gold">toda cliente.</span>
            </h2>

            <p className="text-foreground/80 text-lg md:text-xl leading-[1.8] font-light max-w-2xl">
              Duas clientes pedem a mesma coisa na mesma semana. Uma tem pouco cabelo na lateral e precisa que aquilo fique coberto. A outra prende o cabelo pra cima o dia inteiro e não aceita sentir marcação. As duas pedem fita. As duas não precisam da mesma fita. E quando a profissional tem uma base só, ela não escolhe. Ela adapta.
            </p>

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 border-t border-border">
              <div className="py-8 sm:pr-10 border-b sm:border-b-0 sm:border-r border-border">
                <span className="lumina-label block mb-4">Decisão 01</span>
                <p className="font-serif text-2xl md:text-3xl leading-snug text-foreground">
                  cobertura
                </p>
              </div>
              <div className="py-8 sm:pl-10">
                <span className="lumina-label block mb-4">Decisão 02</span>
                <p className="font-serif text-2xl md:text-3xl leading-snug text-foreground">
                  marcação
                </p>
              </div>
            </div>
          </div>

          {/* Fotografia editorial */}
          <div>
            <img
              src="/lovable-uploads/988b757e-69cf-4e51-9d68-d356c8c9c014.png"
              alt="Detalhe de raiz com mechas de fita adesiva posicionadas"
              width="1200"
              height="1600"
              loading="lazy"
              decoding="async"
              className="w-full h-[60vh] lg:h-[82vh] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
