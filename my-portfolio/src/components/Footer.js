import React from "react";

function Footer() {
    return (
        <section id="footer">
            <div className="footer container">
                <div className="brand">
                    <h1><span>J</span>ohny <span>R</span>ex</h1>
                </div>
                <h2>Your Complete Web Solution</h2>
                <div className="social-icon">
                    <div className="social-item">
                        <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" alt="Facebook" /></a>
                    </div>
                    <div className="social-item">
                        <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" alt="Instagram" /></a>
                    </div>
                    <div className="social-item">
                        <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/x.png" alt="Twitter" /></a>
                    </div>
                    <div className="social-item">
                        <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/behance.png" alt="Behance" /></a>
                    </div>
                </div>
                <p>Copyright © 2024 T-Rex. All rights reserved</p>
            </div>
        </section>
    );
}

export default Footer;
