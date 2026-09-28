const VIDEO_URL =
  'https://pruevgmfaiujvuhojmpa.supabase.co/storage/v1/object/public/casos/caso01_beto_corteA_11s.mp4';
const POSTER_URL =
  'https://pruevgmfaiujvuhojmpa.supabase.co/storage/v1/object/public/casos/caso01_beto_poster.jpg';

const paragraphs = [
  'Beto Benites, Goiânia e Anápolis, parceiro Lumina há mais de dez anos.',
  'A cliente, ela é blogueira, platinada 100%, loiro global, e vive com o cabelo solto ou preso pra cima. Grava, dança, aparece.',
  'Construção escolhida: InvisiTouch, Coleção Brasileira, três kits de 60 cm. O motivo foi discrição, porque no loiro global a base tem menos onde se esconder.',
  'Nas palavras dele: "O cabelo se comporta como se fosse o cabelo dela mesmo. Não pesa, não marca, não incomoda. E não tem aquela preocupação de: será que tá aparecendo?"',
  'Há anos na mesma cadeira. Em manutenção.',
];

export const CasoRealSection = () => {
  return (
    <section className="lumina-section-tight bg-background">
      <div className="lumina-container">
        <div className="grid grid-cols-1 lg:grid-cols-[38fr_62fr] gap-12 lg:gap-24 items-start">
          <div className="lumina-reveal">
            <div className="w-full max-w-[360px]">
              <div className="overflow-hidden" style={{ borderRadius: '6px' }}>
                <video
                  className="w-full h-auto block aspect-[9/16] object-cover"
                  style={{ borderRadius: '6px' }}
                  src={VIDEO_URL}
                  poster={POSTER_URL}
                  controls
                  preload="metadata"
                  playsInline
                />
              </div>
              <p className="lumina-label mt-4">@betobenitesbeauty</p>
            </div>
          </div>

          <div className="lumina-reveal">
            <h2 className="lumina-h2">Caso real</h2>
            <div className="mt-8 md:mt-10 space-y-6 md:space-y-7">
              {paragraphs.map((text, index) => (
                <p key={index} className="lumina-body max-w-[62ch]">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
