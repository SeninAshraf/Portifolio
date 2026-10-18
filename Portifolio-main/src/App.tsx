import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Work } from './components/sections/Work';
import { Achievements } from './components/sections/Achievements';
import { Programs } from './components/sections/Programs';
import { Skills } from './components/sections/Skills';
import { LinkedInUpdates } from './components/sections/LinkedInUpdates';
import { Contact } from './components/sections/Contact';
import { LenisWrapper } from './components/layout/LenisWrapper';

function App() {
  return (
    <LenisWrapper>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <div className="min-h-screen overflow-x-clip">
        <Navbar />
        <main id="main">
          <Hero />
          <About />
          <Experience />
          <Work />
          <Achievements />
          <Programs />
          <Skills />
          <LinkedInUpdates />
          <Contact />
        </main>
        <Footer />
      </div>
      {/* Soft fade where content meets the bottom edge, as in a printed page */}
      <div aria-hidden className="pointer-events-none fixed inset-x-0 bottom-0 z-40 h-16 bg-gradient-to-t from-paper to-transparent" />
    </LenisWrapper>
  );
}

export default App;
