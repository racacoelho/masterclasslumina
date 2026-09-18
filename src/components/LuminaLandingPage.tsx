import { Navigation } from './Navigation';
import { HeroSection } from './sections/HeroSection';
import { OpportunitySection } from './sections/OpportunitySection';
import { ValuePropositionSection } from './sections/ValuePropositionSection';
import { ApplicationVideoSection } from './sections/ApplicationVideoSection';
import { MasterySection } from './sections/MasterySection';
import { CourseDetailsSection } from './sections/CourseDetailsSection';
import { TargetAudienceSection } from './sections/TargetAudienceSection';
import { OriginStorySection } from './sections/OriginStorySection';
import { IncludedSection } from './sections/IncludedSection';
import { MapaSection } from './sections/MapaSection';
import { OfferSection } from './sections/OfferSection';
import { GuaranteeSection } from './sections/GuaranteeSection';
import { FAQSection } from './sections/FAQSection';
import { FinalCTASection } from './sections/FinalCTASection';
import { FloatingCTA } from './FloatingCTA';
import { Footer } from './Footer';
import { useReveal } from '@/hooks/use-reveal';

export const LuminaLandingPage = () => {
  useReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <OpportunitySection />
        <ValuePropositionSection />
        <ApplicationVideoSection />
        <MasterySection />
        <CourseDetailsSection />
        <TargetAudienceSection />
        <OriginStorySection />
        <IncludedSection />
        <MapaSection />
        <OfferSection />
        <GuaranteeSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <FloatingCTA />
      <Footer />
    </div>
  );
};
