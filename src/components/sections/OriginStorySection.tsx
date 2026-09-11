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
            <p className="lumina-eyebrow text-background/60">Quem conduz</p>
            
            <h2 className="lumina-heading-xl text-background mb-8">
              A história por trás da <span className="lumina-gold">Lumina</span>
            </h2>
            
            <div className="lumina-gold-line mb-8"></div>
            
            <div className="space-y-6 text-background/70">
              <p className="text-lg leading-relaxed">
                <span className="text-background font-medium">Eu não sou cabeleireira.</span> Sou empreendedora e usuária de extensões.
              </p>

              <p className="text-lg leading-relaxed">
                Quando comecei a usar mega hair, o padrão era queratina: horas de aplicação, fios sensibilizados e zero conforto.
              </p>

              <p className="text-lg leading-relaxed">
                Fui procurar outra opção fora do Brasil e trouxe a fita adesiva ultrafina. É com ela que eu trabalho desde 2012.
              </p>

              <p className="text-lg leading-relaxed">
                Depois de anos vendendo pra profissional, entendi que resolver a aplicação não resolve a cliente. Foi daí que nasceu o Sistema Dermasilk™.
              </p>
            </div>

            <p className="text-sm text-background/60 mt-10">
              — Raquel Negre, Fundadora
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
