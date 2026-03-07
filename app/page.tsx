import CategorySection from "@/core/components/CategorySelection";
import HeroBanner from "@/core/components/HeroBanner";

export default function Home() {
  return (
    <main className="bg-zinc-50 min-h-screen">

      <HeroBanner />

      <CategorySection />

    </main>
  );
}