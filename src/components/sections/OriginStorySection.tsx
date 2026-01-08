import founderPhoto from '@/assets/founder-photo.jpg';

export const OriginStorySection = () => {
  return (
    <section className="lumina-section-dark">
      <div className="lumina-container">
        <div className="lumina-grid-2 items-center">
          {/* CEO Image */}
          <div className="relative">
            <img 
              src={founderPhoto}
              alt="Raquel Negre - Fundadora Lumina Beauty Hair"
              loading="lazy"
              decoding="async"
              width="400"
              height="533"
              className="w-full max-w-md mx-auto lg:mx-0 object-cover object-center aspect-[3/4]"
            />
          </div>

          {/* Story content */}
          <div>
            <p className="lumina-eyebrow text-background/60">Nossa história</p>
            
            <h2 className="lumina-heading-xl text-background mb-8">
              A história por trás da <span className="lumina-gold">Lumina</span>
            </h2>
            
            <div className="lumina-gold-line mb-8"></div>
            
            <div className="space-y-6 text-background/70">
              <p className="text-lg leading-relaxed">
                <span className="text-background font-medium">Eu não sou cabeleireira.</span> Sou empreendedora — e usuária do método.
              </p>
              
              <p className="text-lg leading-relaxed">
                Quando comecei a usar mega hair, o padrão era queratina: horas de aplicação, fios sensibilizados e zero conforto.
              </p>
              
              <p className="text-lg leading-relaxed">
                Viajei para a Ásia e a Europa em busca de uma alternativa e trouxe para o Brasil a tecnologia Dermasilk™: fita ultrafina de <span className="lumina-gold font-medium">0,04mm</span>, resistente e praticamente imperceptível.
              </p>
              
              <p className="text-lg leading-relaxed">
                Hoje, profissionais em todo o Brasil aplicam Dermasilk™ para entregar acabamento natural, mais conforto e mais retorno de clientes.
              </p>
            </div>

            {/* Quote */}
            <div className="mt-10 border-l-2 border-accent pl-6">
              <p className="text-xl text-background italic font-serif leading-relaxed">
                "Minha missão é elevar o padrão do mega hair: resultado natural, conforto e preservação dos fios."
              </p>
              <p className="text-sm text-background/60 mt-4">
                — Raquel Negre, Fundadora
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
