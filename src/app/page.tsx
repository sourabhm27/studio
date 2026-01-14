import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Portfolio from '@/components/sections/portfolio';
import Experience from '@/components/sections/experience';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="animate-in fade-in duration-500">
            <Hero />
        </div>
        <div className="animate-in fade-in duration-500 delay-200">
            <About />
        </div>
        <div className="animate-in fade-in duration-500 delay-300">
            <Skills />
        </div>
        <div className="animate-in fade-in duration-500 delay-400">
            <Portfolio />
        </div>
        <div className="animate-in fade-in duration-500 delay-500">
            <Experience />
        </div>
        <div className="animate-in fade-in duration-500 delay-600">
            <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
