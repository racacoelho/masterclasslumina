import { Navigation } from './Navigation';
import { HeroSection } from './sections/HeroSection';
import { ProblemSection } from './sections/ProblemSection';
import { PauseSection } from './sections/PauseSection';
import { OpportunitySection } from './sections/OpportunitySection';
import { ValuePropositionSection } from './sections/ValuePropositionSection';
import { CourseDetailsSection } from './sections/CourseDetailsSection';
import { TargetAudienceSection } from './sections/TargetAudienceSection';
import { OriginStorySection } from './sections/OriginStorySection';
import { IncludedSection } from './sections/IncludedSection';
import { OfferSection } from './sections/OfferSection';
import { GuaranteeSection } from './sections/GuaranteeSection';
import { FAQSection } from './sections/FAQSection';
import { FloatingCTA } from './FloatingCTA';
import { Footer } from './Footer';

export const LuminaLandingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <PauseSection />
      <OpportunitySection />
      <ValuePropositionSection />
      <CourseDetailsSection />
      <TargetAudienceSection />
      <OriginStorySection />
      <IncludedSection />
      <OfferSection />
      <GuaranteeSection />
      <FAQSection />
      <FloatingCTA />
      <Footer />
    </div>
  );
};
