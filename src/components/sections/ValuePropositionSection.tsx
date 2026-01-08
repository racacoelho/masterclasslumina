import { Clock, Eye, Gem, HeadphonesIcon } from 'lucide-react';

export const ValuePropositionSection = () => {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6" strokeWidth={1.5} />,
      title: "Aplicação em 40 minutos",
      description: "Enquanto outras técnicas levam 3 horas ou mais, você termina o serviço completo em menos de uma hora. Mais clientes por dia, mais faturamento no final do mês."
    },
    {
      icon: <Eye className="w-6 h-6" strokeWidth={1.5} />,
      title: "Base ultrafina de 0,04mm",
      description: "Imperceptível ao toque e à vista. Suas clientes vão poder usar rabo de cavalo, coque e qualquer penteado sem medo de aparecer a aplicação."
    },
    {
      icon: <Gem className="w-6 h-6" strokeWidth={1.5} />,
      title: "Fios russos selecionados",
      description: "Cutícula preservada, ponta cheia e resistência que dura meses. Sem embaraço, sem ressecamento, sem aquela aparência artificial."
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6" strokeWidth={1.5} />,
      title: "Suporte técnico exclusivo",
      description: "Você não fica sozinha depois da compra. Nossa equipe te ajuda com dúvidas, técnicas e até estratégias para vender mais."
    }
  ];

  return (
    <section className="lumina-section-dark">
      <div className="lumina-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="lumina-eyebrow text-background/60">Diferenciais</p>
          <h2 className="lumina-heading-xl text-background mb-6">
            Por que a Lumina é <span className="lumina-gold">diferente</span>?
          </h2>
          <div className="lumina-gold-line-center"></div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="border border-background/20 p-8 transition-all duration-300 hover:border-accent/40">
              <div className="text-accent mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-background mb-4 font-serif">
                {benefit.title}
              </h3>
              <p className="text-background/60 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Result */}
        <div className="max-w-3xl mx-auto text-center border border-accent/30 p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-semibold text-background mb-6 font-serif">
            Resultado Final
          </h3>
          <p className="text-lg text-background/70 leading-relaxed">
            Suas clientes saem do salão com um cabelo que parece ter nascido naturalmente longo e volumoso. 
            Elas ficam tão satisfeitas que se tornam suas maiores promotoras, trazendo amigas sem você precisar pedir.
          </p>
        </div>
      </div>
    </section>
  );
};
