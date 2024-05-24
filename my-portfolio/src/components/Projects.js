import React from "react";
import img1 from "../img/img-1.png";

function Projects() {
  return (
    <section id="projects">
      <div className="projects container">
        <div className="projects-header">
          <h1 className="section-title">Recent <span>Projects</span></h1>
        </div>
        <div className="all-projects">
          <div className="project-item">
            <div className="project-info">
              <h1>Smart Student</h1>
              <h2>A platform that helps students to connect, collaborate, and succeed with other students. Students can take notes, set reminders, and also have access to task management features. They can also join chat rooms and interact. This platform aims to enhance the learning experience and foster a sense of community among students.</h2>
            </div>
            <div className="project-img">
              <img src={img1} alt="img" />
            </div>
          </div>
          <div className="project-item">
            <div className="project-info">
              <h1>Entertainment Hub</h1>
              <h2>A platform where people can order food from stores, make appointments to cut hair, and access other services. It provides convenience and efficiency by centralizing various entertainment-related activities into one platform.</h2>
            </div>
            <div className="project-img">
              <img src={img1} alt="img" />
            </div>
          </div>
          <div className="project-item">
            <div className="project-info">
              <h1>Afro Vote</h1>
              <h2>A platform designed to help solve voting discrepancies in Africa. Afro Vote aims to increase transparency, accessibility, and fairness in the electoral process across the continent through innovative digital solutions.</h2>
            </div>
            <div className="project-img">
              <img src={img1} alt="img" />
            </div>
          </div>
          <div className="project-item">
            <div className="project-info">
              <h1>Afro-Fund</h1>
              <h2>A crowdfunding project specifically for Africa aimed at bringing growth and development to the continent. Afr-Fund provides a platform for individuals and organizations to contribute to impactful initiatives that address key challenges and opportunities in Africa.</h2>
            </div>
            <div className="project-img">
              <img src={img1} alt="img" />
            </div>
          </div>
          <div className="project-item">
            <div className="project-info">
              <h1>Afro-Music</h1>
              <h2>Afro-Music is a groundbreaking project that celebrates the rich and diverse musical heritage of Africa. With a focus on promoting African artists and genres, Afro-Music aims to create a platform where music enthusiasts can discover, stream, and support authentic African music.</h2>
            </div>
            <div className="project-img">
              <img src={img1} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
