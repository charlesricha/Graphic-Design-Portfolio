import { Hero } from "@/components/hero";
import { Portfolio } from "@/components/portfolio";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="flex flex-col bg-[#0C0D0E] text-[#F4F3EE]">
      <Hero />
      <Portfolio />
      <Services />
      <About />
      <Testimonials />
      <Contact />
    </div>
  );
}
