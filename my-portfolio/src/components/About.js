import React from "react";
import img2 from '../img/img-2.png';

function About() {
    return (
        <section id="about">
            <div className="about container">
                <div className="col-left">
                    <div className="about-img">
                        <img src={img2} alt="img" />
                    </div>
                </div>
                <div className="col-right">
                    <h1 className="section-title">About <span>me</span></h1>
                    <h2>Front End Developer</h2>
                    <p>As a front-end web developer and aspiring diplomat, I specialize in bridging technology with diplomacy. With a keen eye for detail and a passion for elegant design, I craft user-centric web experiences that seamlessly blend functionality with aesthetics. My expertise lies in coding languages such as HTML, CSS, JavaScript, React, and Python, allowing me to create dynamic and interactive websites. I am committed to balancing my technical skills with a deep understanding of global affairs, striving to create solutions that not only look great but also serve a higher purpose.</p>
                    <a href="#" className="cta">Download Resume</a>
                </div>
            </div>
        </section>
    );
}

export default About;
