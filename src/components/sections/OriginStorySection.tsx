import founderPhoto from '@/assets/founder-photo.jpg';

export const OriginStorySection = () => {
  return (
    <section className="lumina-section-dark">
      <div className="lumina-container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-12 lg:gap-20 items-center">
          <div>
            <img
              src={founderPhoto}
              alt="Raquel Negre, fundadora da Lumina Beauty Hair"
              loading="lazy"
              decoding="async"
              width="800"
              height="1066"
              className="w-full h-[60vh] lg:h-[80vh] object-cover object-center"
            />
          </div>

          <div>
            <p className="lumina-eyebrow text-background/50">Quem conduz</p>

            <h2 className="lumina-heading-xl text-background mb-10">
              A história por trás da <span className="lumina-gold">Lumina</span>
            </h2>

            <div className="space-y-6 text-background/70 text-lg leading-[1.8] font-light max-w-xl">
              <p>
                <span className="text-background">Eu não sou cabeleireira.</span> Sou empreendedora e usuária de extensões.
              </p>
              <p>
                Quando comecei a usar mega hair, o padrão era queratina: horas de aplicação, fios sensibilizados e zero conforto.
              </p>
              <p>
                Fui procurar outra opção fora do Brasil e trouxe a fita adesiva ultrafina. É com ela que eu trabalho desde 2012.
              </p>
              <p>
                Depois de anos vendendo pra profissional, entendi que resolver a aplicação não resolve a cliente. Foi daí que nasceu o Sistema Dermasilk™.
              </p>
            </div>

            <p className="text-sm text-background/50 mt-10 tracking-wide">— Raquel Negre, Fundadora</p>
          </div>
        </div>
      </div>
    </section>
  );
};
