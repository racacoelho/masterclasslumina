import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SecurityInfo } from '../SecurityInfo';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Preciso ter experiência prévia com mega hair?",
      answer: "Sim, o curso é para profissionais que já trabalham com extensões. Você precisa conhecer o básico de mega hair para aproveitar ao máximo as técnicas avançadas que ensinamos."
    },
    {
      question: "Quanto tempo tenho para assistir o curso?",
      answer: "O acesso é vitalício! Você pode assistir quantas vezes quiser, no seu ritmo. Além disso, sempre que atualizamos o conteúdo, você recebe automaticamente."
    },
    {
      question: "Onde consigo os produtos Lumina?",
      answer: "Você recebe um guia completo com fornecedores certificados. Também oferecemos suporte para te ajudar a encontrar os melhores produtos na sua região."
    },
    {
      question: "O curso funciona para todos os tipos de cabelo?",
      answer: "Sim! A técnica Lumina é adaptável para todos os tipos de cabelo, desde lisos até cacheados. Ensinamos as adaptações necessárias para cada tipo."
    },
    {
      question: "Posso parcelar o pagamento?",
      answer: "Sim, você pode parcelar em até 3x de R$ 82,00 sem juros no cartão de crédito. Também aceitamos PIX com desconto especial."
    },
    {
      question: "Como funciona a garantia?",
      answer: "Você tem 30 dias para testar todo o conteúdo. Se não ficar satisfeita, devolvemos 100% do seu dinheiro, sem perguntas."
    },
    {
      question: "Recebo certificado?",
      answer: "Sim! Após completar o curso, você recebe um certificado digital que comprova sua especialização na técnica Lumina."
    },
    {
      question: "Posso tirar dúvidas depois do curso?",
      answer: "Claro! Você tem acesso ao nosso suporte técnico exclusivo. Nossa equipe está sempre disponível para ajudar com dúvidas técnicas e até estratégias de negócio."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCTAClick = () => {
    window.open('https://pay.kiwify.com.br/hK6DKTn', '_blank');
  };

  return (
    <section className="lumina-section-white">
      <div className="lumina-container-desktop">
        <div className="max-w-4xl mx-auto">
          <h2 className="lumina-heading-lg font-serif lumina-text-black text-center lumina-desktop-spacing">
            Perguntas <span className="text-accent">Frequentes</span>
          </h2>

          <div className="space-y-4 lg:space-y-6 lumina-desktop-spacing-lg">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-accent/10 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 lg:p-8 xl:p-10 text-left flex items-center justify-between hover:bg-accent/5 transition-colors"
                >
                  <h3 className="font-bold text-lg lg:text-xl xl:text-2xl lumina-text-black pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-accent flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-accent flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6 lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                    <div className="border-t border-accent/10 pt-4 lg:pt-6">
                      <p className="text-gray-700 lumina-text-lg leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold lumina-text-black lumina-desktop-spacing">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-700 lumina-text-lg lumina-desktop-spacing max-w-3xl mx-auto">
              Não deixe as dúvidas te impedirem de transformar sua carreira. 
              Clique no botão abaixo e garante sua vaga agora mesmo.
            </p>
            
            <Button 
              onClick={handleCTAClick}
              variant="lumina-premium"
              size="xl"
              className="lumina-btn-premium text-base lg:text-lg xl:text-xl"
            >
              QUERO GARANTIR AGORA
            </Button>
            
            <SecurityInfo />
          </div>
        </div>
      </div>
    </section>
  );
};