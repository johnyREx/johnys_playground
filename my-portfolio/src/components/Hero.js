import React from 'react';

function Hero() {
  return (
    <section id="hero">
      <div className="hero container">
        <div>
          <h1>Hello, <span></span></h1>
          <h1>My Name is <span></span></h1>
          <h1>Johny Rex <span></span></h1>
          <a href="#projects" type="button" className="cta">Portfolio</a>
          <img src="./img/hero-bg.png" alt="Hero Background" style={{ width: '', height: 'auto', position: 'absolute', zIndex: '-1', top: '0', left: '0' }} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
