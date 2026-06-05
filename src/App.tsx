import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-black text-neutral-100 selection:bg-neutral-200 selection:text-black antialiased">
      <Navigation />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;