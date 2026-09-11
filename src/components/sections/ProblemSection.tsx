export const ProblemSection = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-background">
      <div className="lumina-container">
        <div className="max-w-2xl mx-auto">
          {/* Eyebrow */}
          <p className="lumina-eyebrow text-center mb-4">O problema</p>
          
          {/* Heading */}
          <h2 className="lumina-heading-xl text-center mb-6">
            Uma base só não responde a <span className="lumina-gold">toda cliente.</span>
          </h2>
          
          <div className="lumina-gold-line-center mb-10"></div>

          <p className="text-foreground/80 text-center text-base md:text-lg leading-relaxed mb-10">
            Duas clientes pedem a mesma coisa na mesma semana. Uma tem pouco cabelo na lateral e precisa que aquilo fique coberto. A outra prende o cabelo pra cima o dia inteiro e não aceita sentir marcação. As duas pedem fita. As duas não precisam da mesma fita. E quando a profissional tem uma base só, ela não escolhe. Ela adapta.
          </p>
          <div className="py-6 border-l border-accent/30 pl-6 max-w-md mx-auto">
            <p className="text-xl md:text-2xl text-foreground font-serif leading-relaxed">
              Ela não escolhe. Ela adapta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
