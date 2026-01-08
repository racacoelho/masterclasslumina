export const OriginStorySection = () => {
  return (
    <section className="lumina-section-dark">
      <div className="lumina-container">
        <div className="lumina-grid-2 items-center">
          {/* CEO Image */}
          <div>
            <img 
              src="/lovable-uploads/81a7845b-c2d9-4f46-a436-4b2dbd5646de.png"
              alt="Raquel Negre - Fundadora Lumina Beauty Hair"
              className="w-full max-w-md mx-auto lg:mx-0"
            />
          </div>

          {/* Story content */}
          <div>
            <p className="lumina-eyebrow text-background/60">Nossa história</p>
            
            <h2 className="lumina-heading-xl text-background mb-8">
              A história por trás da <span className="lumina-gold">Lumina</span>
            </h2>
            
            <div className="lumina-gold-line mb-8"></div>
            
            <div className="space-y-6 text-background/70">
              <p className="text-lg leading-relaxed">
                <span className="text-background font-medium">Eu não sou cabeleireira.</span> Sou empreendedora e usuária do método.
              </p>
              
              <p className="text-lg leading-relaxed">
                Quando comecei a usar mega hair, só existia queratina: aplicação demorada, fios danificados e zero conforto.
              </p>
              
              <p className="text-lg leading-relaxed">
                Viajei para Ásia e Europa em busca da solução e trouxe para o Brasil a tecnologia que mudou tudo:
                a fita ultrafina de <span className="lumina-gold font-medium">0,04mm</span>, mais fina que uma folha A4, resistente e totalmente imperceptível.
              </p>
              
              <p className="text-lg leading-relaxed">
                Hoje, centenas de profissionais usam essa tecnologia para entregar resultados naturais, fidelizar clientes e se destacar no mercado.
              </p>
            </div>

            {/* Quote */}
            <div className="mt-10 border-l-2 border-accent pl-6">
              <p className="text-xl text-background italic font-serif leading-relaxed">
                "Minha missão é que toda mulher tenha acesso ao melhor em mega hair, 
                sem comprometer a saúde dos seus fios."
              </p>
              <p className="text-sm text-background/60 mt-4">
                — Raquel Negre, Fundadora
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
