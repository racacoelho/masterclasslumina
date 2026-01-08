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
      answer: "Sim, este curso é destinado a profissionais que já trabalham com extensões capilares. Se você já aplica mega hair (qualquer técnica), está apta para aprender nossa metodologia exclusiva."
    },
    {
      question: "O curso é online ou presencial?",
      answer: "O curso é 100% online, com acesso vitalício. Você pode assistir quantas vezes quiser, no seu próprio ritmo, de qualquer lugar do Brasil."
    },
    {
      question: "Por quanto tempo terei acesso ao conteúdo?",
      answer: "Acesso vitalício. Uma vez que você adquire o curso, ele é seu para sempre. Além disso, todas as atualizações futuras são gratuitas."
    },
    {
      question: "Como funciona a garantia de 30 dias?",
      answer: "É simples: você tem 30 dias para assistir ao curso e aplicar as técnicas. Se por qualquer motivo não ficar satisfeita, basta enviar um email solicitando o reembolso e devolvemos 100% do valor investido, sem perguntas."
    },
    {
      question: "Quais são as formas de pagamento?",
      answer: "Você pode pagar via PIX (com desconto) ou cartão de crédito em até 3x de R$ 82,00 sem juros."
    },
    {
      question: "Recebo certificado ao finalizar?",
      answer: "Sim! Ao completar todos os módulos, você recebe um certificado digital que pode usar para comprovar sua especialização."
    },
    {
      question: "Tenho suporte para tirar dúvidas?",
      answer: "Sim, oferecemos suporte exclusivo via WhatsApp para alunas. Nossa equipe está disponível para ajudar com dúvidas técnicas e estratégicas."
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
