import { Shield } from 'lucide-react';

export const GuaranteeSection = () => {
  return (
    <section className="lumina-section-dark">
      <div className="lumina-container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 border border-accent text-accent mb-8">
            <Shield className="w-7 h-7" strokeWidth={1.5} />
          </div>
          
          <h2 className="lumina-heading-xl text-background mb-6">
            Garantia de <span className="lumina-gold">30 dias</span>
          </h2>
          
          <div className="lumina-gold-line-center mb-10"></div>
          
          <p className="text-lg text-background/70 leading-relaxed mb-10">
            Estamos tão confiantes na qualidade do nosso Master Class que oferecemos uma garantia completa de 30 dias.
          </p>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <p className="text-3xl font-semibold text-background font-serif mb-2">30 dias</p>
              <p className="text-sm text-background/60 uppercase tracking-[0.1em]">Para testar tudo</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-background font-serif mb-2">Sem perguntas</p>
              <p className="text-sm text-background/60 uppercase tracking-[0.1em]">Devolução simples</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-background font-serif mb-2">100%</p>
              <p className="text-sm text-background/60 uppercase tracking-[0.1em]">Garantia total</p>
            </div>
          </div>
          
          {/* How it works */}
          <div className="border border-background/20 p-8">
            <p className="text-background/80 leading-relaxed">
              <span className="text-background font-medium">Como funciona:</span> Você tem 30 dias para assistir ao curso, aplicar as técnicas e ver os resultados. 
              Se por qualquer motivo não ficar satisfeita, devolvemos 100% do seu dinheiro. 
              Simples assim.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
