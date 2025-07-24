import './App.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaBars, FaCheck } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';

function sendEmail(e) {
  e.preventDefault();
  emailjs.sendForm(
    'service_nfgxc7g', // Service ID
    'template_pab30g8', // Template ID
    e.target,
    'fpaaO1Zb722qivshf' // Public Key
  ).then(
    (result) => {
      alert('Üzenet elküldve! Köszönöm a megkeresést.');
    },
    (error) => {
      alert('Hiba történt az üzenet küldésekor. Próbáld újra később.');
    }
  );
  e.target.reset();
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState('hu');
  // Szövegek két nyelven
  const texts = {
    hu: {
      nav: ['Kezdőlap', 'Bemutatkozás', 'Technológiák', 'Projektek', 'Kapcsolat'],
      welcomeTitle: 'Üdvözöllek!',
      welcomeText: 'Örülök, hogy itt vagy. Ismerd meg a munkáimat és szakmai utamat!',
      welcomeBtn: 'Tovább a bemutatkozáshoz',
      name: 'Kovács László',
      title: 'Junior Szoftverfejlesztő',
      aboutBtn: 'Kapcsolat',
      intro: 'Lelkes és elhivatott junior szoftverfejlesztő vagyok, akit különösen érdekel a backend fejlesztés világa, Java, C# és webes technológiák területén. Célom, hogy valós projektekben szerepet vállalva gyakorlati tapasztalatot szerezzek, és tudásomat tovább mélyítsem egy támogató, tanulásorientált fejlesztői környezetben.',
      techTitle: 'Használt technológiáim',
      projectsTitle: 'Projektek',
      contactTitle: 'Kapcsolat',
      contactForm: {
        name: 'Név',
        email: 'E-mail',
        message: 'Üzenet',
        send: 'Küldés',
        success: 'Üzenet elküldve! Köszönöm a megkeresést.',
        error: 'Hiba történt az üzenet küldésekor. Próbáld újra később.'
      },
      github: 'GitHub',
    },
    en: {
      nav: ['Home', 'About', 'Technologies', 'Projects', 'Contact'],
      welcomeTitle: 'Welcome!',
      welcomeText: 'Glad you are here. Discover my work and professional journey!',
      welcomeBtn: 'Go to About',
      name: 'László Kovács',
      title: 'Junior Software Developer',
      aboutBtn: 'Contact',
      intro: 'I am an enthusiastic and dedicated junior software developer, especially interested in backend development, Java, C#, and web technologies. My goal is to gain practical experience by participating in real projects and deepen my knowledge in a supportive, learning-oriented developer environment.',
      techTitle: 'Technologies I use',
      projectsTitle: 'Projects',
      contactTitle: 'Contact',
      contactForm: {
        name: 'Name',
        email: 'E-mail',
        message: 'Message',
        send: 'Send',
        success: 'Message sent! Thank you for reaching out.',
        error: 'An error occurred while sending the message. Please try again later.'
      },
      github: 'GitHub',
    }
  };
  // Projektek tömb képekkel
  const projects = [
    {
      title: "Portfolio Website",
      description: "Saját portfólió oldal, React + CSS, reszponzív dizájn.",
      image: "https://github.com/MrSmith0303/Protfolio/blob/main/public/Portfolio.png?raw=true",
      link: "https://github.com/MrSmith0303/Protfolio/tree/main"
    },
    {
      title: "Todo App",
      description: "Egyszerű feladatkezelő alkalmazás, React + LocalStorage.",
      image: "/projects/todo.png",
      link: "#"
    },
    {
      title: "Weather App",
      description: "Időjárás alkalmazás, OpenWeatherMap API, React.",
      image: "/projects/weather.png",
      link: "#"
    }
  ];
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
              <a href="#welcome">{texts[language].nav[0]}</a>
              <a href="#about">{texts[language].nav[1]}</a>
              <a href="#tech">{texts[language].nav[2]}</a>
              <a href="#projects">{texts[language].nav[3]}</a>
              <a href="#contact">{texts[language].nav[4]}</a>
            </div>
            {/* Language toggle switch */}
            <div className="lang-toggle">
              <span className="lang-label">HU</span>
              <button
                className={`switch${language === 'en' ? ' checked' : ''}`}
                onClick={() => setLanguage(language === 'hu' ? 'en' : 'hu')}
                aria-label="Nyelvváltás"
              >
                <span className="switch-slider">
                  {language === 'en' && <FaCheck color="#fff" size={18} />}
                </span>
              </button>
              <span className="lang-label">EN</span>
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
          <h1>{texts[language].welcomeTitle}</h1>
          <p>{texts[language].welcomeText}</p>
          <a href="#about" className="hero-btn" onClick={e => {
            e.preventDefault();
            const el = document.querySelector('.hero-header');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}>{texts[language].welcomeBtn}</a>
        </div>
        <header className="hero-header" id="about">
          <div className="hero-content">
            <div className="hero-title-block">
              <h1 className="hero-title">{texts[language].name}</h1>
              <h2 className="hero-subtitle">{texts[language].title}</h2>
              <a
                href="#contact"
                className="hero-btn"
                onClick={e => {
                  e.preventDefault();
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {texts[language].aboutBtn}
              </a>
            </div>
            <div className="profile-card">
              <img className="profile-img" src="https://scontent.fbud4-1.fna.fbcdn.net/v/t39.30808-6/518239586_3620342008096306_2334679957408394100_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=W2L0GO2rRZEQ7kNvwF65juB&_nc_oc=AdmAITkzxNPEA8RfsWg4ZpzGqcayw4EbfkJE80kvqJYLPctv-r1p_YC7Ph5mfJZU8MI&_nc_zt=23&_nc_ht=scontent.fbud4-1.fna&_nc_gid=Wz_JWPbELtOFZLmm1jU9jw&oh=00_AfQKCkUsawjQMtiAvv420Q-mEKoE140sxsG4GKOYbOV2Cg&oe=687AE77A" alt="Kovács László" />
            </div>
          </div>
        </header>
        <section className="intro-section">
          <p className="hero-intro">{texts[language].intro}</p>
        </section>
        <main>
          <section className="section section-light" id="tech">
            <h2 className="section-title">{texts[language].techTitle}</h2>
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
            <h2 className="section-title">{texts[language].projectsTitle}</h2>
            <div className="projects-grid">
              {projects.map((project, idx) => (
                <div className="project-card" key={idx}>
                  <img src={project.image} alt={project.title} className="project-image" />
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.link} className="project-link">GitHub</a>
                </div>
              ))}
            </div>
          </section>
          <section className="section section-light contact-section" id="contact">
            <h2 className="section-title">{texts[language].contactTitle}</h2>
            <form className="contact-form" onSubmit={sendEmail}>
              <div className="form-row">
                <label htmlFor="name">{texts[language].contactForm.name}</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-row">
                <label htmlFor="email">{texts[language].contactForm.email}</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-row">
                <label htmlFor="message">{texts[language].contactForm.message}</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="hero-btn" style={{marginTop: '1.2rem'}}>{texts[language].contactForm.send}</button>
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
