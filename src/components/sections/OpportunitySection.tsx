export const OpportunitySection = () => {
  return (
    <section className="lumina-section-black">
      <div className="lumina-container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="lg:w-1/2 lumina-mobile-spacing">
            <div className="relative">
              <img 
                src="/lovable-uploads/a6ff80fb-39cd-4945-be6b-0a0ebd7fb00f.png"
                alt="Fita adesiva ultrafina Lumina"
                className="lumina-mobile-image shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 lumina-bg-gold text-black px-4 py-2 rounded-full font-bold">
                ✅ Fita Ultrafina
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="lg:w-1/2">
            <h2 className="lumina-heading-lg font-serif lumina-text-gold">
              Tecnologia de Fita Ultraestratégica™
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Enquanto o mercado comum trabalha com fitas de 0,8mm a 1,2mm de espessura, 
              a Lumina desenvolveu uma base de <strong className="lumina-text-gold">apenas 0,04mm</strong>.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Isso significa que nossa fita é <strong className="lumina-text-gold">20x mais fina</strong> 
              que as convencionais. O resultado? Totalmente imperceptível ao toque e à vista.
            </p>
            
            <div className="bg-accent/10 border border-accent/20 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold lumina-text-gold mb-4">Comparativo:</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-gray-500 rounded"></div>
                  <span className="text-gray-300">Fita comum: 0,8mm - 1,2mm</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-1 lumina-bg-gold rounded"></div>
                  <span className="lumina-text-gold font-bold">Fita Lumina: 0,04mm</span>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              <strong>Resultado:</strong> Suas clientes podem usar rabo de cavalo, coque, 
              qualquer penteado sem medo. É como se o cabelo tivesse nascido assim.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};