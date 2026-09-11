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
        <div className="max-w-2xl mb-16 md:mb-24">
          <p className="lumina-eyebrow">Programa completo</p>
          <h2 className="lumina-heading-xl mb-8">
            O conteúdo, <span className="lumina-gold">módulo a módulo.</span>
          </h2>
          <p className="lumina-body">Mais de três horas.</p>
        </div>

        <div className="border-t border-border">
          {modules.map((module) => (
            <div key={module.number} className="lumina-module">
              <span className="lumina-module-number pt-1">{module.number}</span>
              <div className="flex-1 flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-10">
                <div className="max-w-2xl">
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">{module.title}</h3>
                  <p className="lumina-body">{module.description}</p>
                </div>
                <span className="lumina-label whitespace-nowrap md:pt-2">{module.duration}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20">
          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="lumina-btn-primary">
            Quero a formação
          </a>
        </div>
      </div>
    </section>
  );
};
