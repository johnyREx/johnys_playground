import React from "react";

function Services() {
    return (
        <section id="services">
            <div className="services container">
                <div className="service-top">
                    <h1 className="section-title">Serv<span>i</span>ces</h1>
                    <p>Here are some of the services I offer:</p>
                </div>
                <div className="service-bottom">
                    <div className="service-item">
                        <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="Service Icon" /></div>
                        <h2>Web Design</h2>
                        <p>I specialize in crafting visually stunningand user-friendly websites. From elegant layouts to intuitive navigation, I ensure that your website not only looks great but also provides user experience.</p>
                    </div>
                    <div className="service-item">
                        <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="Service Icon" /></div>
                        <h2>Web Design</h2>
                        <p>Using the latest front-end technologies such as React, I develop dynamic and interactive web applications. From implementing complex features to optimizing performance, I ensure that your application meets the highest standards of quality and usability.</p>
                    </div>
                    <div className="service-item">
                        <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="Service Icon" /></div>
                        <h2>Web Design</h2>
                        <p>I create websites that adapt seamlessly to any screen size, ensuring a consistent and engaging experience across all devices. Whether it's a desktop, tablet, or smartphone, your website will look and function flawlessly.</p>
                    </div>
                    <div className="service-item">
                        <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="Service Icon" /></div>
                        <h2>Web Design</h2>
                        <p>Need a unique solution for your project? I provide custom web development services tailored to your specific requirements. Whether it's building a custom feature or integrating third-party APIs, I ensure that your project stands out and meets your exact needs.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
