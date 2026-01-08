export const ProofSection = () => {
  const testimonials = [
    {
      name: "Fernanda Costa",
      role: "Especialista em Mega Hair • RJ",
      image: "/lovable-uploads/45eae578-51d4-4111-aa69-39729f649e3a.png",
      text: "Depois que comecei a usar a Invisiline da Lumina, minhas clientes simplesmente pararam de reclamar de visibilidade nas laterais. Eu consigo cobrar mais, aplicar mais rápido e o resultado é tão natural que elas mesmas indicam pras amigas sem nem eu pedir."
    },
    {
      name: "Vanessa Leal",
      role: "Profissional Premium • SP",
      image: "/lovable-uploads/70d04f50-7ee3-4d94-86d8-8a35d42dee3d.png",
      text: "A InvisiTouch virou meu segredo de ouro. Cliente chega pedindo 'aquela da Lumina'. É o tipo de aplique que você coloca e até o cabeleireiro do lado acha que é natural. Virei referência na região."
    }
  ];

  const facts = [
    { number: "0,04mm", label: "Base ultrafina" },
    { number: "+30", label: "Tons disponíveis" },
    { number: "100%", label: "Cutícula preservada" },
    { number: "Brasil", label: "Entrega nacional" }
  ];

  return (
    <section id="depoimentos" className="lumina-section bg-background">
      <div className="lumina-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="lumina-eyebrow">Resultados reais</p>
          <h2 className="lumina-heading-xl mb-6">
            Mais de <span className="lumina-gold">200 profissionais</span> confiam na Lumina
          </h2>
          <div className="lumina-gold-line-center mb-6"></div>
          <p className="lumina-body">
            Em Brasil, Europa e EUA desde 2012.
          </p>
        </div>

        {/* Testimonials */}
        <div className="lumina-grid-2 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="lumina-testimonial">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  loading="lazy"
                  decoding="async"
                  width="56"
                  height="56"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-foreground font-serif text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Facts */}
        <div className="border border-border p-8 md:p-12 mb-16">
          <p className="lumina-eyebrow text-center mb-8">Fatos que comprovam nossa qualidade</p>
          <div className="lumina-grid-4">
            {facts.map((fact, index) => (
              <div key={index} className="text-center">
                <p className="lumina-stat-number lumina-gold">{fact.number}</p>
                <p className="lumina-stat-label">{fact.label}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10 pt-8 border-t border-border">
            <p className="text-foreground font-medium">
              4,9 ★ no Google · 93 avaliações
            </p>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Lumina%20Cabelos%20Humanos%2C%20Av.%20T-12%2C%2035%20-%20St.%20Bueno%2C%20Goi%C3%A2nia%20-%20GO%2C%2074223-080"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors mt-2 inline-block"
            >
              Ver avaliações no Google
            </a>
          </div>
        </div>

        {/* Team photo */}
        <div className="text-center">
          <img 
            src="/lovable-uploads/ab924bea-d98c-4ea0-aeab-337d60ce6815.png"
            alt="Equipe Lumina - Profissionais com modelos"
            loading="lazy"
            decoding="async"
            width="768"
            height="512"
            className="w-full max-w-3xl mx-auto"
          />
          <p className="text-sm text-muted-foreground mt-4">
            Nossa equipe de profissionais certificadas com algumas de nossas modelos
          </p>
        </div>
      </div>
    </section>
  );
};
