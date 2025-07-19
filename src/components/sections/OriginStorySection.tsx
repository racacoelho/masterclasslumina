export const OriginStorySection = () => {
  return (
    <section className="lumina-section-black">
      <div className="lumina-container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* CEO Image */}
          <div className="lg:w-1/2 lumina-mobile-spacing">
            <img 
              src="/lovable-uploads/81a7845b-c2d9-4f46-a436-4b2dbd5646de.png"
              alt="Raquel Negre - Fundadora Lumina Beauty Hair"
              className="lumina-mobile-image shadow-xl"
            />
          </div>

          {/* Story content */}
          <div className="lg:w-1/2">
            <h2 className="lumina-heading-lg font-serif lumina-text-gold">
              A história por trás da Lumina
            </h2>
            
            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                <strong className="lumina-text-gold">Eu não sou cabeleireira.</strong> Sou empreendedora e usuária do método.
              </p>
              
              <p className="text-lg leading-relaxed">
                Quando comecei a usar mega hair, só existia queratina: aplicação demorada, fios danificados e zero conforto.
              </p>
              
              <p className="text-lg leading-relaxed">
                Viajei para Ásia e Europa em busca da solução e trouxe para o Brasil a tecnologia que mudou tudo:
              </p>
              
              <p className="text-lg leading-relaxed">
                a fita ultrafina de <strong className="lumina-text-gold">0,04mm</strong>, mais fina que uma folha A4, resistente e totalmente imperceptível.
              </p>
              
              <p className="text-lg leading-relaxed">
                Hoje, centenas de profissionais usam essa tecnologia para entregar resultados naturais, fidelizar clientes e se destacar no mercado.
              </p>
              
              <div className="bg-accent/10 border border-accent/20 p-6 rounded-lg">
                <p className="text-lg font-semibold lumina-text-gold">
                  "Minha missão é que toda mulher tenha acesso ao melhor em mega hair, 
                  sem comprometer a saúde dos seus fios." - Raquel Negre
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};