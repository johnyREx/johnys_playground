import React, { useEffect, useRef } from 'react';

function Navbar() {
  const hamburgerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const menuItemsRef = useRef([]);

  useEffect(() => {
    const hamburger = hamburgerRef.current;
    const mobileMenu = mobileMenuRef.current;
    const menuItems = mobileMenu.querySelectorAll('li');

    const handleHamburgerClick = () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const header = document.querySelector('.header.container');
      if (scrollPosition > 250) {
        header.style.backgroundColor = '#29323c';
      } else {
        header.style.backgroundColor = 'transparent';
      }
    };

    hamburger.addEventListener('click', handleHamburgerClick);
    document.addEventListener('scroll', handleScroll);

    menuItems.forEach((item) => {
      item.addEventListener('click', handleHamburgerClick);
    });

    return () => {
      hamburger.removeEventListener('click', handleHamburgerClick);
      document.removeEventListener('scroll', handleScroll);
      menuItems.forEach((item) => {
        item.removeEventListener('click', handleHamburgerClick);
      });
    };
  }, []);

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
            <div className="hamburger" ref={hamburgerRef}>
              <div className="bar"></div>
            </div>
            <ul ref={mobileMenuRef}>
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

export default Navbar;
