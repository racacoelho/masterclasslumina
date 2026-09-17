import { useEffect, useRef } from 'react';
import { WHATSAPP_URL } from '@/lib/contact';
import { trackCheckout, trackEvent } from '@/lib/tracking';

const CHECKOUT_URL = 'https://pay.kiwify.com.br/hK6DKTn';


export const OfferSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      trackEvent('view_investment');
      observer.disconnect();
    }, { threshold: 0.35 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const items = [
    'cinco módulos',
    'mais de três horas de conteúdo',
    'acesso vitalício às aulas',
    'certificado digital',
    'suporte por WhatsApp',
  ];

  return (
    <section ref={sectionRef} id="oferta" className="lumina-dark py-28 md:py-36 lg:py-48 text-background">
      <div className="lumina-container">
        <div className="text-center lumina-reveal">
           <p className="lumina-eyebrow text-background/45">Inscrição</p>
           <h2 className="lumina-h2 lowercase text-background mt-7">comece pelo sistema.</h2>
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
              À vista no Pix. Ou em até 4x no cartão.
            </p>

            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="lumina-btn-light mt-12 w-full sm:w-auto"
              onClick={trackCheckout}
            >
              quero me capacitar
            </a>

            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="lumina-link-quiet mt-7 block text-background/55 hover:text-background" onClick={() => trackEvent('click_whatsapp')}>
              falar com uma especialista →
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
