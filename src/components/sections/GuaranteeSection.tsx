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
            Trinta dias pra assistir e aplicar. Se não fizer sentido pra sua cadeira, devolvemos o valor.
          </p>
          
        </div>
      </div>
    </section>
  );
};
