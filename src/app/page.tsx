import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Portfolio } from "@/components/portfolio";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
}
