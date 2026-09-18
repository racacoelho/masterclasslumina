import { trackEvent } from '@/lib/tracking';
import anatomiaPreview from '@/assets/mapa/anatomia-parcial.png.asset.json';
import mapaPreview from '@/assets/mapa/mapa-parcial.png.asset.json';
import fichaPreview from '@/assets/mapa/ficha-parcial.png.asset.json';

const CHECKOUT_URL = 'https://pay.kiwify.com.br/hK6DKTn';

export const MapaSection = () => {
  const groups = [
    'Cinco mapas de aplicação e arquitetura por objetivo e densidade.',
    'Sequência visual de aplicação, matriz de correção e solução de problemas.',
    'Cuidados Dermasilk™ para orientar a cliente.',
    'Checklist de projeto e ficha de diagnóstico profissional em duas páginas.',
  ];

  const previews = [
    { src: anatomiaPreview.url, title: 'Anatomia do mapa' },
    { src: mapaPreview.url, title: 'Mapa de aplicação — comprimento' },
    { src: fichaPreview.url, title: 'Ficha de diagnóstico' },
  ];

  return (
    <section className="lumina-section-tight bg-secondary">
      <div className="lumina-container">
        <div className="grid grid-cols-1 lg:grid-cols-[38fr_62fr] gap-10 lg:gap-24">
          <div className="lumina-reveal">
            <p className="lumina-eyebrow">Ferramenta profissional complementar</p>
            <h2 className="lumina-h2 mt-6">Mapa Dermasilk™</h2>
            <p className="lumina-lead mt-5 max-w-[32ch]">
              Guia profissional de diagnóstico, arquitetura e aplicação.
            </p>
            <p className="lumina-body mt-6 max-w-[42ch]">
              Leve para o atendimento o material visual complementar à Formação Dermasilk™: mapas de
              planejamento, escolha das bases, arquitetura de aplicação, sequência técnica, correções,
              cuidados, checklist e ficha de diagnóstico.
            </p>
            <div className="mt-9">
              <span className="lumina-gold-line" aria-hidden="true" />
              <p className="mt-4 text-[0.95rem] font-light text-foreground/80">
                R$27 · adicional opcional no checkout
              </p>
              <p className="mt-2 text-[0.95rem] leading-[1.75] font-light text-foreground/65">
                PDF digital de 39 páginas + Checklist + Ficha de Diagnóstico + Cuidados Dermasilk™
              </p>
            </div>
          </div>

          <div className="lumina-reveal">
            <ul className="border-t border-border">
              {groups.map((group, index) => (
                <li
                  key={group}
                  className="flex items-baseline gap-6 md:gap-10 py-6 md:py-7 border-b border-border"
                >
                  <span className="lumina-label">{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-[1.0625rem] md:text-[1.25rem] text-foreground font-light">{group}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="lumina-btn-primary w-full sm:w-auto"
                onClick={() => trackEvent('click_mapa')}
              >
                Conhecer a formação e adicionar o Mapa
              </a>
              <p className="mt-4 max-w-[54ch] text-[0.95rem] leading-[1.85] font-light text-foreground/70">
                No checkout da Formação Dermasilk™, selecione o Mapa como adicional opcional.
              </p>
            </div>

            <p className="mt-8 max-w-[54ch] text-[0.95rem] leading-[1.85] font-light text-foreground/70">
              Produto digital complementar, vendido separadamente. O Mapa não está incluído nos R$247 da
              Formação e não é adicionado automaticamente à compra.
            </p>
          </div>
        </div>

        <div className="lumina-reveal mt-16 md:mt-20">
          <p className="lumina-eyebrow">Prévias parciais do guia</p>
          <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-5 lg:gap-7">
            {previews.map((preview) => (
              <figure key={preview.title} className="min-w-0">
                <img
                  src={preview.src}
                  alt={`Prévia parcial: ${preview.title}`}
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full border border-border object-contain"
                />
                <figcaption className="mt-4 text-[0.75rem] font-medium uppercase tracking-[0.16em] text-foreground/70">
                  {preview.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
