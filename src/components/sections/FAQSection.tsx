import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Preciso ter experiência prévia com mega hair?",
      answer: "Sim, esta formação é destinada a profissionais que já trabalham com extensões capilares. Se você já aplica mega hair com fita, pode acompanhar o conteúdo."
    },
    {
      question: "O curso é online ou presencial?",
      answer: "A formação é 100% online, com acesso vitalício. Você pode assistir quantas vezes quiser, no seu próprio ritmo."
    },
    {
      question: "Por quanto tempo terei acesso ao conteúdo?",
      answer: "O acesso às aulas da formação é vitalício."
    },
    {
      question: "Como funciona a garantia de 30 dias?",
      answer: "Você tem 30 dias para assistir e aplicar. Se não fizer sentido pra sua cadeira, devolvemos o valor."
    },
    {
      question: "Quais são as formas de pagamento?",
      answer: "Você pode pagar via PIX (com desconto) ou cartão de crédito em até 3x de R$ 82,00 sem juros."
    },
    {
      question: "Recebo certificado ao finalizar?",
      answer: "Sim. Ao completar todos os módulos, você recebe um certificado digital."
    },
    {
      question: "Tenho suporte para tirar dúvidas?",
      answer: "Sim, oferecemos suporte por WhatsApp para alunas."
    },
    {
      question: "A formação ensina a aplicar?",
      answer: "Ensina, no módulo 3. Mas a formação existe principalmente pro que vem antes da aplicação: entender a cliente e escolher a base, a coleção e a cor com critério."
    }
  ];

  return (
    <section id="faq" className="lumina-section bg-background">
      <div className="lumina-container">
        <div className="grid grid-cols-1 lg:grid-cols-[32fr_68fr] gap-12 lg:gap-24">
          <div className="lumina-reveal">
            <p className="lumina-eyebrow">Dúvidas frequentes</p>
            <h2 className="lumina-h3 mt-6 lowercase">perguntas frequentes.</h2>
          </div>

          <div className="lumina-reveal">
            <Accordion type="single" collapsible className="w-full border-t border-border">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                  <AccordionTrigger className="lumina-accordion-trigger hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="lumina-accordion-content">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12">
              <a
                href="https://wa.me/556298570375"
                target="_blank"
                rel="noopener noreferrer"
                className="lumina-link-quiet"
              >
                Ainda tem dúvidas? falar no WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
