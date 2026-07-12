import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Modes } from "@/components/Modes";
import { Features } from "@/components/Features";
import { DownloadCTA } from "@/components/DownloadCTA";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
      <Modes />
      <Features />
      <DownloadCTA />
      <Footer />
    </main>
  );
}
