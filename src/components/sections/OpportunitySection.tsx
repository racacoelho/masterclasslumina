export const OpportunitySection = () => {
  return (
    <section id="tecnologia" className="lumina-section-dark">
      <div className="lumina-container">
        <div className="lumina-grid-2 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img 
              src="/lovable-uploads/a6ff80fb-39cd-4945-be6b-0a0ebd7fb00f.png"
              alt="Fita adesiva ultrafina Lumina"
              className="w-full max-w-md mx-auto lg:mx-0"
            />
            <p className="text-center lg:text-left text-sm text-background/60 mt-4">
              Fita Lumina — invisível e confortável
            </p>
          </div>

          {/* Text content */}
          <div className="order-1 lg:order-2">
            <p className="lumina-eyebrow text-background/60">A solução</p>
            
            <h2 className="lumina-heading-xl text-background mb-8">
              Tecnologia <span className="lumina-gold">Dermasilk™</span>
            </h2>
            
            <div className="lumina-gold-line mb-8"></div>
            
            <div className="space-y-6 text-background/70">
              <p className="text-lg leading-relaxed">
                Enquanto o mercado comum trabalha com fitas de 0,8mm a 1,2mm de espessura, 
                a Lumina desenvolveu uma base de <span className="lumina-gold font-medium">apenas 0,04mm</span>.
              </p>
              
              <p className="text-lg leading-relaxed">
                Isso significa que nossa fita é <span className="lumina-gold font-medium">20x mais fina</span> 
                que as convencionais. O resultado? Totalmente imperceptível ao toque e à vista.
              </p>
            </div>
            
            {/* Comparison */}
            <div className="mt-12 border border-background/20 p-6 md:p-8">
              <h3 className="text-lg uppercase tracking-[0.1em] text-background/60 mb-6">
                Comparativo
              </h3>
              
              <div className="space-y-4">
                <div className="lumina-comparison-item border-background/20">
                  <div className="w-4 h-4 bg-background/30 rounded-sm"></div>
                  <span className="text-background/60">Fita comum: 0,8mm - 1,2mm</span>
                </div>
                <div className="lumina-comparison-item border-background/20">
                  <div className="w-4 h-1 bg-accent rounded-sm"></div>
                  <span className="lumina-gold font-medium">Fita Lumina: 0,04mm</span>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-background/70 mt-8">
              <span className="text-background font-medium">Resultado:</span> Suas clientes podem usar rabo de cavalo, coque, 
              qualquer penteado sem medo. É como se o cabelo tivesse nascido assim.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
