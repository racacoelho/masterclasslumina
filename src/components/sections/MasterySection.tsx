const topics = [
  'diagnóstico e leitura da cliente',
  'indicação da base Dermasilk™',
  'planejamento e mapeamento',
  'arquitetura da aplicação',
  'preparação e posicionamento',
  'aplicação profissional',
  'fusão com o cabelo natural',
  'acabamento e finalização',
  'manutenção',
  'escolha de coleção e cor',
  'padronização do atendimento',
];

export const MasterySection = () => (
  <section className="lumina-section bg-background">
    <div className="lumina-container">
      <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
        <div className="lumina-reveal">
          <p className="lumina-eyebrow">Formação</p>
          <h2 className="lumina-h2 mt-7 lowercase max-w-[9ch]">o que você vai dominar.</h2>
        </div>

        <ol className="border-t border-border lumina-reveal">
          {topics.map((topic, index) => (
            <li key={topic} className="grid grid-cols-[3rem_1fr] gap-5 border-b border-border py-5 md:grid-cols-[5rem_1fr] md:py-6">
              <span className="lumina-label pt-1">{String(index + 1).padStart(2, '0')}</span>
              <span className="font-serif text-[1.3rem] leading-[1.25] lowercase md:text-[1.6rem]">{topic}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);