const CHECKOUT_URL = 'https://pay.kiwify.com.br/hK6DKTn';

export const OfferSection = () => {
  const items = [
    'cinco módulos',
    'mais de três horas de conteúdo',
    'acesso vitalício às aulas',
    'certificado digital',
    'suporte por WhatsApp',
  ];

  return (
    <section id="oferta" className="py-28 md:py-36 lg:py-48 text-background" style={{ backgroundColor: 'hsl(var(--lumina-matte))' }}>
      <div className="lumina-container">
        <div className="text-center lumina-reveal">
          <p className="lumina-eyebrow text-background/45">A formação</p>
          <h2 className="lumina-h2 lowercase text-background mt-7">formação profissional dermasilk™</h2>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-14 lg:gap-24 items-start">
          <ul className="border-t border-background/15 lumina-reveal">
            {items.map((item) => (
              <li
                key={item}
                className="py-5 border-b border-background/15 text-background/70 font-light text-[1.0625rem]"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="lumina-reveal">
            <p className="font-serif text-[4rem] md:text-[5.5rem] leading-[0.95] text-background">R$247</p>
            <p className="mt-5 text-[0.95rem] tracking-[0.06em] text-background/55 font-light">
              3x de R$82 sem juros. Pix com desconto.
            </p>

            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="lumina-btn-light mt-12 w-full sm:w-auto"
            >
              Quero a formação
            </a>

            <p className="mt-10 text-[0.95rem] md:text-base text-background/55 font-light leading-[1.85] max-w-[46ch]">
              A formação existe pra dar critério à escolha antes da aplicação. É o que separa aplicar fita adesiva de
              construir uma extensão pra cada cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
