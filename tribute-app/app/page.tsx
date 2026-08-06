import FloatingBackground from "@/components/FloatingBackground";
import Hero from "@/components/Hero";
import ShareCard from "@/components/ShareCard";
import GiftSection from "@/components/GiftSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-clip">
      <FloatingBackground />
      <Hero />
      <ShareCard />
      <GiftSection />
      <Footer />
    </main>
  );
}
