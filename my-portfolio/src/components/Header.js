import React, { useState } from 'react';

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

  return (
    <section id="header">
      <div className="header container">
        <div className="nav-bar">
          <div className="brand">
            <a href="#hero">
              <h1><span>J</span>ohny <span>R</span>ex</h1>
            </a>
          </div>
          <div className="nav-list">
            <div className="hamburger" onClick={toggleMenu}>
              <div className="bar"></div>
            </div>
            <ul className={isMenuOpen ? "open" : ""}>
              <li><a href="#hero" data-after="Home">Home</a></li>
              <li><a href="#services" data-after="Service">Services</a></li>
              <li><a href="#projects" data-after="Projects">Projects</a></li>
              <li><a href="#about" data-after="About">About</a></li>
              <li><a href="#contact" data-after="Contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
