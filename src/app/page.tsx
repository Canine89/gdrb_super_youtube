import { AdBand } from "@/components/AdRails";
import { HeroSection } from "@/components/HeroSection";
import { PromptExplorer } from "@/components/PromptExplorer";
import { fetchAds, fetchPrompts } from "@/lib/sheets";

export const revalidate = 60;

export default async function Home() {
  const [rows, ads] = await Promise.all([fetchPrompts(), fetchAds()]);

  return (
    <main className="min-h-screen bg-surface-soft">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <article className="overflow-hidden rounded-[24px] border border-hairline bg-canvas shadow-[0_22px_60px_rgba(36,36,36,0.08)]">
          <div className="h-[6px] w-full bg-youtube" aria-hidden />
          <HeroSection />
          <AdBand data={ads} />
          <PromptExplorer initialRows={rows} />
        </article>
      </div>
    </main>
  );
}
