import { Clock, Eye, Gem, HeadphonesIcon } from 'lucide-react';

export const ValuePropositionSection = () => {
  const benefits = [
    {
      icon: <Clock className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-accent" />,
      title: "APLICAÇÃO EM 40 MINUTOS",
      description: "Enquanto outras técnicas levam 3 horas ou mais, você termina o serviço completo em menos de uma hora. Mais clientes por dia, mais faturamento no final do mês."
    },
    {
      icon: <Eye className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-accent" />,
      title: "BASE ULTRAFINA DE 0,04MM",
      description: "Imperceptível ao toque e à vista. Suas clientes vão poder usar rabo de cavalo, coque e qualquer penteado sem medo de aparecer a aplicação. É como se o cabelo tivesse nascido assim."
    },
    {
      icon: <Gem className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-accent" />,
      title: "FIOS RUSSOS SELECIONADOS",
      description: "Cutícula preservada, ponta cheia e resistência que dura meses. Sem embaraço, sem ressecamento, sem aquela aparência artificial que faz a cliente nunca mais voltar."
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-accent" />,
      title: "SUPORTE TÉCNICO EXCLUSIVO",
      description: "Você não fica sozinha depois da compra. Nossa equipe te ajuda com dúvidas, técnicas e até estratégias para vender mais. É como ter uma consultoria particular."
    }
  ];

  return (
    <section className="lumina-section-black">
      <div className="lumina-container-desktop">
        <h2 className="lumina-heading-lg font-serif lumina-text-gold text-center lumina-desktop-spacing">
          Por que a Lumina é diferente?
        </h2>

        <div className="lumina-desktop-grid-2 lumina-desktop-spacing-lg">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/5 p-6 lg:p-8 xl:p-10 rounded-xl border border-accent/20 lumina-transition hover:bg-white/10">
              <div className="lumina-desktop-spacing">{benefit.icon}</div>
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold lumina-text-gold lumina-desktop-spacing">{benefit.title}</h3>
              <p className="text-gray-300 lumina-text-lg leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-accent/10 border border-accent/20 p-6 lg:p-8 xl:p-12 rounded-lg max-w-6xl mx-auto">
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold lumina-text-gold lumina-desktop-spacing">Resultado Final:</h3>
            <p className="lumina-text-lg text-gray-300 leading-relaxed">
              Suas clientes saem do salão com um cabelo que parece ter nascido naturalmente longo e volumoso. 
              Elas ficam tão satisfeitas que se tornam suas maiores promotoras, trazendo amigas sem você precisar pedir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};