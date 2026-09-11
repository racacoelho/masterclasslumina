export const TargetAudienceSection = () => {
  return (
    <section id="para-quem" className="lumina-section bg-secondary">
      <div className="lumina-container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-20 items-center">
          <div>
            <p className="lumina-eyebrow">Para quem é</p>
            <p className="font-serif text-[1.75rem] md:text-4xl lg:text-[2.75rem] leading-[1.3] text-foreground">
              Pra extensionista, cabeleireira e dona de salão que já aplica fita, já comprou de mais de um fornecedor e quer ter uma lógica pra cada cliente em vez de uma fita pra todo mundo. Não é pra quem nunca aplicou.
            </p>
            <div className="mt-12 pt-8 border-t border-border max-w-md">
              <span className="lumina-label block mb-3">Pré-requisito</span>
              <p className="lumina-body">
                <span className="text-foreground">Já trabalhar com extensão.</span> A formação parte da experiência de quem já aplica fita.
              </p>
            </div>
          </div>

          <div>
            <img
              src="/lovable-uploads/83336a76-0df6-4594-bada-085a8926e415.png"
              alt="Profissional segurando mechas de fita adesiva prontas para o atendimento"
              loading="lazy"
              decoding="async"
              className="w-full h-[55vh] lg:h-[75vh] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
