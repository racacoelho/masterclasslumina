const CHECKOUT_URL = 'https://pay.kiwify.com.br/hK6DKTn';

export const CourseDetailsSection = () => {
  const modules = [
    {
      number: '01',
      title: 'O Sistema Dermasilk™: por que três bases',
      description: 'Os critérios do Mapa Dermasilk™ para compreender o atendimento e a função de cada base.',
      duration: '45 min',
    },
    {
      number: '02',
      title: 'Entender a cliente e fazer as escolhas',
      description: 'Arquitetura Dermasilk™ para escolher base, coleção e cor de acordo com cada cliente.',
      duration: '35 min',
    },
    {
      number: '03',
      title: 'Aplicação do Sistema Dermasilk™',
      description: 'Fusão Dermasilk™ aplicada à preparação e à execução do atendimento.',
      duration: '60 min',
    },
    {
      number: '04',
      title: 'Manutenção e orientação da cliente',
      description: 'Orientações práticas para conduzir a manutenção e comunicar os cuidados à cliente.',
      duration: '40 min',
    },
    {
      number: '05',
      title: 'Apresentação e precificação',
      description: 'Assinatura Dermasilk™ para apresentar e precificar o atendimento com clareza.',
      duration: '30 min',
    },
  ];

  return (
    <section id="conteudo" className="lumina-section bg-background">
      <div className="lumina-container">
        <div className="max-w-3xl mx-auto text-center lumina-reveal">
          <p className="lumina-eyebrow">Programa completo</p>
          <h2 className="lumina-h2 mt-7 lowercase">o conteúdo, módulo a módulo.</h2>
          <p className="lumina-body mt-6">Mais de três horas.</p>
        </div>

        <div className="mt-16 md:mt-24 border-t border-border lumina-reveal">
          {modules.map((module) => (
            <article
              key={module.number}
              className="grid grid-cols-[3.5rem_1fr] md:grid-cols-[7rem_1fr_6rem] gap-x-4 md:gap-x-10 gap-y-3 py-9 md:py-12 border-b border-border"
            >
              <span className="lumina-numeral text-[2.25rem] md:text-[3.25rem] md:pt-1">{module.number}</span>

              <div className="max-w-[46ch]">
                <h3 className="font-serif text-[1.35rem] md:text-[1.75rem] leading-[1.2] text-foreground">
                  {module.title}
                </h3>
                <p className="lumina-body mt-4">{module.description}</p>
              </div>

              <span className="lumina-label col-start-2 md:col-start-3 md:text-right md:pt-3 whitespace-nowrap">
                {module.duration}
              </span>
            </article>
          ))}
        </div>

        <div className="mt-16 md:mt-20 lumina-reveal">
          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="lumina-btn-primary">
            Quero a formação
          </a>
        </div>
      </div>
    </section>
  );
};
