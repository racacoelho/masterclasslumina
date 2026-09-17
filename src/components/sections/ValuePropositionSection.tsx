import baseClassic from '@/assets/base-classic.webp';
import baseInvisiline from '@/assets/base-invisiline.webp';
import baseInvisitouch from '@/assets/base-invisitouch.webp';

export const ValuePropositionSection = () => {
  const bases = [
    {
      title: 'Classic',
      image: baseClassic,
      alt: 'Base Classic Dermasilk de construção tradicional',
      construction: 'Base tradicional lisa.',
      decision: 'Responde às escolhas de fixação e distribuição de peso.',
    },
    {
      title: 'InvisiLine',
      image: baseInvisiline,
      alt: 'Base InvisiLine Dermasilk com fios implantados na própria base',
      construction: 'Fios implantados na própria base.',
      decision: 'Responde às escolhas de camuflagem e efeito de raiz nas áreas mais expostas.',
    },
    {
      title: 'InvisiTouch',
      image: baseInvisitouch,
      alt: 'Base InvisiTouch do Sistema Dermasilk™ com cerca de 0,02 mm',
      construction: 'Cerca de 0,02 mm.',
      decision: 'Responde às escolhas relacionadas à marcação no couro cabeludo.',
    },
  ];

  return (
    <section id="bases" className="lumina-section lumina-dark">
      <div className="lumina-container-wide">
        <div className="max-w-3xl mx-auto text-center lumina-reveal">
           <p className="lumina-eyebrow text-background/50">Dermasilk™</p>
          <h2 className="lumina-h2 mt-7 lowercase text-background">
             três bases.
             <br />
             uma decisão profissional.
          </h2>
           <p className="lumina-body mt-7 mx-auto max-w-[42rem] text-background/60">
             Cada base responde a características da cliente e a decisões específicas do projeto de aplicação.
           </p>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10 lg:gap-14">
          {bases.map((base) => (
            <article key={base.title} className="lumina-reveal flex flex-col">
              <img
                src={base.image}
                alt={base.alt}
                width={720}
                height={874}
                loading="lazy"
                decoding="async"
                className="lumina-media w-full aspect-[720/874] object-cover object-center"
              />

              <h3 className="mt-9 font-serif text-[1.75rem] md:text-[2rem] leading-none text-background">
                {base.title}
              </h3>

              <div className="mt-7 pt-6 border-t border-background/15">
                <p className="text-[10px] tracking-[0.22em] uppercase text-background/40">Construção</p>
                <p className="mt-3 text-[0.95rem] md:text-base leading-[1.8] font-light text-background/75">
                  {base.construction}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-background/15">
                <p className="text-[10px] tracking-[0.22em] uppercase text-background/40">Decisão</p>
                <p className="mt-3 text-[0.95rem] md:text-base leading-[1.8] font-light text-background/75">
                  {base.decision}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
