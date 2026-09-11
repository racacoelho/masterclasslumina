import { Navigation } from './Navigation';
import { HeroSection } from './sections/HeroSection';
import { ProblemSection } from './sections/ProblemSection';
import { OpportunitySection } from './sections/OpportunitySection';
import { TargetAudienceSection } from './sections/TargetAudienceSection';
import { ValuePropositionSection } from './sections/ValuePropositionSection';
import { OriginStorySection } from './sections/OriginStorySection';
import { CourseDetailsSection } from './sections/CourseDetailsSection';
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
      <OpportunitySection />
      <ValuePropositionSection />
      <CourseDetailsSection />
      <TargetAudienceSection />
      <OriginStorySection />
      <OfferSection />
      <GuaranteeSection />
      <FAQSection />
      <FloatingCTA />
      <Footer />
    </div>
  );
};
