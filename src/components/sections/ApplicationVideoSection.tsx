import applicationVideo from '@/assets/hero-video-ios.mp4';
import applicationPoster from '@/assets/hero-first-frame.jpg';

export const ApplicationVideoSection = () => (
  <section className="lumina-section bg-secondary overflow-hidden">
    <div className="lumina-container-wide">
      <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:items-end">
        <div className="lumina-reveal lg:pb-10">
          <p className="lumina-eyebrow">Aplicação</p>
          <h2 className="lumina-h2 mt-7 lowercase max-w-[11ch]">precisão que se transforma em agilidade.</h2>
          <p className="lumina-body mt-7 max-w-[38rem]">
            Com planejamento, mapa e arquitetura definidos, a aplicação pode ser realizada em cerca de 40 minutos,
            conforme o projeto.
          </p>
        </div>

        <div className="lumina-reveal relative aspect-video overflow-hidden bg-foreground">
          <video
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
            poster={applicationPoster}
            disablePictureInPicture
            aria-label="Aplicação profissional do Sistema Dermasilk™"
            className="h-full w-full object-cover"
            src={applicationVideo}
          />
        </div>
      </div>
    </div>
  </section>
);