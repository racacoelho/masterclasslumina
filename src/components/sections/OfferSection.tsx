import { Button } from '@/components/ui/button';
import { Check, CreditCard, Shield, Zap } from 'lucide-react';
import { SecurityInfo } from '../SecurityInfo';
interface OfferSectionProps {
  timeLeft: {
    hours: number;
    minutes: number;
    seconds: number;
  };
}
export const OfferSection = ({
  timeLeft
}: OfferSectionProps) => {
  const handleCTAClick = () => {
    window.open('https://pay.kiwify.com.br/hK6DKTn', '_blank');
  };
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-lumina-black text-lumina-white px-5 md:px-8">
      <div className="lumina-container-desktop">
        <div className="max-w-5xl mx-auto text-center">
          {/* Timer */}
          <div className="lumina-desktop-spacing-lg">
            <div className="inline-flex items-center gap-2 bg-lumina-gold text-lumina-black px-4 py-2 lg:px-6 lg:py-3 rounded-full text-sm lg:text-base font-semibold mb-4 lg:mb-6">
              ⏰ OFERTA ESPECIAL TERMINA EM:
            </div>
            <div className="flex justify-center gap-2 lg:gap-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-lumina-gold">
              <div className="bg-lumina-white/10 px-3 py-2 lg:px-4 lg:py-3 xl:px-6 xl:py-4 rounded">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <span>:</span>
              <div className="bg-lumina-white/10 px-3 py-2 lg:px-4 lg:py-3 xl:px-6 xl:py-4 rounded">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <span>:</span>
              <div className="bg-lumina-white/10 px-3 py-2 lg:px-4 lg:py-3 xl:px-6 xl:py-4 rounded">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="lumina-desktop-spacing-lg">
            <div className="text-gray-400 text-lg md:text-xl lg:text-2xl xl:text-3xl line-through mb-2 lg:mb-4">
              De R$ 497,00
            </div>
            <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-lumina-gold mb-2 lg:mb-4">
              R$ 247
            </div>
            <div className="text-gray-300 text-lg lg:text-xl xl:text-2xl">
              ou até 3x de R$ 82,00 sem juros
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center lumina-desktop-spacing">
            <Button 
              onClick={handleCTAClick}
              variant="lumina-premium"
              size="xl"
              className="lumina-btn-premium animate-pulse-subtle text-base lg:text-lg xl:text-xl"
            >
              QUERO GARANTIR AGORA
            </Button>
            <SecurityInfo />
          </div>

          {/* Security badges */}
          <div className="flex justify-center items-center gap-4 lg:gap-8 mt-8 text-sm lg:text-base text-gray-400">
            <div className="flex items-center gap-1 lg:gap-2">
              <Shield className="w-4 h-4 lg:w-5 lg:h-5" />
              Pagamento Seguro
            </div>
            <div className="flex items-center gap-1 lg:gap-2">
              <CreditCard className="w-4 h-4 lg:w-5 lg:h-5" />
              PIX | Cartão
            </div>
            <div className="flex items-center gap-1 lg:gap-2">
              <Zap className="w-4 h-4 lg:w-5 lg:h-5" />
              Acesso Imediato
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};