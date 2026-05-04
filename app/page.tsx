import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import FeaturedWork from "./components/FeaturedWork";
import WhyWorkWithMe from "./components/WhyWorkWithMe";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { getBehanceProjects } from "../lib/behance";
export default async function Home() {
  const projects = await getBehanceProjects('soujoseeugenio');

  return (
    <main className="min-h-screen bg-background flex flex-col relative w-full overflow-x-hidden pt-20">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <FeaturedWork projects={projects} />
      <WhyWorkWithMe />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
