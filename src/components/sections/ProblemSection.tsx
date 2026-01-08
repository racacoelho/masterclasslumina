export const ProblemSection = () => {
  const handleCTAClick = () => {
    window.open('https://pay.kiwify.com.br/hK6DKTn', '_blank');
  };

  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-background">
      <div className="lumina-container">
        <div className="max-w-2xl mx-auto">
          {/* Eyebrow */}
          <p className="lumina-eyebrow text-center mb-4">O problema</p>
          
          {/* Heading */}
          <h2 className="lumina-heading-xl text-center mb-6">
            Síndrome da <span className="lumina-gold">Fita Visível</span>
          </h2>
          
          <div className="lumina-gold-line-center mb-10"></div>

          {/* Lead sentence */}
          <p className="text-foreground/90 text-center text-base md:text-lg leading-relaxed mb-8">
            <span className="font-medium">O problema não é sua técnica.</span>{" "}
            É o material que você está usando.
          </p>

          {/* Bullet points - concise */}
          <ul className="space-y-3 mb-12 max-w-md mx-auto">
            <li className="flex items-start gap-3 text-foreground/70 text-sm md:text-base">
              <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0"></span>
              <span>Clientes reclamam que a fita aparece</span>
            </li>
            <li className="flex items-start gap-3 text-foreground/70 text-sm md:text-base">
              <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0"></span>
              <span>Fitas grossas causam desconforto e se soltam</span>
            </li>
            <li className="flex items-start gap-3 text-foreground/70 text-sm md:text-base">
              <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0"></span>
              <span>Concorrentes já usam uma tecnologia que você não conhece</span>
            </li>
          </ul>

          {/* Pull Quote - refined */}
          <div className="my-10 py-6 border-l border-accent/30 pl-6">
            <blockquote className="text-foreground/60 text-base md:text-lg italic font-serif leading-relaxed">
              "Minha cliente disse que parecia que tinha uma régua colada na cabeça"
            </blockquote>
            <p className="text-xs text-foreground/40 mt-3 tracking-wide uppercase">
              — Depoimento real
            </p>
          </div>

          {/* Image */}
          <div className="relative mt-12 mb-10">
            <img 
              src="/lovable-uploads/1a5a0209-b36a-4d90-beda-4f87adaf67d0.png"
              alt="Exemplo de fita adesiva grossa do mercado"
              className="w-full max-w-sm mx-auto opacity-90"
            />
            <p className="text-center text-xs text-foreground/40 mt-4 tracking-wide">
              Fita comum — visível e desconfortável
            </p>
          </div>

          {/* Subtle CTA */}
          <div className="text-center">
            <button 
              onClick={handleCTAClick}
              className="px-8 py-3 bg-foreground text-background text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 hover:bg-foreground/90"
            >
              Quero garantir agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
