export const ValuePropositionSection = () => {
  const bases = [
    {
      title: 'Classic',
      image: '/lovable-uploads/83336a76-0df6-4594-bada-085a8926e415.png',
      alt: 'Mechas de fita adesiva Classic seguradas na mão sobre fundo escuro',
      description: 'Construção tradicional da fita. Para a decisão de fixação e distribuição de peso.',
    },
    {
      title: 'InvisiLine',
      image: '/lovable-uploads/1a5a0209-b36a-4d90-beda-4f87adaf67d0.png',
      alt: 'Detalhe de mecha InvisiLine posicionada junto à raiz',
      description: 'Fios implantados na própria base. Para a decisão de camuflagem e efeito de raiz nas áreas mais expostas.',
    },
    {
      title: 'InvisiTouch',
      image: '/lovable-uploads/a6ff80fb-39cd-4945-be6b-0a0ebd7fb00f.png',
      alt: 'Detalhe da base ultrafina InvisiTouch entre os dedos',
      description: 'Cerca de 0,02 mm. Para a decisão de marcar o mínimo possível no couro cabeludo.',
    },
  ];

  return (
    <section id="bases" className="lumina-section bg-secondary">
      <div className="lumina-container-wide">
        <div className="max-w-2xl mb-16 md:mb-24">
          <p className="lumina-eyebrow">As três bases</p>
          <h2 className="lumina-heading-xl">
            Cada base responde uma <span className="lumina-gold">pergunta diferente.</span>
          </h2>
        </div>

        <div className="lumina-grid-3">
          {bases.map((base) => (
            <article key={base.title}>
              <img
                src={base.image}
                alt={base.alt}
                loading="lazy"
                decoding="async"
                className="w-full aspect-[3/4] object-cover mb-8"
              />
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">{base.title}</h3>
              <span className="lumina-gold-line block mb-6"></span>
              <p className="lumina-body">{base.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
