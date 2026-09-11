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
    <section id="faq" className="lumina-section bg-muted">
      <div className="lumina-container">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="lumina-eyebrow">Dúvidas frequentes</p>
            <h2 className="lumina-heading-xl mb-6">
              Perguntas <span className="lumina-gold">frequentes</span>
            </h2>
            <div className="lumina-gold-line-center"></div>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                <AccordionTrigger className="lumina-accordion-trigger">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="lumina-accordion-content">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Additional Help */}
          <div className="text-center mt-12 pt-12 border-t border-border">
            <p className="text-muted-foreground mb-4">
              Ainda tem dúvidas?
            </p>
            <a 
              href="https://wa.me/556298570375"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-foreground font-medium hover:text-accent transition-colors"
            >
              Fale conosco no WhatsApp →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
