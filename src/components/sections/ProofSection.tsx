import { Star, Users, Award, MapPin } from 'lucide-react';

export const ProofSection = () => {
  const testimonials = [
    {
      name: "Fernanda Costa",
      role: "Especialista em Mega Hair (RJ)",
      image: "/lovable-uploads/45eae578-51d4-4111-aa69-39729f649e3a.png",
      text: "Depois que comecei a usar a Invisiline da Lumina, minhas clientes simplesmente pararam de reclamar de visibilidade nas laterais. Eu consigo cobrar mais, aplicar mais rápido e o resultado é tão natural que elas mesmas indicam pras amigas sem nem eu pedir."
    },
    {
      name: "Vanessa Leal",
      role: "Profissional Premium (SP)",
      image: "/lovable-uploads/70d04f50-7ee3-4d94-86d8-8a35d42dee3d.png",
      text: "A InvisiTouch virou meu segredo de ouro. Cliente chega pedindo 'aquela da Lumina'. É o tipo de aplique que você coloca e até o cabeleireiro do lado acha que é natural. Virei referência na região."
    }
  ];

  const facts = [
    {
      icon: <Users className="w-6 h-6 text-accent" />,
      title: "Base de 0,04mm",
      description: "mais fina que uma folha A4"
    },
    {
      icon: <Award className="w-6 h-6 text-accent" />,
      title: "Mais de 30 tons",
      description: "disponíveis"
    },
    {
      icon: <Star className="w-6 h-6 text-accent" />,
      title: "Fios com cutícula",
      description: "preservada"
    },
    {
      icon: <MapPin className="w-6 h-6 text-accent" />,
      title: "Entrega em todo Brasil",
      description: "sem taxa extra"
    }
  ];

  return (
    <section className="lumina-section-white">
      <div className="lumina-container">
        <div className="text-center">
          <h2 className="lumina-heading-lg font-serif lumina-text-black">
            Mais de <span className="text-accent">200 profissionais</span> confiam na Lumina
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Em Brasil, Europa e EUA desde 2012.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-accent/10">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold lumina-text-black">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex text-accent mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Facts */}
        <div className="bg-accent/10 border border-accent/20 p-8 rounded-lg">
          <h3 className="text-2xl font-bold lumina-text-black mb-6 text-center">
            Fatos que comprovam nossa qualidade:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facts.map((fact, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">{fact.icon}</div>
                <h4 className="font-bold lumina-text-black">{fact.title}</h4>
                <p className="text-gray-600 text-sm">{fact.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <div className="flex justify-center text-accent mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 font-bold">100% de avaliações positivas no Google</p>
          </div>
        </div>

        {/* Team photo */}
        <div className="mt-16 text-center">
          <img 
            src="/lovable-uploads/ab924bea-d98c-4ea0-aeab-337d60ce6815.png"
            alt="Equipe Lumina - Profissionais com modelos"
            className="lumina-mobile-image shadow-xl"
          />
          <p className="text-gray-600 lumina-mobile-spacing text-sm">
            Nossa equipe de profissionais certificadas com algumas de nossas modelos
          </p>
        </div>
      </div>
    </section>
  );
};