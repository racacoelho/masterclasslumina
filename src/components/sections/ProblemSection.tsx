export const ProblemSection = () => {
  return (
    <section className="lumina-section-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text content */}
          <div className="lg:w-1/2">
            <h2 className="lumina-heading-lg font-serif mb-6 lumina-text-black">
              Síndrome da <span className="text-red-600">Fita Visível</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Você já perdeu uma cliente porque ela reclamou que a fita adesiva estava aparecendo? 
              Ou pior: ela saiu do salão "satisfeita" mas nunca mais voltou?
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <strong>O problema não é sua técnica.</strong> É o material que você está usando.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Enquanto você luta com fitas grossas que aparecem, se soltam e causam desconforto, 
              suas concorrentes estão usando uma tecnologia que você ainda não conhece.
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
              <p className="text-red-800 font-semibold">
                "Minha cliente disse que parecia que tinha uma régua colada na cabeça dela" 
                - Depoimento real de uma cabeleireira
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="/lovable-uploads/1a5a0209-b36a-4d90-beda-4f87adaf67d0.png"
                alt="Exemplo de fita adesiva grossa do mercado"
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold">
                ❌ Fita Grossa
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};