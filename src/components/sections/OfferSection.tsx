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
    <section className="py-12 md:py-16 bg-lumina-black text-lumina-white px-5 md:px-4">
      <div className="lumina-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Timer */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-lumina-gold text-lumina-black px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ⏰ OFERTA ESPECIAL TERMINA EM:
            </div>
            <div className="flex justify-center gap-2 text-2xl md:text-3xl font-bold text-lumina-gold">
              <div className="bg-lumina-white/10 px-3 py-2 rounded">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <span>:</span>
              <div className="bg-lumina-white/10 px-3 py-2 rounded">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <span>:</span>
              <div className="bg-lumina-white/10 px-3 py-2 rounded">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="mb-8">
            <div className="text-gray-400 text-lg line-through mb-2">
              De R$ 497,00
            </div>
            <div className="text-4xl md:text-6xl font-bold text-lumina-gold mb-2">
              R$ 247
            </div>
            <div className="text-gray-300">
              ou até 3x de R$ 82,00 sem juros
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button 
              onClick={handleCTAClick}
              variant="lumina-premium"
              size="xl"
              className="lumina-btn-premium animate-pulse-subtle"
            >
              QUERO GARANTIR AGORA
            </Button>
            <SecurityInfo />
          </div>

          {/* Security badges */}
          <div className="flex justify-center items-center gap-4 mt-8 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <Shield className="w-4 h-4" />
              Pagamento Seguro
            </div>
            <div className="flex items-center gap-1">
              <CreditCard className="w-4 h-4" />
              PIX | Cartão
            </div>
            <div className="flex items-center gap-1">
              <Zap className="w-4 h-4" />
              Acesso Imediato
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};