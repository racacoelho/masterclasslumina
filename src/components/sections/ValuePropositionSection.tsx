export const ValuePropositionSection = () => {
  const bases = [
    {
      title: "Classic",
      description: "Construção tradicional da fita. Para a decisão de fixação e distribuição de peso."
    },
    {
      title: "InvisiLine",
      description: "Fios implantados na própria base. Para a decisão de camuflagem e efeito de raiz nas áreas mais expostas."
    },
    {
      title: "InvisiTouch",
      description: "Cerca de 0,02 mm. Para a decisão de marcar o mínimo possível no couro cabeludo."
    }
  ];

  return (
    <section id="bases" className="lumina-section bg-background">
      <div className="lumina-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="lumina-eyebrow">As três bases</p>
          <h2 className="lumina-heading-xl mb-6">
            Cada base responde uma <span className="lumina-gold">pergunta diferente.</span>
          </h2>
          <div className="lumina-gold-line-center"></div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bases.map((base) => (
            <div key={base.title} className="border border-border p-8 md:p-10">
              <h3 className="text-2xl font-semibold text-foreground mb-4 font-serif">
                {base.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {base.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
