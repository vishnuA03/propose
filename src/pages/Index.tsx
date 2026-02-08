import FloatingHearts from "@/components/FloatingHearts";
import HeartCursorTrail from "@/components/HeartCursorTrail";
import LandingSection from "@/components/LandingSection";
import StorySection from "@/components/StorySection";
import MemorySection from "@/components/MemorySection";
import ProposalSection from "@/components/ProposalSection";
import EndAnimation from "@/components/EndAnimation";

const Index = () => {
  return (
    <main className="relative overflow-hidden">
      <FloatingHearts />
      <HeartCursorTrail />
      <LandingSection />
      <StorySection />
      <MemorySection />
      <ProposalSection />
      <EndAnimation />
      <footer className="relative z-10 text-center py-12 font-romantic text-2xl text-primary/60">
        Made with 💕 just for you, Abinaya
      </footer>
    </main>
  );
};

export default Index;
