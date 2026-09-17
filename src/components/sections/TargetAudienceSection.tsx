export const TargetAudienceSection = () => {
  const audiences = [
    { title: 'profissionais de extensão capilar.', text: 'Para quem já trabalha com extensões e busca mais precisão e consistência.' },
    { title: 'cabeleireiros.', text: 'Para profissionais que querem integrar a harmonização capilar aos seus serviços.' },
    { title: 'salões.', text: 'Para equipes que buscam padronizar o atendimento e a experiência profissional.' },
  ];

  return (
    <section id="para-quem" className="bg-secondary">
      <div className="grid grid-cols-1 lg:grid-cols-[50fr_50fr] items-stretch">
        <div className="order-2 lg:order-1 flex items-center px-7 py-20 md:px-12 lg:pl-16 xl:pl-24 lg:pr-20 lg:py-40">
          <div className="max-w-[36rem] lumina-reveal">
            <p className="lumina-eyebrow">Para quem é</p>
            <h2 className="lumina-h2 mt-7 lowercase">para profissionais que querem construir resultado, não apenas aplicar extensão.</h2>
            <div className="mt-12 border-t border-foreground/15">
              {audiences.map((audience) => (
                <article key={audience.title} className="border-b border-foreground/15 py-6">
                  <h3 className="font-serif text-[1.35rem] lowercase">{audience.title}</h3>
                  <p className="lumina-body mt-3">{audience.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative min-h-[58vh] lg:min-h-[92vh]">
          <img
            src="/lovable-uploads/45eae578-51d4-4111-aa69-39729f649e3a.png"
            alt="Profissional de extensão capilar no ambiente de trabalho"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
