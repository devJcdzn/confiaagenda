import { Features } from "@/components/features";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";
import { UtilitiesSection } from "@/components/utilities";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Features />
      <UtilitiesSection />
      <Pricing />
    </div>
  );
}
