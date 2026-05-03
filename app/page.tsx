import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import WhyWorkWithMe from "./components/WhyWorkWithMe";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col relative w-full overflow-x-hidden pt-20">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <WhyWorkWithMe />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
