import { Check } from 'lucide-react';

export const TargetAudienceSection = () => {
  const targetProfiles = [
    {
      icon: '💼',
      title: 'Cabeleireiras experientes',
      description: 'Que querem se destacar no mercado premium'
    },
    {
      icon: '🏪',
      title: 'Donas de salão',
      description: 'Buscando aumentar o ticket médio'
    },
    {
      icon: '⭐',
      title: 'Especialistas premium',
      description: 'Que cobram mais por qualidade superior'
    },
    {
      icon: '🎯',
      title: 'Ambiciosas',
      description: 'Que querem dominar novas técnicas'
    },
    {
      icon: '📈',
      title: 'Profissionais estagnadas',
      description: 'Que precisam de um diferencial competitivo'
    }
  ];

  return (
    <section className="lumina-section-white">
      <div className="lumina-container text-center">
        <h2 className="lumina-heading-lg font-serif lumina-text-black">
          Para quem é este <span className="text-accent">curso</span>?
        </h2>
        
        <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
          Se você se encaixa em pelo menos um destes perfis, 
          o Master Class Lumina foi feito para você:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {targetProfiles.map((profile, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-accent/10">
              <div className="text-4xl mb-4">{profile.icon}</div>
              <h3 className="text-xl font-bold lumina-text-black mb-3">{profile.title}</h3>
              <p className="text-gray-600">{profile.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-accent/10 border border-accent/20 p-8 rounded-lg max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Check className="w-6 h-6 text-accent" />
            <h3 className="text-2xl font-bold lumina-text-black">Pré-requisito</h3>
          </div>
          <p className="text-lg text-gray-700">
            <strong>Conhecimento básico em mega hair</strong> - Este curso é para profissionais que já trabalham 
            com extensões e querem dominar a técnica mais avançada do mercado.
          </p>
        </div>
      </div>
    </section>
  );
};