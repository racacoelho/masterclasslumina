export const CourseDetailsSection = () => {
  const modules = [
    {
      number: "01",
      title: "O Sistema Dermasilk™: por que três bases",
      description: "Os critérios do Mapa Dermasilk™ para compreender o atendimento e a função de cada base.",
      duration: "45 min"
    },
    {
      number: "02",
      title: "Entender a cliente e fazer as escolhas",
      description: "Arquitetura Dermasilk™ para escolher base, coleção e cor de acordo com cada cliente.",
      duration: "35 min"
    },
    {
      number: "03",
      title: "Aplicação do Sistema Dermasilk™",
      description: "Fusão Dermasilk™ aplicada à preparação e à execução do atendimento.",
      duration: "60 min"
    },
    {
      number: "04",
      title: "Manutenção e orientação da cliente",
      description: "Orientações práticas para conduzir a manutenção e comunicar os cuidados à cliente.",
      duration: "40 min"
    },
    {
      number: "05",
      title: "Apresentação e precificação",
      description: "Assinatura Dermasilk™ para apresentar e precificar o atendimento com clareza.",
      duration: "30 min"
    }
  ];

  return (
    <section id="conteudo" className="lumina-section bg-background">
      <div className="lumina-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="lumina-eyebrow">Programa completo</p>
          <h2 className="lumina-heading-xl mb-6">
            O conteúdo, <span className="lumina-gold">módulo a módulo.</span>
          </h2>
          <div className="lumina-gold-line-center mb-6"></div>
          <p className="lumina-body">
            Mais de três horas.
          </p>
        </div>

        {/* Modules */}
        <div className="max-w-3xl mx-auto mb-16">
          {modules.map((module, index) => (
            <div key={index} className="lumina-module">
              <span className="lumina-module-number">{module.number}</span>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-foreground font-serif mb-1">
                      {module.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {module.description}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {module.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
