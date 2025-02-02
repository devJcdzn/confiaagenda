import { CallToAction } from "@/components/cta";
import { Features } from "@/components/features";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import { UtilitiesSection } from "@/components/utilities";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Features />
      <UtilitiesSection />
      <Pricing />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
