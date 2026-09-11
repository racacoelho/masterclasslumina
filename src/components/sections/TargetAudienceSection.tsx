export const TargetAudienceSection = () => {
  return (
    <section className="lumina-section bg-background">
      <div className="lumina-container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="lumina-eyebrow">Público-alvo</p>
            <h2 className="lumina-heading-xl mb-6">
               Para quem é esta <span className="lumina-gold">formação?</span>
            </h2>
            <div className="lumina-gold-line-center mb-8"></div>
             <p className="lumina-body max-w-3xl mx-auto">
               Pra extensionista, cabeleireira e dona de salão que já aplica fita, já comprou de mais de um fornecedor e quer ter uma lógica pra cada cliente em vez de uma fita pra todo mundo. Não é pra quem nunca aplicou.
            </p>
          </div>

          {/* Prerequisite */}
          <div className="border border-border p-8 text-center">
            <p className="lumina-eyebrow">Pré-requisito</p>
            <p className="lumina-body">
              <span className="text-foreground font-medium">Já trabalhar com extensão.</span> A formação parte da experiência de quem já aplica fita.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
