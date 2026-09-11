export const ValuePropositionSection = () => {
  const bases = [
    {
      title: 'classic.',
      image: '/lovable-uploads/83336a76-0df6-4594-bada-085a8926e415.png',
      alt: 'Mechas de fita adesiva Classic seguradas na mão',
      description:
        'Construção tradicional da fita. Para a decisão de fixação e distribuição de peso.',
    },
    {
      title: 'invisiline.',
      image: '/lovable-uploads/1a5a0209-b36a-4d90-beda-4f87adaf67d0.png',
      alt: 'Detalhe de mecha InvisiLine posicionada junto à raiz',
      description:
        'Fios implantados na própria base. Para a decisão de camuflagem e efeito de raiz nas áreas mais expostas.',
    },
    {
      title: 'invisitouch.',
      image: '/lovable-uploads/a6ff80fb-39cd-4945-be6b-0a0ebd7fb00f.png',
      alt: 'Detalhe da base ultrafina InvisiTouch entre os dedos',
      description:
        'Cerca de 0,02 mm. Para a decisão de marcar o mínimo possível no couro cabeludo.',
    },
  ];

  return (
    <section id="bases" className="lumina-section lumina-dark">
      <div className="lumina-container-wide">
        <div className="max-w-3xl mx-auto text-center lumina-reveal">
          <p className="lumina-eyebrow text-background/50">As três bases</p>
          <h2 className="lumina-h2 mt-7 lowercase text-background">
            cada base responde uma pergunta diferente.
          </h2>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-10 lg:gap-16">
          {bases.map((base) => (
            <article key={base.title} className="lumina-reveal">
              <img
                src={base.image}
                alt={base.alt}
                loading="lazy"
                decoding="async"
                className="lumina-media aspect-[4/5]"
              />
              <h3 className="mt-9 font-serif text-[1.6rem] md:text-[1.75rem] text-background">{base.title}</h3>
              <p className="mt-4 text-[0.95rem] md:text-base leading-[1.8] font-light text-background/60 max-w-[34ch]">
                {base.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
