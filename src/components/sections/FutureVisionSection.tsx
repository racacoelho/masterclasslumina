import { TrendingUp, Users, Award, Star } from 'lucide-react';

export const FutureVisionSection = () => {
  const handleCTAClick = () => {
    window.open('https://pay.kiwify.com.br/hK6DKTn', '_blank');
  };

  const results = [
    { icon: <TrendingUp className="w-5 h-5" strokeWidth={1.5} />, title: "Faturamento", description: "42% maior" },
    { icon: <Users className="w-5 h-5" strokeWidth={1.5} />, title: "Indicações", description: "Agenda cheia" },
    { icon: <Award className="w-5 h-5" strokeWidth={1.5} />, title: "Reconhecimento", description: "Referência" },
    { icon: <Star className="w-5 h-5" strokeWidth={1.5} />, title: "Satisfação", description: "Clientes encantadas" }
  ];

  return (
    <section className="lumina-section bg-background relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/83336a76-0df6-4594-bada-085a8926e415.png"
          alt="Profissional aplicando mega hair"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div className="lumina-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <p className="lumina-eyebrow">Sua transformação</p>
          
          <h2 className="lumina-heading-xl mb-6">
            Imagine sua carreira daqui a <span className="lumina-gold">6 meses</span>...
          </h2>
          
          <div className="lumina-gold-line-center mb-10"></div>
          
          <p className="lumina-body-lg mb-12">
            Você é reconhecida como a <span className="text-foreground font-medium">especialista em mega hair da sua região</span>. 
            Suas clientes chegam pedindo especificamente "aquela técnica invisível que só você faz".
          </p>
          
          {/* Results Grid */}
          <div className="lumina-grid-4 mb-12">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 border border-border text-accent mb-3">
                  {result.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-1 font-serif">
                  {result.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {result.description}
                </p>
              </div>
            ))}
          </div>

          {/* Message */}
          <div className="border border-border p-8 md:p-10 mb-12">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 font-serif">
              Você pode cobrar mais, trabalhar menos e ter clientes mais satisfeitas
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Porque quando você domina a técnica mais avançada do mercado, 
              você não compete por preço. Você compete por qualidade.
            </p>
            <p className="text-foreground">
              <span className="font-medium">A pergunta é:</span> Você vai continuar usando material amador 
              ou vai se posicionar como a profissional premium que você pode ser?
            </p>
          </div>

          {/* CTA */}
          <button 
            onClick={handleCTAClick}
            className="px-12 py-5 bg-foreground text-background font-medium text-sm uppercase tracking-[0.1em] transition-all duration-300 hover:bg-foreground/90"
          >
            Quero garantir agora
          </button>

          <p className="text-sm text-muted-foreground mt-6">
            Oferta por tempo limitado • Apenas 100 vagas disponíveis
          </p>
        </div>
      </div>
    </section>
  );
};
