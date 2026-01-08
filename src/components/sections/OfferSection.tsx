import { Lock, CreditCard, Zap } from 'lucide-react';

interface OfferSectionProps {
  timeLeft: {
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export const OfferSection = ({ timeLeft }: OfferSectionProps) => {
  const handleCTAClick = () => {
    window.open('https://pay.kiwify.com.br/hK6DKTn', '_blank');
  };

  return (
    <section id="oferta" className="lumina-section bg-background">
      <div className="lumina-container">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="lumina-eyebrow">Oferta especial</p>
            <h2 className="lumina-heading-xl mb-6">
              Garanta sua vaga <span className="lumina-gold">agora</span>
            </h2>
            <div className="lumina-gold-line-center"></div>
          </div>

          {/* Pricing Card */}
          <div className="border border-border p-8 md:p-12 text-center mb-8">
            {/* Timer */}
            <div className="mb-10">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Oferta expira em
              </p>
              <div className="flex items-center justify-center gap-2 text-foreground">
                <span className="text-3xl md:text-4xl font-medium tabular-nums">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="text-muted-foreground text-2xl">:</span>
                <span className="text-3xl md:text-4xl font-medium tabular-nums">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="text-muted-foreground text-2xl">:</span>
                <span className="text-3xl md:text-4xl font-medium tabular-nums">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-10">
              <p className="lumina-price-old mb-2">De R$ 497</p>
              <p className="lumina-price-current">R$ 247</p>
              <p className="lumina-price-installment">
                ou 3x de R$ 82,00 sem juros
              </p>
            </div>

            {/* CTA */}
            <button 
              onClick={handleCTAClick}
              className="w-full py-5 bg-foreground text-background font-medium text-sm uppercase tracking-[0.1em] transition-all duration-300 hover:bg-foreground/90 mb-6"
            >
              Quero garantir agora
            </button>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4" strokeWidth={1.5} />
                <span>Pagamento seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4" strokeWidth={1.5} />
                <span>PIX ou Cartão</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" strokeWidth={1.5} />
                <span>Acesso imediato</span>
              </div>
            </div>
          </div>

          {/* Guarantee note */}
          <p className="text-center text-sm text-muted-foreground">
            Garantia de 30 dias. Se não gostar, devolvemos 100% do seu dinheiro.
          </p>
        </div>
      </div>
    </section>
  );
};
