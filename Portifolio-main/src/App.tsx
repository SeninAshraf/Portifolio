import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Work } from './components/sections/Work';
import { GithubActivity } from './components/sections/GithubActivity';
import { Achievements } from './components/sections/Achievements';
import { Programs } from './components/sections/Programs';
import { Skills } from './components/sections/Skills';
import { LinkedInUpdates } from './components/sections/LinkedInUpdates';
import { Contact } from './components/sections/Contact';
import { LenisWrapper } from './components/layout/LenisWrapper';

function App() {
  return (
    <LenisWrapper>
      <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-white font-sans antialiased overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Work />
          <GithubActivity />
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
