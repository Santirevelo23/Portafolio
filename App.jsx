import React from 'react';
import About from './src/app/sections/About';
import Background from './src/app/sections/Background';
import Contact from './src/app/sections/Contact';
import Footer from './src/app/sections/Footer';
import Header from './src/app/sections/Header';
import Hero from './src/app/sections/Hero';
import NavbarMobile from './src/app/sections/NavbarMobile';
import Projects from './src/app/sections/Projects';

function App() {
  return (
    <div className='App dark:text-gray-200 dark:bg-slate-900'>
      <Header />
      <Background />
      <NavbarMobile />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
