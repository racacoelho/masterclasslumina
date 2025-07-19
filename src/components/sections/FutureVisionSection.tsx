import { Button } from '@/components/ui/button';
import { Star, TrendingUp, Users, Award } from 'lucide-react';
import { SecurityInfo } from '../SecurityInfo';

export const FutureVisionSection = () => {
  const handleCTAClick = () => {
    window.open('https://pay.kiwify.com.br/hK6DKTn', '_blank');
  };

  return (
    <section className="lumina-section-black relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/83336a76-0df6-4594-bada-085a8926e415.png"
          alt="Profissional aplicando mega hair em salão de luxo"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="lumina-heading-lg font-serif mb-8 lumina-text-gold">
          Imagine sua carreira daqui a 6 meses...
        </h2>
        
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Você é reconhecida como a <strong className="lumina-text-gold">especialista em mega hair da sua região</strong>. 
            Suas clientes chegam pedindo especificamente "aquela técnica invisível que só você faz".
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 p-6 rounded-lg border border-accent/20">
              <TrendingUp className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-bold lumina-text-gold mb-2">Faturamento</h3>
              <p className="text-gray-300">42% maior que antes</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg border border-accent/20">
              <Users className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-bold lumina-text-gold mb-2">Indicações</h3>
              <p className="text-gray-300">Agenda sempre cheia</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg border border-accent/20">
              <Award className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-bold lumina-text-gold mb-2">Reconhecimento</h3>
              <p className="text-gray-300">Referência na região</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg border border-accent/20">
              <Star className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-bold lumina-text-gold mb-2">Satisfação</h3>
              <p className="text-gray-300">Clientes encantadas</p>
            </div>
          </div>
        </div>

        <div className="bg-accent/10 border border-accent/20 p-8 rounded-lg max-w-3xl mx-auto mb-12">
          <h3 className="text-2xl font-bold lumina-text-gold mb-4">
            Você pode cobrar mais, trabalhar menos e ter clientes mais satisfeitas
          </h3>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Porque quando você domina a técnica mais avançada do mercado, 
            você não compete por preço. Você compete por qualidade.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            <strong>A pergunta é:</strong> Você vai continuar usando material amador 
            ou vai se posicionar como a profissional premium que você pode ser?
          </p>
        </div>

        <div className="text-center">
          <Button 
            onClick={handleCTAClick}
            variant="lumina-premium"
            size="xl"
            className="lumina-btn-premium mb-4"
          >
            QUERO GARANTIR AGORA
          </Button>
          
          <SecurityInfo />
        </div>

        <p className="text-gray-400 text-sm mt-6 text-center">
          ⏰ Oferta por tempo limitado | 🎯 Apenas 100 vagas disponíveis
        </p>
      </div>
    </section>
  );
};