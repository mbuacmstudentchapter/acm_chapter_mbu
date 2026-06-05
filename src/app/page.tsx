import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Team from "@/components/Team";
import Projects from "@/components/Projects";
import Resources from "@/components/Resources";
import Opportunities from "@/components/Opportunities";
import Blog from "@/components/Blog";
import Join from "@/components/Join";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-navy text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Events />
        <Projects />
        <Resources />
        <Opportunities />
        <Team />
        <Blog />
        <Join />
      </main>
      <Footer />
    </div>
  );
}
