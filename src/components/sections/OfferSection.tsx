import { Award, Clock, MessageCircle, ShieldCheck } from 'lucide-react';

export const OfferSection = () => {
  const handleCTAClick = () => {
    window.open('https://pay.kiwify.com.br/hK6DKTn', '_blank');
  };

  return (
    <section id="oferta" className="lumina-section bg-background">
      <div className="lumina-container">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="lumina-eyebrow">A formação</p>
            <h2 className="lumina-heading-xl mb-6">
              Formação Profissional <span className="lumina-gold">Dermasilk™</span>
            </h2>
            <div className="lumina-gold-line-center"></div>
          </div>

          {/* Pricing Card */}
          <div className="border border-border p-8 md:p-12 text-center mb-8">
            {/* Price */}
            <div className="mb-10">
              <p className="lumina-price-current">R$ 247</p>
              <p className="lumina-price-installment">
                ou 3x de R$ 82,00 sem juros. Pix com desconto.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5 mb-10 text-sm text-muted-foreground">
              {[{ icon: Clock, text: 'Acesso vitalício às aulas' }, { icon: Award, text: 'Certificado digital ao concluir' }, { icon: MessageCircle, text: 'Suporte por WhatsApp para alunas' }, { icon: ShieldCheck, text: 'Garantia de 30 dias' }].map(({ icon: Icon, text }) => (
                <div key={text} className="flex flex-col items-center gap-3">
                  <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button 
              onClick={handleCTAClick}
              className="w-full py-5 bg-foreground text-background font-medium text-sm uppercase tracking-[0.1em] transition-all duration-300 hover:bg-foreground/90 mb-6"
            >
               Quero a formação
            </button>
          </div>

          {/* Guarantee note */}
          <p className="text-center text-sm text-muted-foreground">
            A formação existe pra dar critério à escolha antes da aplicação. É o que separa aplicar fita adesiva de construir uma extensão pra cada cliente.
          </p>
        </div>
      </div>
    </section>
  );
};
