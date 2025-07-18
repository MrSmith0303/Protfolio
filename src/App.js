import './App.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaBars } from 'react-icons/fa';
import { useEffect, useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleNavClick = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = e.target.getAttribute('href').slice(1);
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false); // always close mobile menu on link click
      }
    };
    const nav = document.querySelector('.navbar');
    nav?.addEventListener('click', handleNavClick);
    return () => nav?.removeEventListener('click', handleNavClick);
  }, []);
  return (
    <>
      <div className="hero-bg">
        <nav className="navbar">
          <div className="navbar-inner">
            {/* Hamburger icon for mobile */}
            <button className="hamburger" onClick={() => setMenuOpen(m => !m)} aria-label="Menü" aria-expanded={menuOpen}>
              <FaBars size={28} />
            </button>
            <div className={`navbar-links${menuOpen ? ' open' : ''}`}>
              <a href="#welcome">Kezdőlap</a>
              <a href="#about">Bemutatkozás</a>
              <a href="#tech">Technológiák</a>
              <a href="#projects">Projektek</a>
              <a href="#contact">Kapcsolat</a>
            </div>
          </div>
        </nav>
        {/* Dekoratív körök a háttérben */}
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
        <div className="circle circle4"></div>
        <div className="circle circle5"></div>
        <div className="circle circle6"></div>
        <div className="circle circle7"></div>
        <div className="welcome-section" id="welcome">
          <h1>Üdvözöllek!</h1>
          <p>Örülök, hogy itt vagy. Ismerd meg a munkáimat és szakmai utamat!</p>
          <a href="#about" className="hero-btn" onClick={e => {
            e.preventDefault();
            const el = document.querySelector('.hero-header');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}>Tovább a bemutatkozáshoz</a>
        </div>
        <header className="hero-header" id="about">
          <div className="hero-content">
            <div className="hero-title-block">
              <h1 className="hero-title">Kovács László</h1>
              <h2 className="hero-subtitle">Junior Szoftverfejlesztő</h2>
              <a
                href="#contact"
                className="hero-btn"
                onClick={e => {
                  e.preventDefault();
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Kapcsolat
              </a>
            </div>
            <div className="profile-card">
              <img className="profile-img" src="https://scontent.fbud4-1.fna.fbcdn.net/v/t39.30808-6/518239586_3620342008096306_2334679957408394100_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=W2L0GO2rRZEQ7kNvwF65juB&_nc_oc=AdmAITkzxNPEA8RfsWg4ZpzGqcayw4EbfkJE80kvqJYLPctv-r1p_YC7Ph5mfJZU8MI&_nc_zt=23&_nc_ht=scontent.fbud4-1.fna&_nc_gid=Wz_JWPbELtOFZLmm1jU9jw&oh=00_AfQKCkUsawjQMtiAvv420Q-mEKoE140sxsG4GKOYbOV2Cg&oe=687AE77A" alt="Kovács László" />
            </div>
          </div>
        </header>
        <section className="intro-section">
          <p className="hero-intro">Lelkes és elhivatott junior szoftverfejlesztő vagyok, akit különösen érdekel a backend fejlesztés világa, Java, C# és webes technológiák területén. Célom, hogy valós projektekben szerepet vállalva gyakorlati tapasztalatot szerezzek, és tudásomat tovább mélyítsem egy támogató, tanulásorientált fejlesztői környezetben.</p>
        </section>
        <main>
          <section className="section section-light" id="tech">
            <h2 className="section-title">Használt technológiáim</h2>
            <div className="tech-list">
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="tech-icon" />
                <span className="tech-label">Java</span>
                <div className="tech-bar-bg">
                  <div className="tech-bar-fill" style={{width: '80%'}}></div>
                </div>
                <span className="tech-percent">80%</span>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" className="tech-icon" />
                <span className="tech-label">C#</span>
                <div className="tech-bar-bg">
                  <div className="tech-bar-fill" style={{width: '75%'}}></div>
                </div>
                <span className="tech-percent">75%</span>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="tech-icon" />
                <span className="tech-label">Git</span>
                <div className="tech-bar-bg">
                  <div className="tech-bar-fill" style={{width: '60%'}}></div>
                </div>
                <span className="tech-percent">60%</span>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="tech-icon" />
                <span className="tech-label">JavaScript</span>
                <div className="tech-bar-bg">
                  <div className="tech-bar-fill" style={{width: '40%'}}></div>
                </div>
                <span className="tech-percent">40%</span>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="tech-icon" />
                <span className="tech-label">React</span>
                <div className="tech-bar-bg">
                  <div className="tech-bar-fill" style={{width: '30%'}}></div>
                </div>
                <span className="tech-percent">30%</span>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" className="tech-icon" />
                <span className="tech-label">SQL</span>
                <div className="tech-bar-bg">
                  <div className="tech-bar-fill" style={{width: '50%'}}></div>
                </div>
                <span className="tech-percent">50%</span>
              </div>
            </div>
          </section>
          <section className="section section-light projects-section" id="projects">
            <h2 className="section-title">Projektek</h2>
            <div className="projects-grid">
              <div className="project-card">
                <h3>Portfolio Website</h3>
                <p>Saját portfólió oldal, React + CSS, reszponzív dizájn.</p>
                <a href="#" className="project-link">GitHub</a>
              </div>
              <div className="project-card">
                <h3>Todo App</h3>
                <p>Egyszerű feladatkezelő alkalmazás, React + LocalStorage.</p>
                <a href="#" className="project-link">GitHub</a>
              </div>
              <div className="project-card">
                <h3>Weather App</h3>
                <p>Időjárás alkalmazás, OpenWeatherMap API, React.</p>
                <a href="#" className="project-link">GitHub</a>
              </div>
            </div>
          </section>
          <section className="section section-light contact-section" id="contact">
            <h2 className="section-title">Kapcsolat</h2>
            <form className="contact-form" onSubmit={e => {
              e.preventDefault();
              alert('Üzenet elküldve! Köszönöm a megkeresést.');
            }}>
              <div className="form-row">
                <label htmlFor="name">Név</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-row">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-row">
                <label htmlFor="message">Üzenet</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="hero-btn" style={{marginTop: '1.2rem'}}>Küldés</button>
            </form>
          </section>
        </main>
      </div>
      <footer className="footer">
        <div className="footer-icons">
          <a href="mailto:kovacslaszlo0303@gmail.com" title="Gmail" target="_blank" rel="noopener noreferrer"><FaEnvelope size={28} /></a>
          <a href="https://github.com/MrSmith0303" title="GitHub" target="_blank" rel="noopener noreferrer"><FaGithub size={28} /></a>
          <a href="https://www.linkedin.com/in/l%C3%A1szl%C3%B3-kov%C3%A1cs-3a3409204/" title="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedin size={28} /></a>
        </div>
        <div className="footer-text">
          Kovács László &middot; +36 30 812 9165
        </div>
      </footer>
    </>
  );
}

export default App;
