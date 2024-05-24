import React, { useState } from 'react';
import Header from './components/Header';
import Navbar from './Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/styles.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <div className="App">
      <Header toggleMenu={toggleMenu} />
      <Navbar isMenuOpen={isMenuOpen} />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
