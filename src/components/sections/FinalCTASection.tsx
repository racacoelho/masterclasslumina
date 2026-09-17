import { trackCheckout, trackEvent } from '@/lib/tracking';

const CHECKOUT_URL = 'https://pay.kiwify.com.br/hK6DKTn';
const WHATSAPP_URL = 'https://wa.me/556298570375';

export const FinalCTASection = () => (
  <section className="lumina-dark py-24 md:py-32 lg:py-40">
    <div className="lumina-container text-center lumina-reveal">
      <p className="lumina-eyebrow text-background/55">Formação Profissional Dermasilk™</p>
      <h2 className="lumina-h2 mt-7 lowercase text-background mx-auto max-w-[16ch]">
        a técnica começa na mão.
        <br />
        o resultado começa no projeto.
      </h2>
      <p className="lumina-body mx-auto mt-7 max-w-[43rem] text-background/65">
        Domine o sistema profissional que conecta diagnóstico, base, arquitetura, aplicação e acabamento.
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
        <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="lumina-btn-light" onClick={trackCheckout}>
          quero me capacitar
        </a>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="lumina-link-quiet text-background/60 hover:text-background" onClick={() => trackEvent('click_whatsapp')}>
          falar com uma especialista →
        </a>
      </div>
    </div>
  </section>
);