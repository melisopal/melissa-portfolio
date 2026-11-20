function About() {
  return (
    <div className="about">
      <p className="about-intro">
        Hey! I'm a software developer with a focus on 
        building secure, well structured applications. I also have a 
        strong interest in cybersecurity and am exploring the intersection of 
        technology, law, and policy as a long term area of growth. I also have 
        a background in UI design, which informs how I approach usability 
        and structure in my development work. Outside of software, I have 
        interests in language learning, sports, and the arts.
      </p>
      

      <div className="about-bottom">
        <div className="about-skills-wrapper">
          <div className="about-skills">
            <div className="skill-column">
              <h3>Hard Skills</h3>
              <p>Java</p>
              <p>Python</p>
              <p>C#</p>
            </div>
            <div className="skill-column">
              <h3>Tools & Frameworks</h3>
              <p>ASP.NET</p>
              <p>Azure</p>
              <p>Git</p>
            </div>
            <div className="skill-column">
              <h3>Soft Skills</h3>
              <p>Time management</p>
              <p>Attentive</p>
              <p>Energetic</p>
            </div>
            <div className="skill-column">
              <h3>Languages</h3>
              <p>English</p>
              <p>Albanian</p>
              <p>Japanese</p>
            </div>
          </div>

          <p className="about-learning">Currently learning: Cybersecurity fundamentals... </p>
        </div>

        <div className="about-side">
          <img src="/melissa2.png" alt="Melissa" className="about-photo" />
          <div className="about-links">
            <a href="https://github.com/melisopal" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://www.linkedin.com/in/melisopal289" target="_blank" rel="noopener noreferrer">Linkedin</a>
            <a href="mailto:melissadushaj@gmail.com">melissadushaj@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About