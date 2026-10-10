import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Work } from './components/sections/Work';
import { Achievements } from './components/sections/Achievements';
import { Programs } from './components/sections/Programs';
import { Skills } from './components/sections/Skills';
import { Contact } from './components/sections/Contact';
import { LinkedInUpdates } from './components/sections/LinkedInUpdates';
import { LenisWrapper } from './components/layout/LenisWrapper';

function App() {
  return (
    <LenisWrapper>
      <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-white font-sans">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Work />
          <Achievements />
          <Programs />
          <Skills />
          <LinkedInUpdates />
          <Contact />
        </main>
        <Footer />
      </div>
    </LenisWrapper>
  );
}

export default App;
