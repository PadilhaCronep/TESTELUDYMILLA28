
import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Credibility from './components/Credibility.tsx';
import Defense from './components/Defense.tsx';
import SocialMedia from './components/SocialMedia.tsx';
import ContactForm from './components/ContactForm.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-yellow-400 selection:text-zinc-950 bg-[#050505]">
      <Header />
      <main>
        <div className="reveal-node">
          <Hero />
        </div>
        <div className="reveal-node">
          <About />
        </div>
        <div className="reveal-node">
          <Credibility />
        </div>
        <div className="reveal-node">
          <Defense />
        </div>
        <div className="reveal-node">
          <SocialMedia />
        </div>
        {/* ContactForm já contém seus próprios reveal-nodes e seções internas */}
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
