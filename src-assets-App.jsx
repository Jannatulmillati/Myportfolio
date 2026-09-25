import Navbar from "./components/Navbar";
import "./App.css";
import profileImage from "./assets/profile.jpeg";

function App() {
  return (
    <div>
      <Navbar />

      
      <section id="home" className="hero">
        <div className="hero-text">
          <p className="welcome-text">WELCOME TO MY PORTFOLIO</p>

          <h1>Jannatul Millati</h1>

          <h2>Web Development Student</h2>

          <p className="hero-description">
            I am a passionate student learning web development.
            I enjoy creating beautiful and responsive websites
            using modern technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              Explore Projects
            </a>

            <a href="#about" className="secondary-button">
              About Me
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-decoration"></div>

          <img
            src={profileImage}
            alt="Jannatul Millati"
            className="profile-image"
          />
        </div>
      </section>

      
      <section id="about">
        <p className="section-label">ABOUT ME</p>

        <h2>About Me</h2>

        <div className="about-content">
          <p>
            Hello! I am Jannatul Millati, a student learning web
            development. I enjoy creating websites and learning
            new technologies.
          </p>

          <p>
            I am passionate about learning programming and
            developing my skills in modern web technologies.
          </p>
        </div>
      </section>

      
      <section id="skills">
        <p className="section-label">MY SKILLS</p>

        <h2>My Skills</h2>

        <div className="skills-container">
          <div>C</div>
          <div>C++</div>
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
          <div>React</div>
        </div>
      </section>

      
      <section id="projects">
        <p className="section-label">MY WORK</p>

        <h2>My Projects</h2>

        <div className="projects-container">
          <div className="project-card">
            <h3>Portfolio Website</h3>

            <p>
              A personal portfolio website built with React
              and CSS.
            </p>
          </div>

          <div className="project-card">
            <h3>Online Movie Booking</h3>

            <p>
              A simple movie ticket booking project.
            </p>
          </div>

          <div className="project-card">
            <h3>Java Project</h3>

            <p>
              A beginner-friendly Java programming project.
            </p>
          </div>
        </div>
      </section>

      
     <section id="education">
  <p className="section-label">MY EDUCATION</p>

  <h2>Education</h2>

  <div className="education-container">

    <div className="education-card">
      <span>2024 - Present</span>
      <h3>B.Sc. in Computer Science and Engineering</h3>
      <p>Metropolitan University, Sylhet</p>
    </div>

    <div className="education-card">
      <span>2021</span>
      <h3>Higher Secondary Certificate (HSC)</h3>
      <p>Sylhet Government Women's College, Sylhet</p>
    </div>

    <div className="education-card">
      <span>2019</span>
      <h3>Secondary School Certificate (SSC)</h3>
      <p>Jalalabad Cantonment Board High School</p>
    </div>

  </div>
</section>
<section id="contact">
  <p className="section-label">GET IN TOUCH</p>

  <h2>Contact Me</h2>

  <div className="contact-content">
    <p>
      <strong>Name:</strong> Jannatul Millati
    </p>

    <p>
      <strong>Email:</strong>{" "}
      <a href="mailto:jannatulmillati17@gmail.com">
        jannatulmillati17@gmail.com
      </a>
    </p>

    <p>
      <strong>Phone:</strong>{" "}
      <a href="tel:01819627626">
        01819627626
      </a>
    </p>

    <p>
      <strong>GitHub:</strong>{" "}
      <a
        href="https://github.com/Jannatulmillati"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Profile
      </a>
    </p>
  </div>
</section>
      {/* Footer */}
      <footer>
        <p>© 2026 Jannatul Millati. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
