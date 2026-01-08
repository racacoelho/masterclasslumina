import { Award, Clock, Users } from 'lucide-react';

export const CourseDetailsSection = () => {
  const modules = [
    {
      number: "01",
      title: "Fundamentos da Técnica Lumina",
      description: "Teoria completa sobre a tecnologia de fita ultrafina",
      duration: "45 min"
    },
    {
      number: "02",
      title: "Preparação e Análise Capilar",
      description: "Como escolher o tom perfeito e preparar o cabelo",
      duration: "35 min"
    },
    {
      number: "03",
      title: "Aplicação Passo a Passo",
      description: "Técnica completa de aplicação em alta definição",
      duration: "60 min"
    },
    {
      number: "04",
      title: "Finalização e Manutenção",
      description: "Orientações de cuidados e durabilidade",
      duration: "40 min"
    },
    {
      number: "05",
      title: "Estratégias de Venda",
      description: "Como posicionar e precificar o serviço premium",
      duration: "30 min"
    }
  ];

  const bonuses = [
    {
      icon: <Award className="w-5 h-5" strokeWidth={1.5} />,
      title: "Certificado Digital",
      description: "Comprove sua especialização"
    },
    {
      icon: <Clock className="w-5 h-5" strokeWidth={1.5} />,
      title: "Acesso Vitalício",
      description: "Revise quando quiser"
    },
    {
      icon: <Users className="w-5 h-5" strokeWidth={1.5} />,
      title: "Suporte Exclusivo",
      description: "Tire dúvidas direto conosco"
    }
  ];

  return (
    <section id="conteudo" className="lumina-section bg-background">
      <div className="lumina-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="lumina-eyebrow">Programa completo</p>
          <h2 className="lumina-heading-xl mb-6">
            Conteúdo do <span className="lumina-gold">Master Class</span>
          </h2>
          <div className="lumina-gold-line-center mb-6"></div>
          <p className="lumina-body">
            5 módulos práticos com mais de 3 horas de conteúdo exclusivo
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

        {/* Bonuses */}
        <div className="border border-border p-8 md:p-12">
          <p className="lumina-eyebrow text-center mb-8">Além do curso, você recebe</p>
          <div className="lumina-grid-3">
            {bonuses.map((bonus, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 border border-border text-accent mb-4">
                  {bonus.icon}
                </div>
                <h4 className="font-semibold text-foreground mb-2 font-serif">
                  {bonus.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {bonus.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
