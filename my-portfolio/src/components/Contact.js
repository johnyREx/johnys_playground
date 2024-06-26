import React, { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cbynyen', 'template_koyzyek', form.current, 'NRSJLZl04DdP37ubL')
            .then((result) => {
                console.log(result.text);
                alert("Message sent successfully!");
            }, (error) => {
                console.log(error.text);
                alert("An error occurred, please try again.");
            });

        e.target.reset();
    };

    return (
        <section id="contact">
            <div className="contact container">
                <div>
                    <h1 className="section-title">Contact <span>info</span></h1>
                </div>
                <div className="contact-items">
                    <div className="contact-item">
                        <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png" alt="phone" /></div>
                        <div className="contact-info">
                            <h1>Phone</h1>
                            <h2>+233 246 408 194</h2>
                            <h2>+39 350 986 0825</h2>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png" alt="email" /></div>
                        <div className="contact-info">
                            <h1>Email</h1>
                            <h2>johnkwofie99@outlook.com</h2>
                            <h2>johnkwofie99@icloud.com</h2>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" alt="address" /></div>
                        <div className="contact-info">
                            <h1>Address</h1>
                            <h2>Castelfranco Emilia, Modena, Italy</h2>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <h2>Contact Me</h2>
                        <label>Name</label>
                        <input type="text" name="user_name" required />
                        <label>Email</label>
                        <input type="email" name="user_email" required />
                        <label>Message</label>
                        <textarea name="message" required></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
