import React from "react";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2>About Me</h2>

        <p>
          Hi, I'm <strong>Mahad</strong>, a passionate MERN Stack Developer who
          loves building modern, responsive, and user-friendly web applications.
          I enjoy turning ideas into real-world projects using the latest web
          technologies.
        </p>

        <p>
          My main focus is creating fast, secure, and scalable applications with
          React, Node.js, Express.js, and MongoDB. I continuously learn new
          technologies to improve my skills and deliver better user experiences.
        </p>

        <div className="skills">
          <div className="skill-card">HTML</div>
          <div className="skill-card">CSS</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">React</div>
          <div className="skill-card">Node.js</div>
          <div className="skill-card">Express.js</div>
          <div className="skill-card">MongoDB</div>
          <div className="skill-card">Git & GitHub</div>
        </div>
      </div>
    </section>
  );
};

export default About;