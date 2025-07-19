interface TimerBannerProps {
  timeLeft: {
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export const TimerBanner = ({ timeLeft }: TimerBannerProps) => {
  return (
    <div className="bg-lumina-gold text-lumina-black py-3 px-4">
      <div className="lumina-container">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
          <span className="font-semibold text-sm sm:text-base">
            ⏰ OFERTA ESPECIAL TERMINA EM:
          </span>
          <div className="flex items-center gap-1 text-lg sm:text-xl font-bold">
            <div className="bg-lumina-black text-lumina-gold px-2 py-1 rounded text-sm sm:text-base">
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <span>:</span>
            <div className="bg-lumina-black text-lumina-gold px-2 py-1 rounded text-sm sm:text-base">
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <span>:</span>
            <div className="bg-lumina-black text-lumina-gold px-2 py-1 rounded text-sm sm:text-base">
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};