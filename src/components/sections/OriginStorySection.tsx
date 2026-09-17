import founderPhoto from '@/assets/founder-photo.jpg';

export const OriginStorySection = () => {
  return (
    <section id="sobre" className="lumina-dark">
      <div className="grid grid-cols-1 lg:grid-cols-[48fr_52fr] items-stretch">
        <div className="relative min-h-[68vh] lg:min-h-[100vh]">
          <img
            src={founderPhoto}
            alt="Raquel Negre, fundadora da Lumina Beauty Hair"
            loading="lazy"
            decoding="async"
            width="800"
            height="1066"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>

        <div className="flex items-center px-7 py-20 md:px-12 lg:pl-20 lg:pr-16 xl:pr-24 lg:py-40">
          <div className="max-w-[34rem] lumina-reveal">
            <p className="lumina-eyebrow text-background/50">Por trás do Sistema</p>

            <h2 className="lumina-h2 lowercase text-background mt-7 mb-10">experiência transformada em sistema.</h2>

            <div className="space-y-6 text-background/70 text-[1.0625rem] md:text-lg leading-[1.85] font-light">
              <p>
                <span className="text-background">Eu não sou cabeleireira.</span> Sou empreendedora e usuária de
                extensões.
              </p>
              <p>
                Quando comecei a usar mega hair, o padrão era queratina: horas de aplicação, fios sensibilizados e zero
                conforto.
              </p>
              <p>
                Fui procurar outra opção fora do Brasil e trouxe a fita adesiva. É com ela que eu trabalho
                desde 2012.
              </p>
              <p>
                Depois de anos vendendo pra profissional, entendi que resolver a aplicação não resolve a cliente. Foi
                daí que nasceu o Sistema Dermasilk™.
              </p>
            </div>

            <p className="mt-12 lumina-label text-background/45">— Raquel Negre, Fundadora</p>
          </div>
        </div>
      </div>
    </section>
  );
};
