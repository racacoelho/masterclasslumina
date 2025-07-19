import { useState, useEffect } from 'react';
import { TimerBanner } from './TimerBanner';
import { HeroSection } from './sections/HeroSection';
import { ProblemSection } from './sections/ProblemSection';
import { OpportunitySection } from './sections/OpportunitySection';
import { TargetAudienceSection } from './sections/TargetAudienceSection';
import { ValuePropositionSection } from './sections/ValuePropositionSection';
import { ProofSection } from './sections/ProofSection';
import { OriginStorySection } from './sections/OriginStorySection';
import { CourseDetailsSection } from './sections/CourseDetailsSection';
import { OfferSection } from './sections/OfferSection';
import { GuaranteeSection } from './sections/GuaranteeSection';
import { FutureVisionSection } from './sections/FutureVisionSection';
import { FAQSection } from './sections/FAQSection';
import { FloatingCTA } from './FloatingCTA';
import { Footer } from './Footer';

export const LuminaLandingPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <TimerBanner timeLeft={timeLeft} />
      <HeroSection timeLeft={timeLeft} />
      <ProblemSection />
      <OpportunitySection />
      <TargetAudienceSection />
      <ValuePropositionSection />
      <ProofSection />
      <OriginStorySection />
      <CourseDetailsSection />
      <OfferSection timeLeft={timeLeft} />
      <GuaranteeSection />
      <FutureVisionSection />
      <FAQSection />
      <FloatingCTA />
      <Footer />
    </div>
  );
};