export const TargetAudienceSection = () => {
  return (
    <section id="para-quem" className="bg-secondary">
      <div className="grid grid-cols-1 lg:grid-cols-[50fr_50fr] items-stretch">
        <div className="order-2 lg:order-1 flex items-center px-7 py-20 md:px-12 lg:pl-16 xl:pl-24 lg:pr-20 lg:py-40">
          <div className="max-w-[36rem] lumina-reveal">
            <p className="lumina-eyebrow">Para quem é</p>
            <p className="mt-8 font-serif text-[1.6rem] md:text-[2.1rem] lg:text-[2.4rem] leading-[1.32] text-foreground">
              Pra extensionista, cabeleireira e dona de salão que já aplica fita, já comprou de mais de um fornecedor e
              quer ter uma lógica pra cada cliente em vez de uma fita pra todo mundo. Não é pra quem nunca aplicou.
            </p>

            <div className="mt-14 pt-7 border-t border-foreground/12 max-w-md">
              <span className="lumina-label block mb-4">Pré-requisito</span>
              <p className="lumina-body">
                <span className="text-foreground">Já trabalhar com extensão.</span> A formação parte da experiência de
                quem já aplica fita.
              </p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative min-h-[58vh] lg:min-h-[92vh]">
          <img
            src="/lovable-uploads/ALCAPARRAS-0147.JPEG"
            alt="Mechas de fita adesiva preparadas para o atendimento"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
