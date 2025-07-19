import { Clock, Eye, Gem, HeadphonesIcon } from 'lucide-react';

export const ValuePropositionSection = () => {
  const benefits = [
    {
      icon: <Clock className="w-8 h-8 text-accent" />,
      title: "APLICAÇÃO EM 40 MINUTOS",
      description: "Enquanto outras técnicas levam 3 horas ou mais, você termina o serviço completo em menos de uma hora. Mais clientes por dia, mais faturamento no final do mês."
    },
    {
      icon: <Eye className="w-8 h-8 text-accent" />,
      title: "BASE ULTRAFINA DE 0,04MM",
      description: "Imperceptível ao toque e à vista. Suas clientes vão poder usar rabo de cavalo, coque e qualquer penteado sem medo de aparecer a aplicação. É como se o cabelo tivesse nascido assim."
    },
    {
      icon: <Gem className="w-8 h-8 text-accent" />,
      title: "FIOS RUSSOS SELECIONADOS",
      description: "Cutícula preservada, ponta cheia e resistência que dura meses. Sem embaraço, sem ressecamento, sem aquela aparência artificial que faz a cliente nunca mais voltar."
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8 text-accent" />,
      title: "SUPORTE TÉCNICO EXCLUSIVO",
      description: "Você não fica sozinha depois da compra. Nossa equipe te ajuda com dúvidas, técnicas e até estratégias para vender mais. É como ter uma consultoria particular."
    }
  ];

  return (
    <section className="lumina-section-black">
      <div className="lumina-container">
        <h2 className="lumina-heading-lg font-serif lumina-text-gold">
          Por que a Lumina é diferente?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/5 p-8 rounded-xl border border-accent/20">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold lumina-text-gold mb-4">{benefit.title}</h3>
              <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-accent/10 border border-accent/20 p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold lumina-text-gold mb-4">Resultado Final:</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Suas clientes saem do salão com um cabelo que parece ter nascido naturalmente longo e volumoso. 
              Elas ficam tão satisfeitas que se tornam suas maiores promotoras, trazendo amigas sem você precisar pedir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};