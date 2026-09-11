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
    <section id="oferta" className="py-24 md:py-32 lg:py-40 bg-foreground text-background">
      <div className="lumina-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">
          <div>
            <p className="lumina-eyebrow text-background/50">A formação</p>
            <h2 className="lumina-heading-xl text-background mb-10">
              Formação Profissional <span className="lumina-gold">Dermasilk™</span>
            </h2>

            <ul className="border-t border-background/15">
              {items.map((item) => (
                <li key={item} className="py-4 border-b border-background/15 text-background/70 font-light">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pt-16">
            <p className="lumina-price-current text-background">R$247</p>
            <p className="lumina-price-installment text-background/60">
              3x de R$82 sem juros. Pix com desconto.
            </p>

            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="lumina-btn-light mt-10 w-full sm:w-auto"
            >
              Quero a formação
            </a>

            <p className="mt-8 text-sm md:text-base text-background/60 font-light leading-[1.8] max-w-md">
              A formação existe pra dar critério à escolha antes da aplicação. É o que separa aplicar fita adesiva de construir uma extensão pra cada cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
