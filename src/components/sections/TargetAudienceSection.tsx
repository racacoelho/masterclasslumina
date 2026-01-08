export const TargetAudienceSection = () => {
  const targetProfiles = [
    {
      title: 'Cabeleireiras experientes',
      description: 'Que querem se destacar no mercado premium'
    },
    {
      title: 'Donas de salão',
      description: 'Buscando aumentar o ticket médio'
    },
    {
      title: 'Especialistas premium',
      description: 'Que cobram mais por qualidade superior'
    },
    {
      title: 'Profissionais ambiciosas',
      description: 'Que querem dominar novas técnicas'
    },
    {
      title: 'Profissionais estagnadas',
      description: 'Que precisam de um diferencial competitivo'
    }
  ];

  return (
    <section className="lumina-section bg-background">
      <div className="lumina-container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="lumina-eyebrow">Público-alvo</p>
            <h2 className="lumina-heading-xl mb-6">
              Para quem é este <span className="lumina-gold">curso</span>?
            </h2>
            <div className="lumina-gold-line-center mb-8"></div>
            <p className="lumina-body max-w-2xl mx-auto">
              Se você se encaixa em pelo menos um destes perfis, 
              o Master Class Lumina foi feito para você:
            </p>
          </div>

          {/* Profiles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {targetProfiles.map((profile, index) => (
              <div key={index} className="lumina-card-hover">
                <h3 className="text-xl font-semibold text-foreground mb-2 font-serif">
                  {profile.title}
                </h3>
                <p className="text-muted-foreground">
                  {profile.description}
                </p>
              </div>
            ))}
          </div>

          {/* Prerequisite */}
          <div className="border border-border p-8 text-center">
            <p className="lumina-eyebrow">Pré-requisito</p>
            <p className="lumina-body">
              <span className="text-foreground font-medium">Conhecimento básico em mega hair</span> — Este curso é para profissionais que já trabalham 
              com extensões e querem dominar a técnica mais avançada do mercado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
