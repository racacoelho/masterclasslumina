export const ProblemSection = () => {
  return (
    <section className="lumina-section bg-background">
      <div className="lumina-container">
        <div className="max-w-3xl mx-auto">
          {/* Eyebrow */}
          <p className="lumina-eyebrow text-center">O problema</p>
          
          {/* Heading */}
          <h2 className="lumina-heading-xl text-center mb-8">
            Síndrome da <span className="lumina-gold">Fita Visível</span>
          </h2>
          
          <div className="lumina-gold-line-center mb-12"></div>

          {/* Content */}
          <div className="space-y-6">
            <p className="lumina-body">
              Você já perdeu uma cliente porque ela reclamou que a fita adesiva estava aparecendo? 
              Ou pior: ela saiu do salão "satisfeita" mas nunca mais voltou?
            </p>
            
            <p className="lumina-body">
              <span className="text-foreground font-medium">O problema não é sua técnica.</span> É o material que você está usando.
            </p>
            
            <p className="lumina-body">
              Enquanto você luta com fitas grossas que aparecem, se soltam e causam desconforto, 
              suas concorrentes estão usando uma tecnologia que você ainda não conhece.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="my-12">
            <blockquote className="lumina-pullquote">
              "Minha cliente disse que parecia que tinha uma régua colada na cabeça dela"
            </blockquote>
            <p className="text-sm text-muted-foreground mt-4 pl-6">
              — Depoimento real de uma cabeleireira
            </p>
          </div>

          {/* Image */}
          <div className="relative mt-16">
            <img 
              src="/lovable-uploads/1a5a0209-b36a-4d90-beda-4f87adaf67d0.png"
              alt="Exemplo de fita adesiva grossa do mercado"
              className="w-full max-w-lg mx-auto"
            />
            <p className="text-center text-sm text-muted-foreground mt-4">
              Fita comum — visível e desconfortável
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
