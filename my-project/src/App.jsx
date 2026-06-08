import './App.css'

function App() {
  return (
    <div className="portfolio">
      <nav className="topbar">
        <div className="topbar-brand">Manya</div>
        <div className="topbar-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio</p>
          <h1>Manya</h1>
          <p className="intro">
            Motivated Information Science and Engineering student specializing in AI, data analysis,
            and web development. I build polished, data-driven applications with clean design and practical impact.
          </p>
          <div className="hero-details">
            <span>NMAM Institute of Technology, Nitte</span>
            <span>Expected Graduation 2027</span>
          </div>
        </div>

        <div className="hero-actions">
          <a href="mailto:manyamaiya30@gmail.com">manyamaiya30@gmail.com</a>
          <a href="tel:+919980736462">+91 99807 36462</a>
          <div className="profile-links">
            <a href="https://linkedin.com/in/manya-maiya-3202542a8" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/manyaa133" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="section about">
          <h2>Professional Summary</h2>
          <p>
            Quick learner and analytical problem solver with hands-on experience in machine learning,
            data-driven projects, and AI prompt engineering. I build solutions that turn data into insight
            and make complex ideas easy to understand.
          </p>
        </section>

        <section id="skills" className="section grid">
          <article className="card">
            <h3>Technical Skills</h3>
            <div className="chips">
              <span>Python</span>
              <span>Java</span>
              <span>C</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Pandas</span>
              <span>NumPy</span>
              <span>Matplotlib</span>
              <span>MySQL</span>
              <span>Git</span>
            </div>
          </article>

          <article className="card">
            <h3>Key Strengths</h3>
            <ul>
              <li>Analytical and logical thinking</li>
              <li>Problem solving</li>
              <li>Team collaboration</li>
              <li>Fast learning ability</li>
              <li>Attention to detail</li>
            </ul>
          </article>
        </section>

        <section id="projects" className="section projects">
          <h2>Projects</h2>
          <div className="project-list">
            <article className="project-card">
              <h3>Deep Learning Autoencoder</h3>
              <p>
                Designed and implemented an encoder-decoder network in Python using NumPy to learn
                compressed representations and reconstruct data.
              </p>
              <a href="https://github.com/manyaa133/DeepLearning" target="_blank" rel="noreferrer">
                View repo
              </a>
            </article>

            <article className="project-card">
              <h3>Student Performance Analysis System</h3>
              <p>
                Analyzed academic performance datasets with Pandas and Matplotlib to extract trends and
                deliver visual insights for decision-making.
              </p>
            </article>

            <article className="project-card">
              <h3>Headless Smart Home Assistant</h3>
              <p>
                Built an AI prompt-driven assistant that converts user commands into structured JSON outputs
                for automation workflows.
              </p>
            </article>
          </div>
        </section>

        <section id="education" className="section education">
          <h2>Education & Certifications</h2>
          <div className="education-grid">
            <div className="education-card">
              <h3>B.Tech in Information Science & Engineering</h3>
              <p>NMAM Institute of Technology, Nitte — CGPA: 7.99</p>
            </div>

            <div className="education-card">
              <h3>Certifications</h3>
              <ul>
                <li>Microsoft Azure Learning Challenge – AINNOVATION 2025</li>
                <li>Applied AI Learning Challenge – AINNOVATION 2025</li>
                <li>Microsoft AI Learning Challenge – AINNOVATION 2025</li>
                <li>Java Programming Certification</li>
                <li>Web Development Fundamentals Certification</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Ready to build data-driven web experiences and AI-powered tools.</p>
        <p>
          Find me on <a href="https://github.com/manyaa133" target="_blank" rel="noreferrer">GitHub</a> and{' '}
          <a href="https://linkedin.com/in/manya-maiya-3202542a8" target="_blank" rel="noreferrer">LinkedIn</a>.
        </p>
      </footer>
    </div>
  )
}

export default App
