import { Shield, Clock, RefreshCw } from 'lucide-react';

export const GuaranteeSection = () => {
  return (
    <section className="lumina-section-white">
      <div className="lumina-container text-center">
        <div className="max-w-3xl mx-auto">
          <div className="bg-accent/10 border border-accent/20 p-8 rounded-lg">
            <Shield className="w-16 h-16 text-accent mx-auto lumina-mobile-spacing" />
            
            <h2 className="lumina-heading-md font-serif lumina-text-black">
              Garantia de <span className="text-accent">30 dias</span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Estamos tão confiantes na qualidade do nosso Master Class que oferecemos uma garantia completa de 30 dias.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Clock className="w-8 h-8 text-accent mx-auto mb-3" />
                <h4 className="font-bold lumina-text-black mb-2">30 dias</h4>
                <p className="text-gray-600">Para testar tudo</p>
              </div>
              <div className="text-center">
                <RefreshCw className="w-8 h-8 text-accent mx-auto mb-3" />
                <h4 className="font-bold lumina-text-black mb-2">Sem perguntas</h4>
                <p className="text-gray-600">Devolução simples</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-accent mx-auto mb-3" />
                <h4 className="font-bold lumina-text-black mb-2">100% do valor</h4>
                <p className="text-gray-600">Garantia total</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-accent/10">
              <p className="text-gray-700 leading-relaxed">
                <strong>Como funciona:</strong> Você tem 30 dias para assistir ao curso, aplicar as técnicas e ver os resultados. 
                Se por qualquer motivo não ficar satisfeita, devolvemos 100% do seu dinheiro. 
                Simples assim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};