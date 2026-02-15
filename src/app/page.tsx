import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Expertise } from "@/components/Expertise";
import { Impact } from "@/components/Impact";
import { Experience } from "@/components/Experience";
import { Credentials } from "@/components/Credentials";
import { Research } from "@/components/Research";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { GridOverlay } from "@/components/ui/GridOverlay";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-void-black text-white selection:bg-signal-blue selection:text-white">

      <Hero />
      <About />
      <Expertise />
      <Impact />
      <Experience />
      <Credentials />
      <Testimonials />
      <Research />
      <Footer />
    </main>
  );
}
