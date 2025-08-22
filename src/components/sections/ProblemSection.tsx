export const ProblemSection = () => {
  return (
    <section className="lumina-section-white">
      <div className="lumina-container-desktop">
        <div className="lumina-desktop-grid-2 items-center">
          {/* Text content */}
          <div>
            <h2 className="lumina-heading-lg font-serif lumina-desktop-spacing lumina-text-black">
              Síndrome da <span className="text-red-600">Fita Visível</span>
            </h2>
            <p className="lumina-text-lg text-gray-700 lumina-desktop-spacing leading-relaxed">
              Você já perdeu uma cliente porque ela reclamou que a fita adesiva estava aparecendo? 
              Ou pior: ela saiu do salão "satisfeita" mas nunca mais voltou?
            </p>
            <p className="lumina-text-lg text-gray-700 lumina-desktop-spacing leading-relaxed">
              <strong>O problema não é sua técnica.</strong> É o material que você está usando.
            </p>
            <p className="lumina-text-lg text-gray-700 lumina-desktop-spacing leading-relaxed">
              Enquanto você luta com fitas grossas que aparecem, se soltam e causam desconforto, 
              suas concorrentes estão usando uma tecnologia que você ainda não conhece.
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 lg:p-6 xl:p-8 rounded">
              <p className="text-red-800 font-semibold text-lg lg:text-xl">
                "Minha cliente disse que parecia que tinha uma régua colada na cabeça dela" 
                - Depoimento real de uma cabeleireira
              </p>
            </div>
          </div>

          {/* Image */}
          <div>
            <div className="relative">
              <img 
                src="/lovable-uploads/1a5a0209-b36a-4d90-beda-4f87adaf67d0.png"
                alt="Exemplo de fita adesiva grossa do mercado"
                className="lumina-desktop-image shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-red-600 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-full font-bold text-sm lg:text-base">
                ❌ Fita Grossa
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};